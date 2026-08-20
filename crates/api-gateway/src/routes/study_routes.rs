use axum::{extract::Path, http::StatusCode, response::IntoResponse, Json};
use common_types::{ApiResponse, ExamSession, ExamSubmission, StudyProgress};
use studybuddy_core::{CourseRepository, ExamEvaluator};
use uuid::Uuid;

pub async fn list_courses() -> impl IntoResponse {
    let courses = CourseRepository::get_sample_courses();
    (StatusCode::OK, Json(ApiResponse::success(courses, "Fetched courses successfully"))).into_response()
}

pub async fn start_exam(
    Path(course_id): Path<Uuid>,
) -> impl IntoResponse {
    let questions = CourseRepository::get_course_questions(course_id);
    let session = ExamSession {
        id: Uuid::new_v4(),
        user_id: Uuid::new_v4(),
        course_id,
        title: "Rust Systems & IoT Mastery Exam".to_string(),
        questions,
        total_points: 40,
        time_limit_seconds: Some(1800),
        started_at: chrono::Utc::now(),
        completed_at: None,
    };

    (StatusCode::CREATED, Json(ApiResponse::success(session, "Exam session initialized"))).into_response()
}

pub async fn submit_exam(
    Path(course_id): Path<Uuid>,
    Json(submission): Json<ExamSubmission>,
) -> impl IntoResponse {
    let questions = CourseRepository::get_course_questions(course_id);
    match ExamEvaluator::evaluate_exam(&submission, &questions) {
        Ok(result) => (StatusCode::OK, Json(ApiResponse::success(result, "Exam evaluated successfully"))).into_response(),
        Err(e) => (StatusCode::BAD_REQUEST, Json(ApiResponse::error(e.to_string()))).into_response(),
    }
}

pub async fn get_user_progress(
    Path((_user_id, course_id)): Path<(Uuid, Uuid)>,
) -> impl IntoResponse {
    let progress = StudyProgress {
        user_id: Uuid::new_v4(),
        course_id,
        mastery_percentage: 87.5,
        study_streak_days: 14,
        total_study_minutes: 420,
        exams_taken: 5,
        cards_due_today: 12,
    };

    (StatusCode::OK, Json(ApiResponse::success(progress, "Progress metrics loaded"))).into_response()
}
