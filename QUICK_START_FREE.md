# ⚡ QUICK START - LANZAR GRATIS EN 15 MIN

## PASO A PASO

### 1. GitHub (3 min)

```bash
# Terminal/CMD en la carpeta del proyecto
cd C:\Users\semer\Nueva carpeta\ai-sales-machine

git init
git add .
git commit -m "AI Sales Machine - Freemium Platform"

# En github.com: Crear repo nuevo "ai-sales-machine"
# Luego:
git remote add origin https://github.com/TU_USUARIO/ai-sales-machine.git
git branch -M main
git push -u origin main
```

### 2. Obtener API Keys Gratis (3 min)

**Claude API:**
- https://console.anthropic.com
- Create API key
- Copiar: `sk-ant-...`

**Stripe:**
- https://dashboard.stripe.com/test/apikeys
- Copiar Secret + Publishable (son TEST keys, gratis)

**Guardar en backend/.env:**
```
CLAUDE_API_KEY=sk-ant-YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
NODE_ENV=production
```

### 3. Deploy Backend - Railway (5 min)

1. https://railway.app
2. Sign up con GitHub
3. New Project → GitHub Repo
4. Seleccionar `ai-sales-machine`
5. Railway deploys automáticamente

**Railway crea URL:** `https://ai-sales-machine.up.railway.app` (o similar)

**Agregar variables de entorno:**
```
CLAUDE_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_test_...
NODE_ENV=production
```

### 4. Actualizar Frontend (2 min)

En `frontend/index.html`, línea ~270:

```javascript
// CAMBIAR:
fetch('http://localhost:3001/api/generate-emails', {

// POR:
fetch('https://ai-sales-machine.up.railway.app/api/generate-emails', {
```

Hacer mismo para `/api/generate-copy`

```bash
git add frontend/index.html
git commit -m "Update API endpoint to production"
git push
```

### 5. Deploy Frontend - GitHub Pages (2 min)

En GitHub:
1. Settings → Pages
2. Source: Deploy from branch
3. Branch: `main`
4. Folder: `frontend`
5. Click Save

**Tu URL:** `https://tu-username.github.io/ai-sales-machine`

---

## ✅ RESULTADO FINAL

```
🎉 APP LIVE Y GRATIS

Frontend:  https://tu-username.github.io/ai-sales-machine
Backend:   https://ai-sales-machine.up.railway.app
Costo:     $0/mes ✨

API Keys:  
- Claude (gratis, $5 crédito)
- Stripe (test, gratis)

Listo para:
✅ Usuarios gratis (14 days unlimited)
✅ Pagos con Stripe
✅ Generación con Claude AI
```

---

## TEST RÁPIDO

Cuando esté live, prueba:

```bash
curl https://ai-sales-machine.up.railway.app/api/health
# Debería devolver: {"status":"OK"}
```

---

## PROYECCIÓN SIN GASTAR NADA

| Mes | Usuarios | Ingresos |
|-----|----------|----------|
| 1 | 100 | $200-500 |
| 2 | 500 | $1,000-2,500 |
| 3 | 1,000+ | $2,000-5,000 |
| 6 | 5,000+ | $10,000-25,000 |

**0% gastos en infraestructura = 100% ganancia** 💰

---

## SIGUIENTE: MARKETING

Una vez live, lanzar:
1. Twitter/X (posts diarios)
2. ProductHunt
3. Discord communities
4. Email outreach

Ver: `FREEMIUM_STRATEGY.md`

---

**TIEMPO TOTAL: 15 MINUTOS**
**COSTO TOTAL: $0**
**INGRESOS POTENCIALES: $2,000-5,000/mes Mes 3**

🚀 **VAMOS A HACERLO**
