##AI helped a lot here
# Stage 1: Build
FROM golang:1.27.3 AS builder
WORKDIR /app

# Copy dependencies
COPY go.mod go.sum* ./

RUN go mod download

# Copy source code
COPY . .

# Compile Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o calculator .

# Stage 2: Production
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/calculator .

EXPOSE 8080

CMD ["./calculator"]
