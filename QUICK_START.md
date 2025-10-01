# 🚀 Quick Start - Email Testing

## In 3 Steps:

### 1️⃣ Verify Configuration
```bash
npm run check-email
```
**Expected:** All ✅ green checkmarks for SMTP variables

### 2️⃣ Start Server
```bash
npm run dev
```
**Expected:** Server starts on http://localhost:3000

### 3️⃣ Test Email
Open browser: **http://localhost:3000/test-email**

Click the button and check your email!

---

## 📝 Test Checklist

Quick validation:

```bash
# Check config
npm run check-email

# Start server
npm run dev
```

Then visit these URLs:

- [ ] http://localhost:3000/test-email (Test endpoint)
- [ ] http://localhost:3000/contact (Contact form)
- [ ] http://localhost:3000/ (Partnership form on homepage)

**Check emails arrive at:**
- partners@rljenterprisect.com (admin notifications)
- Your test email (user confirmations)

---

## ⚡ Troubleshooting One-Liners

**Server won't start?**
```bash
npx kill-port 3000
npm run dev
```

**Variables not loading?**
- Restart dev server (Ctrl+C, then `npm run dev`)
- Run `npm run check-email` to verify

**Email not sending?**
- Check terminal for error messages
- Verify Gmail App Password is correct in `.env.local`
- Check spam folder

---

## 📧 What You Should See

**In Terminal:**
```
✅ Email sent successfully! Message ID: <...>
```

**In Email:**
- Professional branded emails from RLJ Enterprise
- Admin gets: Full form submission details
- User gets: Thank you + confirmation

---

## 🎯 Success Criteria

✅ Test email sends successfully  
✅ Contact form triggers 2 emails  
✅ Partnership form triggers 2 emails  
✅ All emails formatted correctly  
✅ No errors in terminal  

**If all ✅ → You're ready to go live!**

---

For detailed instructions, see: `TESTING_INSTRUCTIONS.md`

