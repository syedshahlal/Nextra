---
title: Getting Started Guide
description: Step-by-step guide to get started with GRA Core Platform
tags: [guide, beginner]
---

# Getting Started Guide

Welcome to GRA Core Platform! This guide will help you get up and running in just a few minutes.

## Prerequisites

Before you begin, make sure you have:

- A GRA Core Platform account
- Basic knowledge of REST APIs
- Your preferred programming language (Python, JavaScript, etc.)

## Step 1: Create Your Account

1. Visit [app.gracore.com](https://app.gracore.com)
2. Click "Sign Up" and fill in your details
3. Verify your email address
4. Complete the onboarding flow

## Step 2: Get Your API Key

1. Navigate to Settings → API Keys
2. Click "Create New Key"
3. Give your key a descriptive name
4. Copy and securely store your API key

!!! warning "Keep Your API Key Secure"
    Never share your API key publicly or commit it to version control.

## Step 3: Install the SDK

Choose your preferred language:

### Python
\`\`\`bash
pip install gracore-sdk
\`\`\`

### JavaScript/Node.js
\`\`\`bash
npm install @gracore/sdk
\`\`\`

### Go
\`\`\`bash
go get github.com/gracore/go-sdk
\`\`\`

## Step 4: Make Your First API Call

\`\`\`python
from gracore import Client

# Initialize the client
client = Client(api_key="your-api-key-here")

# List your models
models = client.models.list()
print(f"You have {len(models)} models")
\`\`\`

## Next Steps

Now that you're set up, explore these resources:

- [Deploy Your First Model](/docs/intro/quick-start)
- [API Reference](/docs/api)
- [Code Examples](/docs/samples)
- [Best Practices](/docs/features)
