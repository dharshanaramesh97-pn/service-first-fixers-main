# Quick Start: EmailJS Integration

## 📝 What Was Done
The hero section form now sends email responses to **mmrefrigeration2025@gmail.com** using EmailJS.

## ⚡ Quick Setup (5 minutes)

### 1. Create EmailJS Account
```
https://www.emailjs.com/ → Sign Up
```

### 2. Get Your Credentials
From EmailJS Dashboard:
- **Service ID**: Email Services → Copy Service ID
- **Template ID**: Email Templates → Copy Template ID  
- **Public Key**: Account → API Keys → Copy Public Key

### 3. Set Environment Variables
Create `.env.local` in project root:
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=public_key_abc123
```

### 4. Install & Run
```bash
npm install
npm run dev
```

### 5. Test It
- Visit http://localhost:5173
- Fill the hero form
- Click Submit
- ✅ Email arrives at mmrefrigeration2025@gmail.com

## 📧 Email Template Setup

In EmailJS, create a template with these variables:
- `{{to_email}}` → mmrefrigeration2025@gmail.com
- `{{service_type}}` → Fridge/Washing/RO
- `{{from_name}}` → Customer name
- `{{phone_number}}` → Customer phone
- `{{message}}` → Issue description

**Copy template from:** `EMAIL_TEMPLATE_EXAMPLE.html`

## 📁 Files Modified/Created

| File | Purpose |
|------|---------|
| `src/lib/emailService.ts` | Email sending logic |
| `src/components/HeroSection.tsx` | Updated form with email integration |
| `package.json` | Added @emailjs/browser |
| `.env.example` | Environment variable template |
| `EMAILJS_SETUP.md` | Detailed setup guide |
| `EMAIL_TEMPLATE_EXAMPLE.html` | Email template reference |

## ✨ Features
✅ Real email sending  
✅ Form validation  
✅ Loading state feedback  
✅ Error handling  
✅ Success notifications  

## ❓ Need Help?
See `EMAILJS_SETUP.md` for troubleshooting and detailed instructions.
