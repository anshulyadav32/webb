# 🦀 ControlBuddy + StudyBuddy + WebBuddy (100% Pure Rust Architecture)

<p align="center">
  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%2300F2FE'/><stop offset='50%25' stop-color='%23818CF8'/><stop offset='100%25' stop-color='%23C084FC'/></linearGradient></defs><polygon points='50,7 87,27 87,73 50,93 13,73 13,27' fill='%230F172A' stroke='url(%23g)' stroke-width='4'/><polyline points='26,34 38,72 50,47 62,72 74,34' stroke='url(%23g)' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 60 C24 77 74 84 88 50' stroke='%2300F2FE' stroke-width='3' stroke-linecap='round'/><circle cx='50' cy='24' r='3.5' fill='%2300F2FE'/></svg>" width="96" height="96" alt="Platform Logo" />
</p>

<h3 align="center">Next-Gen Ultra-High Performance Rust Ecosystem</h3>

<p align="center">
  All legacy and foreign desktop stacks (such as Electron) have been eliminated. The entire platform runs on a <strong>100% Pure Rust Backend, Hardware Core, and Tauri 2 Desktop Shell</strong>.
</p>

---

## 🏛️ Cargo Workspace & Rust Crates

```
platform/
├── Cargo.toml                       # Root Cargo Workspace
├── Dockerfile                       # Multi-stage release builder
├── docker-compose.yml               # PostgreSQL 16 + Redis + Meilisearch + API Gateway
│
├── crates/
│   ├── common-types/                # Shared Serde schemas & DTOs
│   ├── auth-service/                # Argon2 password hashing + JWT rotation & auth
│   ├── db-layer/                    # PostgreSQL SQLx pool, Redis client & migrations
│   ├── controlbuddy-core/           # Bluetooth BLE (btleplug), Serial/USB & MQTT dispatcher
│   ├── studybuddy-core/             # Course engine, automated exam evaluator & SM-2 algorithm
│   └── api-gateway/                 # Axum 0.7 REST & WebSocket telemetry server
│
└── src-tauri/                       # Tauri 2 Desktop core with native WebKit & macOS vibrancy
```

---

## 🛠️ 100% Rust Tech Stack

| Layer | Technology | Crates / Libraries |
|---|---|---|
| **API Gateway** | Rust | `axum = "0.7"`, `tokio`, `tower`, `tower-http` |
| **Hardware & IoT** | Rust | `btleplug` (BLE), `serialport` (USB), `rumqttc` (MQTT) |
| **Learning Engine** | Rust | SuperMemo SM-2, automated scoring & weakness analysis |
| **Auth & Security** | Rust | `argon2`, `jsonwebtoken`, `rand` |
| **Database & Cache** | Rust | `sqlx = "0.8"` (Postgres), `redis = "0.26"` |
| **Desktop App** | Rust | `tauri = "2"`, `wry` (WebKit), `window-vibrancy` |

---

## 🚀 Running the Rust Workspace

### 1. Compile & Verify All Crates
```bash
cargo check --workspace
cargo test --workspace
```

### 2. Launch the Axum API Gateway
```bash
cargo run --bin api-gateway
```
API runs on `http://localhost:8080` (REST & WebSocket `/ws`).

### 3. Launch Native Tauri 2 Desktop App
```bash
npm run macos
# or
npx tauri dev
```

### 4. Production Cloud Deployment (Docker)
```bash
docker compose up --build
```

---

## 📄 License
Licensed under the MIT License.
