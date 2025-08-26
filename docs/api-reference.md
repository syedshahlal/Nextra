---
title: API Reference
description: Complete REST API documentation
tags: [api, reference]
---

# API Reference

The GRA Core Platform API is organized around REST principles with predictable URLs, JSON responses, and standard HTTP response codes.

## Base URL

All API requests should be made to:

\`\`\`
https://api.gracore.com/v1
\`\`\`

## Authentication

Include your API key in the Authorization header:

\`\`\`bash
curl -H "Authorization: Bearer your-api-key" \
  https://api.gracore.com/v1/models
\`\`\`

## Rate Limits

- **Free tier**: 1,000 requests/hour
- **Pro tier**: 10,000 requests/hour
- **Enterprise**: Custom limits

## Models API

### List Models

\`\`\`http
GET /v1/models
\`\`\`

**Response:**
\`\`\`json
{
  "data": [
    {
      "id": "mod_1234567890",
      "name": "sentiment-classifier",
      "status": "active",
      "created_at": "2024-01-15T10:00:00Z"
    }
  ]
}
\`\`\`

### Deploy Model

\`\`\`http
POST /v1/models
\`\`\`

**Request:**
\`\`\`json
{
  "name": "my-model",
  "framework": "sklearn",
  "model_url": "s3://bucket/model.pkl"
}
\`\`\`

### Make Prediction

\`\`\`http
POST /v1/models/{model_id}/predict
\`\`\`

**Request:**
\`\`\`json
{
  "instances": [
    {"text": "This is great!"}
  ]
}
\`\`\`

**Response:**
\`\`\`json
{
  "predictions": [
    {"class": "positive", "probability": 0.89}
  ]
}
\`\`\`

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `429` - Rate Limited
- `500` - Server Error

Error responses include details:

\`\`\`json
{
  "error": {
    "code": "invalid_parameter",
    "message": "The parameter 'framework' is required"
  }
}
