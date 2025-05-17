# ========================
# 1. ビルドステージ (Alpine かつ CGO無効)
# ========================
FROM golang:1.24-alpine AS builder
WORKDIR /app

# 依存解決
COPY go.mod go.sum ./
RUN go mod download

# ソースをコピーして、CGO無効＋最適化オプションでスタティックビルド
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o server .

# ========================
# 2. 実行ステージ (Alpine)
# ========================
FROM alpine:3.18
# HTTPS用証明書だけ入れる
RUN apk add --no-cache ca-certificates

WORKDIR /app
COPY --from=builder /app/server .

# Cloud Run が渡す PORT 環境変数を読む想定
ENV PORT=8080
EXPOSE 8080

CMD ["./server"]
