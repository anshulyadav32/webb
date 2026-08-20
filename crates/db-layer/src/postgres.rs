use common_types::AppError;
use sqlx::{postgres::PgPoolOptions, PgPool};
use std::time::Duration;

#[derive(Clone)]
pub struct DbPool {
    pub pool: PgPool,
}

impl DbPool {
    pub async fn connect(database_url: &str) -> Result<Self, AppError> {
        let pool = PgPoolOptions::new()
            .max_connections(20)
            .acquire_timeout(Duration::from_secs(5))
            .connect(database_url)
            .await
            .map_err(|e| AppError::DatabaseError(format!("Failed to connect to PostgreSQL: {}", e)))?;

        Ok(Self { pool })
    }

    pub fn inner(&self) -> &PgPool {
        &self.pool
    }
}
