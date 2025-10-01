# 🎉 Email Setup Complete - Testing Instructions

## ✅ What's Been Set Up

Your email system is now fully configured and ready to test! Here's what's in place:

### 1. Environment Variables (`.env.local`) ✅
All required SMTP variables are configured:
- ✅ `SMTP_HOST` = smtp.gmail.com
- ✅ `SMTP_PORT` = 587
- ✅ `SMTP_USER` = partners@rljenterprisect.com
- ✅ `SMTP_PASSWORD` = [Your Gmail App Password]
- ✅ `SMTP_FROM` = partners@rljenterprisect.com
- ✅ `NEXT_PUBLIC_SITE_URL` = http://localhost:3000

### 2. Email Functionality
- ✅ Contact form emails (admin + user confirmation)
- ✅ Partnership form emails (admin + user confirmation)
- ✅ Test email endpoint for verification
- ✅ Beautiful HTML email templates with RLJ branding

### 3. Testing Tools
- ✅ Email configuration checker (`npm run check-email`)
- ✅ Test email API endpoint (`/api/test-email`)
- ✅ Visual test email page (`/test-email`)

---

## 🚀 How to Test (Step-by-Step)

### Step 1: Start the Development Server

Open a terminal in your project directory and run:

```bash
npm run dev
```

Wait for the message: `✓ Ready in [X]ms` or `Local: http://localhost:3000`

### Step 2: Test Email Configuration

**Option A: Visual Test Page (Recommended)**

1. Open your browser and go to: **http://localhost:3000/test-email**
2. You'll see a nice interface with a test button
3. Enter an email address (or use the default company email)
4. Click "📧 Send Test Email"
5. Check the results on the page
6. Check your email inbox (and spam folder)

**Option B: Direct API Test**

Open your browser and go to: **http://localhost:3000/api/test-email**

This will:
- Send a test email to partners@rljenterprisect.com
- Show you a JSON response with success/failure info

**Option C: Command Line Check**

```bash
npm run check-email
```

This verifies all your environment variables are set correctly.

### Step 3: Test the Contact Form

1. Go to: **http://localhost:3000/contact**
2. Fill out the form with test data
3. Use a real email address you can check (like your personal email)
4. Submit the form
5. Check TWO inboxes:
   - ✉️ **Company email** (partners@rljenterprisect.com) → Should receive admin notification
   - ✉️ **Your test email** → Should receive confirmation message

### Step 4: Test the Partnership Form

1. Go to the home page: **http://localhost:3000**
2. Scroll to the partnership section
3. Click "Become a Partner" or find the partnership form
4. Fill it out with test data
5. Submit and verify emails are received (same as above)

---

## 📧 What Emails Will Be Sent?

### When Contact Form is Submitted:

**Email 1: Admin Notification** → `partners@rljenterprisect.com`
- Subject: "New Contact Form Submission - RLJ Enterprise"
- Contains all form details
- Reply-to is set to the user's email
- Includes submission timestamp

**Email 2: User Confirmation** → User's email address
- Subject: "Thank You for Contacting RLJ Enterprise"
- Personalized thank you message
- Includes what they submitted
- Company contact information
- Professional RLJ branding

### When Partnership Form is Submitted:

**Email 1: Admin Notification** → `partners@rljenterprisect.com`
- Subject: "New Partnership Inquiry - RLJ Enterprise"
- Contains all partnership details
- Reply-to is set to the user's email

**Email 2: User Confirmation** → User's email address
- Subject: "Thank You for Your Partnership Inquiry - RLJ Enterprise"
- Personalized partnership response
- Next steps information
- Company contact details

---

## 🔍 Troubleshooting

### Check Your Terminal Logs

When you submit a form or test email, watch your terminal. You should see:

**Success looks like:**
```
📧 Creating transporter with:
  host: smtp.gmail.com
  port: 587
  user: partners@rljenterprisect.com
  passwordSet: true
📧 Sending email to: [email]
✅ Email sent successfully! Message ID: <...>
✅ Admin notification sent!
✅ User confirmation sent!
```

**Failure looks like:**
```
❌ Email sending error: [error details]
```

### Common Issues:

**"Invalid login" or "Authentication failed"**
- Make sure you're using a Gmail App Password (not regular password)
- Verify 2FA is enabled on partners@rljenterprisect.com
- Check that the password in `.env.local` is correct

**"SMTP_PASSWORD not set"**
- Restart your dev server after changing `.env.local`
- Run `npm run check-email` to verify variables are set

**Emails not received**
- Check spam/junk folders
- Verify the email addresses are correct
- Check terminal for error messages
- Try the test endpoint first

**Server won't start**
- Check if another process is using port 3000
- Try `npx kill-port 3000` then restart
- Check for syntax errors in the code

---

## ✅ Testing Checklist

Before considering email setup complete:

- [ ] `npm run check-email` shows all variables are set
- [ ] Dev server starts without errors
- [ ] Test page loads: http://localhost:3000/test-email
- [ ] Test email sends successfully
- [ ] Test email received in inbox (check spam too)
- [ ] Contact form submits successfully
- [ ] Admin notification received for contact form
- [ ] User confirmation received for contact form
- [ ] Partnership form submits successfully
- [ ] Admin notification received for partnership
- [ ] User confirmation received for partnership
- [ ] All emails have proper formatting and branding
- [ ] Reply-to works correctly (replying to admin email goes to user)

---

## 📁 Files Created/Modified

### New Files:
- ✅ `src/app/api/test-email/route.ts` - Test email endpoint
- ✅ `src/app/test-email/page.tsx` - Visual test page
- ✅ `scripts/check-email-config.js` - Config verification script
- ✅ `EMAIL_TEST_GUIDE.md` - Detailed testing guide
- ✅ `TESTING_INSTRUCTIONS.md` - This file
- ✅ `.env.local.example` - Example environment file

### Modified Files:
- ✅ `package.json` - Added `check-email` script
- ✅ `.env.local` - Added `NEXT_PUBLIC_SITE_URL`

### Existing Email Files:
- ✅ `src/lib/email.ts` - Email sending utility
- ✅ `src/app/api/email/contact/route.ts` - Contact email handler
- ✅ `src/app/api/email/partnership/route.ts` - Partnership email handler
- ✅ `src/app/api/contact/route.ts` - Contact form handler
- ✅ `src/app/api/partnership/route.ts` - Partnership form handler

---

## 🎯 Quick Start Command

```bash
# 1. Verify configuration
npm run check-email

# 2. Start dev server
npm run dev

# 3. Open test page in browser
# http://localhost:3000/test-email

# 4. Test contact form
# http://localhost:3000/contact
```

---

## 📞 Next Steps

1. **Test locally** using the instructions above
2. **Verify all emails are received** correctly
3. **Check email formatting** looks professional
4. **Test on multiple devices** if needed
5. When ready for production:
   - Add environment variables to Vercel
   - Update `NEXT_PUBLIC_SITE_URL` to production URL
   - Deploy and test in production

---

## 💡 Pro Tips

- Keep your terminal open when testing to see real-time logs
- Test with different email providers (Gmail, Yahoo, Outlook, etc.)
- Check both desktop and mobile email views
- Save a test submission to verify Supabase is also working
- The test page at `/test-email` is great for quick verification

---

**Everything is ready to go! Start your server and begin testing!** 🚀

