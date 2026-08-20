# Stage 1: Build Rust Binaries
FROM rust:1.80-bullseye as builder

WORKDIR /usr/src/app

# Pre-fetch and cache dependencies
COPY Cargo.toml Cargo.lock ./
COPY crates ./crates
COPY src-tauri ./src-tauri

RUN cargo build --release --bin api-gateway

# Stage 2: Minimal Distroless / Debian Slim Runtime
FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    libssl1.1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /usr/src/app/target/release/api-gateway /app/api-gateway

EXPOSE 8080

ENV RUST_LOG=info

CMD ["/app/api-gateway"]
