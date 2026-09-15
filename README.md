# AI Sales Machine

Generador automático de emails de ventas y copywriting impulsado por Claude AI.

## Stack Tecnológico

- **Backend**: Node.js + Express
- **Frontend**: HTML + Vanilla JS
- **IA**: Claude API (Anthropic)
- **Pagos**: Stripe
- **Hosting**: Vercel (backend) + GitHub Pages (frontend)

## Instalación Local

### Backend

```bash
cd backend
npm install

# Crear archivo .env
echo "PORT=3001
CLAUDE_API_KEY=sk-ant-xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
APP_URL=http://localhost:3000" > .env

npm run dev
```

Backend estará disponible en: http://localhost:3001

### Frontend

```bash
cd frontend
# Servir con Python o cualquier servidor HTTP
python -m http.server 3000
```

Frontend estará disponible en: http://localhost:3000

## API Endpoints

### Generar Emails
```
POST /api/generate-emails
{
  "product": "CRM para startups",
  "audience": "Founders de B2B",
  "competitor": "Salesforce",
  "count": 10
}
```

### Generar Ad Copy
```
POST /api/generate-copy
{
  "product": "CRM para startups",
  "audience": "Founders de B2B",
  "platform": "facebook"  // facebook, google, tiktok
}
```

### Crear Sesión de Pago
```
POST /api/checkout
{
  "plan": "pro",  // starter, pro, enterprise
  "email": "user@example.com"
}
```

## Estructura de Carpetas

```
ai-sales-machine/
├── backend/
│   ├── server.js           (Servidor principal)
│   ├── claude-service.js   (Generador de IA)
│   ├── stripe-service.js   (Pagos)
│   ├── .env               (Variables de entorno)
│   └── package.json
├── frontend/
│   └── index.html         (Landing page)
└── docs/
    └── deployment.md
```

## Próximos Pasos

1. ✅ Backend creado
2. ✅ Frontend creado
3. ⏳ Desplegar en Vercel
4. ⏳ Conectar dominio aquabreath.shop
5. ⏳ Configurar Stripe keys
6. ⏳ Lanzar y conseguir primeros clientes

## Objetivo

📈 **$100K/mes en 90 días** con 50-100 clientes activos a $1000-$2000/mes

---

**Status**: 🚀 Ready for launch
