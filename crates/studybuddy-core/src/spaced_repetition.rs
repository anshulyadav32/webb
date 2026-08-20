use chrono::{Duration, Utc};
use common_types::SpacedRepetitionCard;
use uuid::Uuid;

pub struct SpacedRepetitionEngine;

impl SpacedRepetitionEngine {
    /// SuperMemo SM-2 algorithm: updates repetition count, interval days, and ease factor
    /// `quality`: 0 (blackout) to 5 (perfect recall)
    pub fn update_card(card: &mut SpacedRepetitionCard, quality: u8) {
        let q = quality.min(5) as f64;

        if q >= 3.0 {
            if card.repetitions == 0 {
                card.interval_days = 1;
            } else if card.repetitions == 1 {
                card.interval_days = 6;
            } else {
                card.interval_days = ((card.interval_days as f64) * card.ease_factor).round() as u32;
            }
            card.repetitions += 1;
        } else {
            card.repetitions = 0;
            card.interval_days = 1;
        }

        // Ease factor formula: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
        let new_ef = card.ease_factor + (0.1 - (5.0 - q) * (0.08 + (5.0 - q) * 0.02));
        card.ease_factor = new_ef.max(1.3);
        card.next_review_at = Utc::now() + Duration::days(card.interval_days as i64);
    }

    pub fn new_card(user_id: Uuid, question_id: Uuid) -> SpacedRepetitionCard {
        SpacedRepetitionCard {
            id: Uuid::new_v4(),
            user_id,
            question_id,
            repetitions: 0,
            interval_days: 1,
            ease_factor: 2.5,
            next_review_at: Utc::now() + Duration::days(1),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sm2_perfect_score() {
        let mut card = SpacedRepetitionEngine::new_card(Uuid::new_v4(), Uuid::new_v4());
        
        SpacedRepetitionEngine::update_card(&mut card, 5);
        assert_eq!(card.repetitions, 1);
        assert_eq!(card.interval_days, 1);

        SpacedRepetitionEngine::update_card(&mut card, 5);
        assert_eq!(card.repetitions, 2);
        assert_eq!(card.interval_days, 6);

        SpacedRepetitionEngine::update_card(&mut card, 5);
        assert_eq!(card.repetitions, 3);
        assert!(card.interval_days > 6);
    }
}
