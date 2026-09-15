# ⚡ QUICK SETUP - LANZAR EN 5 MIN

## 🎯 STATUS
- ✅ Código completo en GitHub
- ✅ Frontend listo (HTML puro)
- ✅ Backend listo (Node.js)
- ✅ Freemium modelo listo
- ⏳ Solo falta: API keys

## 🔑 PASO 1: OBTENER KEYS (2 min)

### Claude API Key
1. Ve a: https://console.anthropic.com/api_keys
2. Click "Create Key"
3. Copia el valor (empieza con `sk-ant-`)

### Stripe TEST Keys
1. Ve a: https://dashboard.stripe.com/test/apikeys
2. Copia:
   - Secret Key (sk_test_...)
   - Publishable Key (pk_test_...)

## ⚙️ PASO 2: CREAR .env (1 min)

En `backend/.env`:
```
PORT=3001
NODE_ENV=production
CLAUDE_API_KEY=sk-ant-YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
DATABASE_URL=./database.db
```

## 🚀 PASO 3: INICIAR SERVIDORES (2 min)

```bash
# Terminal 1 - Backend
cd backend
npm install
npm start

# Terminal 2 - Frontend
cd frontend
python -m http.server 8000
```

## ✅ LISTO

- Frontend: http://localhost:8000
- Backend: http://localhost:3001
- Demo API: http://localhost:3001/api/health

## 📦 DEPLOY GRATIS

Cuando esté listo:
1. Vercel (recomendado): `npm install -g vercel && vercel --prod`
2. Railway: https://railway.app/new
3. Render: https://render.com/new

¡LISTO! 🎉
