# 🤖 OBLIVION + Mastra AI Assistant - Quick Start

## What Was Added

A **separate Mastra application** that provides AI-powered job assistance for OBLIVION users.

### Location
```
BC-main/
└── mastra-agents/          # NEW: Mastra AI agents project
    ├── src/mastra/
    │   ├── index.ts        # Main configuration
    │   ├── agents/
    │   │   └── job-assistant.ts
    │   └── tools/
    │       └── oblivion-api.ts
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── README.md
```

---

## 🎯 What It Does

The **Job Assistant Agent** helps users:
- ✅ Understand ML job types (training vs inference)
- ✅ Configure job parameters
- ✅ Estimate appropriate reward amounts
- ✅ Check worker availability
- ✅ Submit jobs with AI guidance

---

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd mastra-agents
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env and add:
# - OPENAI_API_KEY (get from platform.openai.com)
# - OBLIVION_API_URL (http://localhost:3000 for local dev)
```

### 3. Test Locally

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

---

## 🌐 Deploy to Mastra Cloud

### Option A: Quick Deploy

1. **Create GitHub repo** for mastra-agents:
   ```bash
   cd mastra-agents
   git init
   git add .
   git commit -m "OBLIVION AI assistant"
   git remote add origin https://github.com/YOUR_USERNAME/oblivion-mastra-agents.git
   git push -u origin main
   ```

2. **Deploy to Mastra Cloud**:
   - Go to https://cloud.mastra.ai/
   - Sign in with GitHub
   - Create new project
   - Import `oblivion-mastra-agents` repo
   - Set Mastra directory: `src/mastra`
   - Add environment variables:
     - `OPENAI_API_KEY`
     - `OBLIVION_API_URL` (your Vercel URL)
   - Deploy!

### Option B: Keep in Main Repo

You can also keep mastra-agents as a subdirectory in the main BC repo and deploy from there.

---

## 🔗 Integration

After deploying to Mastra Cloud, you'll get an API endpoint:
```
https://your-deployment.mastra.ai/api/agents/jobAssistant/chat
```

Add to your Next.js frontend:

```typescript
// Add AI chat to your OBLIVION UI
const chatWithAssistant = async (message: string) => {
  const response = await fetch(
    'https://your-deployment.mastra.ai/api/agents/jobAssistant/chat',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    }
  );
  return await response.json();
};
```

---

## 📊 Architecture

```
┌─────────────────────────────────────────┐
│  Mastra Cloud                           │
│  └── Job Assistant Agent                │
└─────────────┬───────────────────────────┘
              │ REST API
              ▼
┌─────────────────────────────────────────┐
│  Vercel (Main OBLIVION App)             │
│  └── Next.js Frontend                   │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Railway/Render (Python Workers)        │
└─────────────────────────────────────────┘
```

---

## 📝 Important Notes

- **This is optional** - Main OBLIVION app works without it
- **Deploy main app first** - Then update `OBLIVION_API_URL`
- **Requires OpenAI API key** - Costs apply for GPT-4 usage
- **Tools use mock data** - Update with real Supabase queries in production

---

## 📚 Full Documentation

See `mastra-agents/README.md` for complete documentation.

---

**This hybrid approach gives you the best of both worlds: your existing OBLIVION platform + AI-powered assistance!** 🚀
