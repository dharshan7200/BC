# 🚀 Quick Deployment Reference

**OBLIVION** is now configured for multi-platform deployment!

## 📦 What Was Added

### Configuration Files
- ✅ [`vercel.json`](file:///c:/Users/admin/Desktop/BC-main/vercel.json) - Vercel deployment config
- ✅ [`node-client/railway.json`](file:///c:/Users/admin/Desktop/BC-main/node-client/railway.json) - Railway deployment config
- ✅ [`node-client/.python-version`](file:///c:/Users/admin/Desktop/BC-main/node-client/.python-version) - Python version specification
- ✅ [`node-client/Procfile`](file:///c:/Users/admin/Desktop/BC-main/node-client/Procfile) - Render deployment config

### Documentation
- 📚 **Full Guide**: See artifact `deployment_guide.md` for complete instructions

---

## ⚡ Quick Start

### 1️⃣ Setup Database (Supabase)
```bash
# 1. Create project at supabase.com
# 2. Run SQL migrations:
#    - database/schema.sql
#    - database/fair_job_distribution.sql
# 3. Copy API credentials
```

### 2️⃣ Deploy Frontend (Vercel)
```bash
# Push to GitHub
git add .
git commit -m "Add deployment configs"
git push origin main

# Deploy at vercel.com
# - Import GitHub repo
# - Set root directory: web
# - Add environment variables:
#   NEXT_PUBLIC_SUPABASE_URL
#   NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### 3️⃣ Deploy Workers (Railway)
```bash
cd node-client

# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up

# Set environment variables
railway variables set SUPABASE_URL=https://xxxxx.supabase.co
railway variables set SUPABASE_KEY=your_key
railway variables set RPC_URL=https://polygon-amoy-bor-rpc.publicnode.com
railway variables set CONTRACT_ADDRESS=0x81347e742b9239e190881BE7cd8C6F3758f10257
```

**OR use Render** (alternative to Railway):
- Go to render.com
- Create Background Worker
- Connect GitHub repo
- Set root directory: `node-client`
- Add environment variables

---

## 🔍 Verification Checklist

- [ ] Frontend loads at Vercel URL
- [ ] MetaMask connects successfully
- [ ] Worker appears in Supabase `nodes` table
- [ ] Submit test job from frontend
- [ ] Worker claims and processes job
- [ ] Download completed model

---

## 📚 Full Documentation

For detailed instructions, troubleshooting, and advanced configuration:
👉 **See artifact: `deployment_guide.md`**

---

## 🆘 Quick Troubleshooting

**Frontend not loading?**
→ Check Vercel environment variables

**Worker not registering?**
→ Verify Supabase credentials in Railway/Render

**Jobs not being claimed?**
→ Ensure `claim_job()` function exists (run fair_job_distribution.sql)

---

## 🌐 Deployment Platforms

| Component | Platform | URL |
|-----------|----------|-----|
| Frontend | Vercel | https://vercel.com |
| Workers | Railway | https://railway.app |
| Workers (Alt) | Render | https://render.com |
| Database | Supabase | https://supabase.com |

---

**Ready to deploy? Follow the full guide in `deployment_guide.md`!** 🚀
