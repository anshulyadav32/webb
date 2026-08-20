use common_types::{Course, DifficultyLevel, Question, QuestionType};
use uuid::Uuid;

pub struct CourseRepository;

impl CourseRepository {
    pub fn get_sample_courses() -> Vec<Course> {
        vec![
            Course {
                id: Uuid::parse_str("a1111111-1111-1111-1111-111111111111").unwrap(),
                title: "Rust Systems Programming & Microservices".to_string(),
                description: "Master Tokio async, Axum API gateways, memory safety, and high-performance Rust design patterns.".to_string(),
                category: "Computer Science".to_string(),
                difficulty: DifficultyLevel::Advanced,
                estimated_hours: 25,
                topics_count: 8,
                created_at: chrono::Utc::now(),
            },
            Course {
                id: Uuid::parse_str("b2222222-2222-2222-2222-222222222222").unwrap(),
                title: "IoT Hardware & Embedded Control".to_string(),
                description: "Bluetooth BLE, Serial/UART, MQTT bridges, and smart home hardware automation.".to_string(),
                category: "Hardware Engineering".to_string(),
                difficulty: DifficultyLevel::Intermediate,
                estimated_hours: 18,
                topics_count: 6,
                created_at: chrono::Utc::now(),
            },
        ]
    }

    pub fn get_course_questions(course_id: Uuid) -> Vec<Question> {
        vec![
            Question {
                id: Uuid::new_v4(),
                course_id,
                topic: "Async Concurrency".to_string(),
                question_text: "Which Rust crate provides the de-facto asynchronous multi-threaded runtime with work-stealing scheduler?".to_string(),
                question_type: QuestionType::MultipleChoice,
                options: vec!["Tokio".to_string(), "Actix".to_string(), "Rayon".to_string(), "Futures-rs".to_string()],
                correct_option_index: 0,
                explanation: "Tokio is the industry-standard event-driven, non-blocking I/O platform for writing asynchronous applications in Rust.".to_string(),
                difficulty: DifficultyLevel::Beginner,
                points: 10,
            },
            Question {
                id: Uuid::new_v4(),
                course_id,
                topic: "Memory Safety".to_string(),
                question_text: "What rule governs mutable aliasing in Rust's borrow checker?".to_string(),
                question_type: QuestionType::MultipleChoice,
                options: vec![
                    "You can have any number of immutable references OR exactly one mutable reference at a time.".to_string(),
                    "You can have multiple mutable references if protected by a garbage collector.".to_string(),
                    "References are automatically converted to pointers in release mode.".to_string(),
                    "Mutable references can outlive the owner.".to_string(),
                ],
                correct_option_index: 0,
                explanation: "Rust enforces XOR aliasing: Aliasing XOR Mutability. Either multiple immutable references (&T) or a single unique mutable reference (&mut T).".to_string(),
                difficulty: DifficultyLevel::Intermediate,
                points: 15,
            },
            Question {
                id: Uuid::new_v4(),
                course_id,
                topic: "Hardware & Protocols".to_string(),
                question_text: "Which protocol operates over Bluetooth Low Energy (BLE) for discovering characteristics and services?".to_string(),
                question_type: QuestionType::MultipleChoice,
                options: vec!["GATT (Generic Attribute Profile)".to_string(), "MQTT-SN".to_string(), "CoAP".to_string(), "Modbus RTU".to_string()],
                correct_option_index: 0,
                explanation: "GATT establishes how BLE devices send and receive short pieces of data known as attributes over dedicated services.".to_string(),
                difficulty: DifficultyLevel::Intermediate,
                points: 15,
            },
        ]
    }
}
