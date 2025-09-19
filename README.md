# 🚀 One-Click Bitcoin Yield Shuttle

> **Track:** Bitcoin Unleashed
> **Problem:** Most BTC sits idle. Moving it into DeFi involves multiple high-friction steps.
> **Solution:** A **one-click app** that accepts native BTC (L1 or Lightning), bridges it to Starknet, and deploys into a yield protocol automatically.

---

## ✨ Features
- **Seamless Wallet Integration** — Connect with [Xverse Wallet](https://www.xverse.app/) for native BTC support.
- **Cross-Chain Bridge** — Powered by [Atomiq SDK](https://atomiq.fi/) to convert BTC → WBTC on Starknet.
- **Automatic Yield Deployment** — Smart contracts written in Cairo route assets into:
  - **Troves / Endur** yield vaults *(aggregator option)*
  - **Vesu** lending pools *(lending option)*
- **One-Click UX** — Deposit BTC, see yield accrual instantly.

---

## 🛠️ Tech Stack
- **Frontend:** React / Next.js
- **Wallet:** Xverse Wallet SDK
- **Bridge:** Atomiq SDK
- **Smart Contracts:** Cairo on Starknet
- **Yield Protocols:** Troves, Endur, Vesu

---

## 📐 Architecture Overview
1. **User connects** BTC wallet via Xverse.
2. **User clicks** “One-Click Shuttle.”
3. **BTC bridges** to Starknet WBTC via Atomiq SDK.
4. **Smart contract** auto-deposits into yield protocol.
5. **User dashboard** shows yield position + balance.

---

## 🚧 Project Structure

oneclick-yield-shuttle/
├── frontend/         # Next.js UI, wallet integration, bridge calls
├── contracts/        # Cairo smart contracts for yield deposit
├── backend/          # Optional Node.js orchestration layer
└── README.md

---

## ✅ Setup & Run

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Contracts

```bash
cd contracts
scarb build
scarb test
```

### Deploy to Starknet testnet:

```bash
scarb cairo-run --contract OneClickYield.cairo
```

⸻

## 📋 Hackathon Roadmap
	•	Wallet connect with Xverse
	•	Frontend scaffold (React/Next.js)
	•	Atomiq bridge integration (mock if needed)
	•	Cairo contract: deposit, withdraw, get_user_position
	•	Connect frontend to Starknet contract
	•	Yield protocol integration (Troves or Vesu)
	•	Demo polish: landing page, fake APY chart

⸻

## 🎯 Potential Outcome

A seamless BTC → DeFi yield app that reduces onboarding friction to a single click.
Post-hackathon, this project could be extended into a production-ready protocol and is a strong candidate for a Starknet Foundation grant.

⸻

## 🙌 Sponsors & Thanks

Special thanks to:
Starkware, Starknet Foundation, Xverse, Atomiq, Troves, Endur, Vesu
