use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum QuestionType {
    MultipleChoice,
    TrueFalse,
    FillInBlank,
    CodeSnippet,
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum DifficultyLevel {
    Beginner,
    Intermediate,
    Advanced,
    Expert,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Course {
    pub id: Uuid,
    pub title: String,
    pub description: String,
    pub category: String,
    pub difficulty: DifficultyLevel,
    pub estimated_hours: u32,
    pub topics_count: usize,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Question {
    pub id: Uuid,
    pub course_id: Uuid,
    pub topic: String,
    pub question_text: String,
    pub question_type: QuestionType,
    pub options: Vec<String>,
    pub correct_option_index: usize,
    pub explanation: String,
    pub difficulty: DifficultyLevel,
    pub points: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ExamSession {
    pub id: Uuid,
    pub user_id: Uuid,
    pub course_id: Uuid,
    pub title: String,
    pub questions: Vec<Question>,
    pub total_points: u32,
    pub time_limit_seconds: Option<u32>,
    pub started_at: DateTime<Utc>,
    pub completed_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct QuestionAnswer {
    pub question_id: Uuid,
    pub selected_option_index: usize,
    pub time_spent_seconds: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ExamSubmission {
    pub exam_id: Uuid,
    pub answers: Vec<QuestionAnswer>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ExamResult {
    pub exam_id: Uuid,
    pub score_percentage: f64,
    pub correct_answers: usize,
    pub total_questions: usize,
    pub passed: bool,
    pub feedback: String,
    pub recommendations: Vec<String>,
    pub completed_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpacedRepetitionCard {
    pub id: Uuid,
    pub user_id: Uuid,
    pub question_id: Uuid,
    pub repetitions: u32,
    pub interval_days: u32,
    pub ease_factor: f64, // SuperMemo SM-2 default 2.5
    pub next_review_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct StudyProgress {
    pub user_id: Uuid,
    pub course_id: Uuid,
    pub mastery_percentage: f64,
    pub study_streak_days: u32,
    pub total_study_minutes: u32,
    pub exams_taken: u32,
    pub cards_due_today: u32,
}
