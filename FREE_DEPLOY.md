# 🆓 DEPLOY 100% GRATUITO

## SERVICIOS GRATIS

```
✅ Backend: Railway.app (gratis)
✅ Frontend: GitHub Pages (gratis)
✅ Dominio: railway.app subdomain (gratis)
✅ Claude API: Tier gratis ($5/mes crédito)
✅ Stripe: Pruebas gratis
✅ Emails: Mailgun free tier (gratis)
```

**TOTAL COSTO**: $0/mes 💰

---

## PASO 1: GITHUB (5 min)

1. Crear cuenta: https://github.com (si no tienes)
2. Crear repo: `ai-sales-machine`
3. Subir código:

```bash
cd C:\Users\semer\Nueva carpeta\ai-sales-machine
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USER/ai-sales-machine.git
git push -u origin main
```

---

## PASO 2: RAILWAY (5 min) - BACKEND

1. Ir a: https://railway.app
2. Sign up con GitHub
3. New Project → Deploy from GitHub
4. Seleccionar repo `ai-sales-machine`
5. Railway detectará Node.js automáticamente

**Configurar variables de entorno en Railway:**
```
CLAUDE_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_test_...
NODE_ENV=production
```

**Tu URL será:** `https://ai-sales-machine.up.railway.app`

---

## PASO 3: GITHUB PAGES (5 min) - FRONTEND

1. En tu repo GitHub → Settings
2. Pages → Deploy from branch
3. Branch: `main`
4. Folder: `/frontend`

**Tu URL será:** `https://tu-username.github.io/ai-sales-machine`

---

## PASO 4: CONECTAR FRONTEND → BACKEND

En `frontend/index.html`, cambiar:

```javascript
// DE:
fetch('http://localhost:3001/api/generate-emails', {

// A:
fetch('https://ai-sales-machine.up.railway.app/api/generate-emails', {
```

Commit + push

---

## PASO 5: API KEYS GRATIS

### Claude API (Gratis)
1. https://console.anthropic.com
2. Create API key
3. $5/mes de crédito gratis

### Stripe (Gratis para pruebas)
1. https://dashboard.stripe.com
2. Create test keys (automático)
3. No cobran nada en modo test

---

## LIMITACIONES TIER GRATUITO

| Servicio | Límite |
|----------|--------|
| **Railway** | 500 horas/mes (suficiente) |
| **GitHub Pages** | Ilimitado |
| **Claude API** | $5/mes (gratis) |
| **Stripe** | Ilimitado (modo test) |

**Total users que puedes soportar**: 1,000+ con tier gratis

---

## SETUP COMPLETO - 15 minutos

```bash
# 1. GitHub
git init && git add . && git commit -m "Initial" && git push

# 2. Railway
# Ir a railway.app → sign up → connect repo → deploy

# 3. GitHub Pages
# Settings → Pages → Branch: main → Folder: /frontend

# 4. Actualizar frontend con URL correcta
# Cambiar localhost:3001 → railway.app URL

# 5. Verificar
curl https://ai-sales-machine.up.railway.app/api/health
```

---

## PRÓXIMO PASO: MONETIZAR

Con infraestructura gratis:
- 100% de ingresos es ganancia
- Stripe toma 2.9% + $0.30/transacción
- TÚ ganas 97.1% de cada pago

---

## PROYECCIÓN CON TIER GRATIS

| Momento | Usuarios | Ingresos mensuales |
|---------|----------|------------------|
| **Mes 1** | 100 | $200-500 |
| **Mes 2** | 500 | $1,000-2,500 |
| **Mes 3** | 1,000+ | $2,000-5,000 |
| **Mes 6** | 5,000+ | $10,000-25,000 |

**SIN PAGAR NI UN CENTAVO EN INFRAESTRUCTURA** 💰

---

## COMANDOS RÁPIDOS

```bash
# Clonar si es necesario
git clone https://github.com/TU_USER/ai-sales-machine.git
cd ai-sales-machine

# Inicializar git (si es nuevo)
git init
git add .
git commit -m "Initial commit: AI Sales Machine Freemium Platform"

# Crear repo en GitHub y subir
# (hacer en github.com primero)
git remote add origin https://github.com/TU_USER/ai-sales-machine.git
git branch -M main
git push -u origin main
```

---

**TOTAL COSTO: $0/mes**
**SETUP TIME: 15 minutos**
**READY TO LAUNCH: Hoy mismo** 🚀
