# 🔑 Obtener API Keys - 10 minutos

## PASO 1: CLAUDE API KEY (3 minutos)

1. Ir a: https://console.anthropic.com
2. Click en "API keys" 
3. Click en "Create Key"
4. Copiar la key (empieza con `sk-ant-`)
5. Guardarla en seguro

**En tu .env:**
```
CLAUDE_API_KEY=sk-ant-xxx...
```

---

## PASO 2: STRIPE KEYS (5 minutos)

1. Ir a: https://dashboard.stripe.com
2. Ir a Settings → API keys
3. Copiar:
   - **Secret Key** (empieza con `sk_test_`)
   - **Publishable Key** (empieza con `pk_test_`)
4. Guardarlas

**En tu .env:**
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

## PASO 3: APP URL (Vercel)

Después de desplegar en Vercel, tu URL será:
```
https://aquabreath.shop  (o tu dominio)
```

**En tu .env:**
```
APP_URL=https://aquabreath.shop
```

---

## .env COMPLETO

```
PORT=3001
CLAUDE_API_KEY=sk-ant-xxx...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
APP_URL=https://aquabreath.shop
NODE_ENV=production
```

---

## VERIFICAR KEYS

```bash
curl -X POST http://localhost:3001/api/generate-emails \
  -H "Content-Type: application/json" \
  -d '{
    "product": "Test Product",
    "audience": "Test Audience",
    "count": 2
  }'
```

Si devuelve JSON con emails = ✅ Funcionando

---

**Total time: 10 minutos**
