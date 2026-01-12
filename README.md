# 🧠 OBLIVION - Decentralized Machine Learning Platform

<div align="center">

![Oblivion Banner](https://img.shields.io/badge/OBLIVION-Decentralized%20ML-emerald?style=for-the-badge&logo=brain&logoColor=white)

**Privacy-Preserving Distributed Machine Learning on Blockchain**

[![Polygon](https://img.shields.io/badge/Polygon-Amoy-8247E5?style=flat-square&logo=polygon)](https://polygon.technology/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-blue?style=flat-square&logo=python)](https://python.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 🌟 Overview

Oblivion is a decentralized machine learning platform that enables:

- **🔐 Privacy-Preserving Training**: Train ML models without exposing raw data
- **🌐 Distributed Compute**: Leverage browser and Python workers worldwide
- **⛓️ Blockchain Verification**: On-chain job tracking and rewards on Polygon
- **🤝 Fair Work Distribution**: Automatic load balancing across all connected workers
- **📊 Real-time Monitoring**: Live visualization of network topology and job status

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         OBLIVION NETWORK                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Browser    │    │   Python     │    │   Server     │       │
│  │   Workers    │    │   Workers    │    │   Workers    │       │
│  │  (Web App)   │    │  (CLI)       │    │  (Future)    │       │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘       │
│         │                   │                   │                │
│         └───────────────────┼───────────────────┘                │
│                             │                                    │
│                    ┌────────▼────────┐                          │
│                    │    Supabase     │                          │
│                    │   (Database +   │                          │
│                    │    Storage)     │                          │
│                    └────────┬────────┘                          │
│                             │                                    │
│                    ┌────────▼────────┐                          │
│                    │  Smart Contract │                          │
│                    │  (Polygon Amoy) │                          │
│                    └─────────────────┘                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 🚀 Features

### For Job Creators
- Submit training and inference jobs via web interface
- Connect MetaMask wallet for on-chain job tracking
- Download trained models in multiple formats (JSON, PyTorch, ONNX, HDF5)
- Real-time job status monitoring

### For Workers
- **Browser Workers**: Contribute compute directly from your browser
- **Python Workers**: Run dedicated high-performance worker nodes
- Fair job distribution ensures equal opportunity
- Automatic heartbeat and job claiming

### Network Features
- Live network topology visualization
- Worker statistics dashboard
- Automatic stale job recovery
- On-chain settlement and rewards
- **🤖 AI Assistant** (Optional): Mastra-powered job creation helper

## 📁 Project Structure

```
BC/
├── web/                         # Next.js 14 Frontend
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── JobCard.tsx
│   │   │   ├── NetworkTopology.tsx
│   │   │   ├── WorkerStats.tsx
│   │   │   └── ModelDownload.tsx
│   │   ├── lib/                 # Supabase client, browser worker
│   │   │   ├── supabase.ts
│   │   │   ├── browserWorker.ts
│   │   │   └── contracts.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx             # Main application
│   ├── public/
│   ├── .env.example             # Environment variables template
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.mjs
│
├── node-client/                 # Python Worker Node
│   ├── sharded_worker.py        # Main worker script
│   ├── aggregator.py            # Gradient aggregation
│   ├── main.py                  # Alternative worker entry
│   ├── test_oblivion_flow.py    # Integration tests
│   ├── requirements.txt         # Python dependencies
│   ├── .env.example             # Worker environment template
│   ├── railway.json             # Railway deployment config
│   ├── .python-version          # Python version specification
│   └── Procfile                 # Render deployment config
│
├── contracts/                   # Solidity Smart Contracts
│   ├── src/
│   │   ├── VouchManager.sol     # Main contract
│   │   ├── MockVerifier.sol     # EZKL verifier mock
│   │   └── .env                 # Contract deployment keys
│   ├── deploy_contracts.py      # Deployment script
│   ├── check_contract.py        # Contract verification
│   ├── check_balance.py         # Wallet balance checker
│   ├── check_gas.py             # Gas estimation
│   ├── diagnose_tx.py           # Transaction debugger
│   └── deployed_addresses.json  # Deployed contract addresses
│
├── database/                    # SQL Schemas & Functions
│   ├── schema.sql               # Main database schema
│   ├── fair_job_distribution.sql # Job claiming logic
│   ├── create_claim_job.sql     # Claim job function
│   └── update_nodes_policy.sql  # RLS policies
│
├── model/                       # ML Model & EZKL Proofs
│   ├── train.py                 # Model training script
│   ├── network.onnx             # Exported ONNX model
│   ├── compile_circuit.py       # EZKL circuit compilation
│   ├── test_ezkl.py             # EZKL integration tests
│   ├── input.json               # Sample input data
│   ├── settings.json            # EZKL settings
│   ├── witness_test.json        # Test witness
│   └── requirements.txt         # ML dependencies
│
├── visualizer_app/              # Streamlit Dashboard
│   └── app.py                   # Network visualization
│
├── sample_job/                  # Example Training Data
│   ├── dataset.csv              # Sample dataset
│   └── training_script.py       # Example training job
│
├── mastra-agents/               # AI Assistant (Optional)
│   ├── src/mastra/
│   │   ├── index.ts             # Mastra configuration
│   │   ├── agents/              # Job assistant agent
│   │   └── tools/               # OBLIVION API tools
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── README.md
│   └── QUICK_START.md
│
├── vercel.json                  # Vercel deployment config
├── DEPLOYMENT.md                # Original deployment guide
├── DEPLOYMENT_QUICK_START.md    # Quick deployment reference
├── WORKER_DISTRIBUTION.md       # Worker architecture docs
├── README.md                    # This file
└── .gitignore                   # Git ignore rules
```


## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- Python 3.11+
- MetaMask wallet
- Supabase account

### 1. Clone Repository

```bash
git clone https://github.com/sanjaykumar-nb/BC.git
cd BC
```

### 2. Frontend Setup

```bash
cd web
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

**Required environment variables for web:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Python Worker Setup

```bash
cd node-client
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create environment file
cp .env.example .env
# Edit .env with your credentials
```

**Required environment variables for worker:**
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
RPC_URL=https://polygon-amoy-bor-rpc.publicnode.com
CONTRACT_ADDRESS=your_deployed_contract_address
PRIVATE_KEY=your_wallet_private_key  # Optional, for on-chain settlement
```

### 4. Database Setup

Run the SQL files in your Supabase SQL Editor in this order:
1. `database/schema.sql`
2. `database/fair_job_distribution.sql`

### 5. Smart Contract (Optional)

Deploy contracts to Polygon Amoy:
```bash
cd contracts
python deploy_contracts.py
```

## 🏃 Running

### Start Frontend

```bash
cd web
npm run dev
```
Open http://localhost:3000

### Start Python Worker

```bash
cd node-client
python sharded_worker.py
```

### Start Visualizer (Optional)

```bash
cd visualizer_app
streamlit run app.py
```

## 💡 Usage

### Creating a Job

1. Connect your MetaMask wallet on the web interface
2. Click "New Job" and fill in:
   - Job Type: Training or Inference
   - Reward amount (MATIC)
   - Model hash or script URL
3. Submit the transaction

### Running as a Worker

**Browser Worker:**
- Simply keep the web app open with wallet connected
- Worker automatically claims and processes jobs

**Python Worker:**
- Run `python sharded_worker.py`
- Worker registers and starts polling for jobs
- Supports concurrent job processing

### Downloading Models

After a training job completes:
1. Click the "Model" dropdown on the job card
2. Select format: JSON, PyTorch (.pt), ONNX, Pickle, or HDF5
3. Model downloads automatically

## 🔧 Configuration

### Worker Load Balancing

The system uses fair distribution to ensure work is split evenly:
- Each worker tracks `current_jobs` count
- Workers with fewer jobs get priority
- Maximum 2 concurrent jobs per worker (configurable)
- Stale jobs automatically reset after 10 minutes

### Network Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Heartbeat Interval | 15s | Worker health check frequency |
| Poll Interval | 2-5s | Job polling frequency (adaptive) |
| Max Concurrent Jobs | 2 | Jobs per worker limit |
| Stale Job Timeout | 10min | Auto-reset stuck jobs |

## 🔐 Security

- **No raw data exposure**: Workers only see encrypted data shards
- **Sandboxed execution**: Python workers run scripts in restricted environment
- **On-chain verification**: Job completion verified on Polygon
- **RLS policies**: Database access controlled via Supabase RLS

## 🛣️ Roadmap

- [ ] EZKL proof verification for model integrity
- [ ] Federated learning with differential privacy
- [ ] GPU worker support (CUDA/WebGPU)
- [ ] Token-based incentives
- [ ] Model marketplace
- [ ] Cross-chain deployment

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built with ❤️ by the Oblivion team

---

<div align="center">

**[Documentation](WORKER_DISTRIBUTION.md)** • **[Report Bug](https://github.com/sanjaykumar-nb/BC/issues)** • **[Request Feature](https://github.com/sanjaykumar-nb/BC/issues)**

</div>
