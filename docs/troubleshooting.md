---
title: Troubleshooting Guide
description: Common issues and solutions
tags: [troubleshooting, support]
---

# Troubleshooting Guide

Having issues? This guide covers the most common problems and their solutions.

## Authentication Issues

### 401 Unauthorized Error

**Problem**: Your API requests are returning 401 Unauthorized.

**Solutions**:
1. Check that your API key is correct
2. Ensure you're using the Authorization header: `Authorization: Bearer your-api-key`
3. Verify your API key hasn't been revoked in the dashboard

### 403 Forbidden Error

**Problem**: Your API key doesn't have sufficient permissions.

**Solutions**:
1. Check if you're using a test key in production
2. Verify your account has the required permissions
3. Contact support if you need additional access

## Model Deployment Issues

### Deployment Stuck in "Deploying" Status

**Problem**: Your model has been deploying for more than 10 minutes.

**Solutions**:
1. Check the deployment logs in the dashboard
2. Verify your model file is accessible and valid
3. Ensure your model size is within limits (< 1GB)
4. Try redeploying with a smaller instance type

### Model Returns 500 Errors

**Problem**: Your deployed model returns internal server errors.

**Solutions**:
1. Check your model's prediction function
2. Verify input data format matches expectations
3. Review model logs for error details
4. Test your model locally before deployment

## Performance Issues

### High Latency

**Problem**: API responses are slower than expected.

**Solutions**:
1. Enable auto-scaling for your models
2. Use a larger instance type
3. Deploy to regions closer to your users
4. Implement request batching

### Rate Limiting

**Problem**: You're hitting rate limits.

**Solutions**:
1. Implement exponential backoff in your client
2. Upgrade to a higher tier plan
3. Optimize your request patterns
4. Use batch endpoints where available

## Getting Help

If you can't find a solution here:

1. Check our [Knowledge Base](https://help.gracore.com)
2. Join our [Discord Community](https://discord.gg/gracore)
3. Contact [Email Support](mailto:support@gracore.com)
4. For urgent issues, use the in-app chat
