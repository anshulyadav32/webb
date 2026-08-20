use common_types::AppError;
use redis::aio::ConnectionManager;
use redis::AsyncCommands;

#[derive(Clone)]
pub struct CacheManager {
    manager: ConnectionManager,
}

impl CacheManager {
    pub async fn connect(redis_url: &str) -> Result<Self, AppError> {
        let client = redis::Client::open(redis_url)
            .map_err(|e| AppError::DatabaseError(format!("Invalid Redis URL: {}", e)))?;

        let manager = ConnectionManager::new(client)
            .await
            .map_err(|e| AppError::DatabaseError(format!("Redis connection manager failed: {}", e)))?;

        Ok(Self { manager })
    }

    pub async fn set_json<T: serde::Serialize>(&self, key: &str, value: &T, ttl_secs: u64) -> Result<(), AppError> {
        let serialized = serde_json::to_string(value)
            .map_err(|e| AppError::InternalError(format!("Serialization error: {}", e)))?;

        let mut conn = self.manager.clone();
        let _: () = conn
            .set_ex(key, serialized, ttl_secs)
            .await
            .map_err(|e| AppError::DatabaseError(format!("Redis set_ex failed: {}", e)))?;

        Ok(())
    }

    pub async fn get_json<T: serde::de::DeserializeOwned>(&self, key: &str) -> Result<Option<T>, AppError> {
        let mut conn = self.manager.clone();
        let raw: Option<String> = conn
            .get(key)
            .await
            .map_err(|e| AppError::DatabaseError(format!("Redis get failed: {}", e)))?;

        match raw {
            Some(data) => {
                let parsed = serde_json::from_str::<T>(&data)
                    .map_err(|e| AppError::InternalError(format!("Deserialization error: {}", e)))?;
                Ok(Some(parsed))
            }
            None => Ok(None),
        }
    }

    pub async fn delete(&self, key: &str) -> Result<(), AppError> {
        let mut conn = self.manager.clone();
        let _: () = conn
            .del(key)
            .await
            .map_err(|e| AppError::DatabaseError(format!("Redis del failed: {}", e)))?;

        Ok(())
    }
}
