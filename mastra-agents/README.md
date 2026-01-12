# 🤖 OBLIVION Mastra AI Agents

AI-powered job assistant for the OBLIVION decentralized machine learning platform.

## 📋 Overview

This is a **Mastra application** that provides AI assistant capabilities for OBLIVION users. It runs separately from the main OBLIVION application and can be deployed to Mastra Cloud.

### Features

- **Job Assistant Agent**: Helps users understand and configure ML jobs
- **Network Queries**: Check worker availability and network status
- **Job Submission**: AI-guided job creation and submission
- **Cost Estimation**: Recommend appropriate reward amounts

## 🏗️ Architecture

```
OBLIVION Hybrid Architecture:
┌─────────────────────────────────────────┐
│  Mastra Cloud (this project)            │
│  ├── Job Assistant Agent                │
│  └── OBLIVION API Tools                 │
└─────────────┬───────────────────────────┘
              │ REST API
              ▼
┌─────────────────────────────────────────┐
│  Main OBLIVION App (Vercel)             │
│  ├── Next.js Frontend                   │
│  └── Supabase Database                  │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Python Workers (Railway/Render)        │
└─────────────────────────────────────────┘
```

## 🚀 Local Development

### Prerequisites

- Node.js 20+
- OpenAI API key

### Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY

# Run locally
npm run dev
```

### Test the Agent

```bash
npm run dev
```

You should see:
```
🤖 OBLIVION Mastra Agents initialized
📋 Available agents: jobAssistant
🛠️  Available tools: queryOblivion, submitJob, getWorkerStats
✅ Ready to deploy to Mastra Cloud!
```

## 🌐 Deploy to Mastra Cloud

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "OBLIVION Mastra AI agents"

# Create new GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/oblivion-mastra-agents.git
git push -u origin main
```

### Step 2: Deploy to Mastra Cloud

1. Go to https://cloud.mastra.ai/
2. Sign in with GitHub
3. Click **"Create new project"**
4. Import your GitHub repository
5. Configure:
   - **Project Root**: `/`
   - **Mastra Directory**: `src/mastra`
   - **Branch**: `main`
6. Add environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `OBLIVION_API_URL`: Your Vercel deployment URL
7. Click **"Deploy Project"**

### Step 3: Verify Deployment

- Check Mastra Cloud dashboard
- Test agent in Mastra Studio
- Verify API endpoints are exposed

## 🔗 Integration with Main OBLIVION App

After deploying to Mastra Cloud, you'll get an API endpoint like:
```
https://your-deployment.mastra.ai/api/agents/jobAssistant/chat
```

Add this to your main OBLIVION frontend to enable AI chat:

```typescript
// In your Next.js app
const chatWithAssistant = async (message: string) => {
  const response = await fetch('https://your-deployment.mastra.ai/api/agents/jobAssistant/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  return await response.json();
};
```

## 📁 Project Structure

```
mastra-agents/
├── src/
│   └── mastra/
│       ├── index.ts              # Main configuration
│       ├── agents/
│       │   └── job-assistant.ts  # Job assistant agent
│       └── tools/
│           └── oblivion-api.ts   # OBLIVION API tools
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 🛠️ Available Tools

### queryOblivion
Query the OBLIVION network for job status, worker information, or network statistics.

### submitJob
Submit a new training or inference job to the OBLIVION network.

### getWorkerStats
Get current statistics about available workers.

## 📝 Notes

- This project is designed to work alongside the main OBLIVION application
- The main OBLIVION app should be deployed to Vercel/Railway first
- Update `OBLIVION_API_URL` in environment variables after deployment
- Tools currently return mock data - update with actual Supabase queries in production

## 🔗 Related Projects

- **Main OBLIVION App**: https://github.com/dharshan7200/BC
- **Deployment Guide**: See `DEPLOYMENT_QUICK_START.md` in main repo

## 📄 License

MIT
