use common_types::{AppError, ExamResult, ExamSubmission, Question};
use std::collections::HashMap;

pub struct ExamEvaluator;

impl ExamEvaluator {
    pub fn evaluate_exam(
        submission: &ExamSubmission,
        questions: &[Question],
    ) -> Result<ExamResult, AppError> {
        let question_map: HashMap<uuid::Uuid, &Question> = questions.iter().map(|q| (q.id, q)).collect();

        let mut correct_count = 0;
        let mut total_points = 0;
        let mut earned_points = 0;
        let mut weak_topics = Vec::new();

        for ans in &submission.answers {
            if let Some(q) = question_map.get(&ans.question_id) {
                total_points += q.points;
                if ans.selected_option_index == q.correct_option_index {
                    correct_count += 1;
                    earned_points += q.points;
                } else {
                    if !weak_topics.contains(&q.topic) {
                        weak_topics.push(q.topic.clone());
                    }
                }
            }
        }

        let total_questions = questions.len().max(1);
        let score_percentage = if total_points > 0 {
            (earned_points as f64 / total_points as f64) * 100.0
        } else {
            (correct_count as f64 / total_questions as f64) * 100.0
        };

        let passed = score_percentage >= 70.0;
        let feedback = if passed {
            format!("Outstanding performance! You achieved {:.1}% mastery.", score_percentage)
        } else {
            format!("Score: {:.1}%. Review recommended topics to strengthen mastery.", score_percentage)
        };

        let recommendations = if weak_topics.is_empty() {
            vec!["Ready for next advanced course module.".to_string()]
        } else {
            weak_topics.into_iter().map(|t| format!("Review fundamentals of {}", t)).collect()
        };

        Ok(ExamResult {
            exam_id: submission.exam_id,
            score_percentage,
            correct_answers: correct_count,
            total_questions,
            passed,
            feedback,
            recommendations,
            completed_at: chrono::Utc::now(),
        })
    }
}
