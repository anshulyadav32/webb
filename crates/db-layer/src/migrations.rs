use common_types::AppError;
use sqlx::PgPool;

pub async fn run_migrations(pool: &PgPool) -> Result<(), AppError> {
    sqlx::query(
        r#"
        CREATE TABLE IF NOT EXISTS users (
            id UUID PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            name VARCHAR(255) NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            dob VARCHAR(50),
            profile_image TEXT,
            role VARCHAR(50) NOT NULL DEFAULT 'User',
            subscription_tier VARCHAR(50) NOT NULL DEFAULT 'Free',
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS devices (
            id UUID PRIMARY KEY,
            user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            name VARCHAR(255) NOT NULL,
            device_type VARCHAR(100) NOT NULL,
            protocol VARCHAR(50) NOT NULL,
            address VARCHAR(255) NOT NULL,
            status VARCHAR(100) NOT NULL DEFAULT 'Disconnected',
            capabilities JSONB NOT NULL DEFAULT '[]',
            last_seen TIMESTAMPTZ,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS courses (
            id UUID PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            category VARCHAR(100) NOT NULL,
            difficulty VARCHAR(50) NOT NULL,
            estimated_hours INT NOT NULL DEFAULT 10,
            topics_count INT NOT NULL DEFAULT 5,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS questions (
            id UUID PRIMARY KEY,
            course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
            topic VARCHAR(255) NOT NULL,
            question_text TEXT NOT NULL,
            question_type VARCHAR(50) NOT NULL,
            options JSONB NOT NULL DEFAULT '[]',
            correct_option_index INT NOT NULL,
            explanation TEXT NOT NULL,
            difficulty VARCHAR(50) NOT NULL,
            points INT NOT NULL DEFAULT 10
        );

        CREATE TABLE IF NOT EXISTS study_progress (
            user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
            mastery_percentage DOUBLE PRECISION NOT NULL DEFAULT 0.0,
            study_streak_days INT NOT NULL DEFAULT 0,
            total_study_minutes INT NOT NULL DEFAULT 0,
            exams_taken INT NOT NULL DEFAULT 0,
            cards_due_today INT NOT NULL DEFAULT 0,
            PRIMARY KEY (user_id, course_id)
        );
        "#,
    )
    .execute(pool)
    .await
    .map_err(|e| AppError::DatabaseError(format!("Failed running schema migrations: {}", e)))?;

    Ok(())
}
