# Email Testing Guide for RLJ Enterprise

## Quick Setup

### 1. Configure Environment Variables

Make sure your `.env.local` file in the project root has these variables:

```env
# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=partners@rljenterprisect.com
SMTP_PASSWORD=your_16_character_app_password_here
SMTP_FROM=partners@rljenterprisect.com

# Site URL (important for email API calls)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:** Replace `your_16_character_app_password_here` with the actual Gmail App Password.

### 2. Getting Your Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with `partners@rljenterprisect.com`
3. Enable **2-Step Verification** if not already enabled
4. Click **App passwords** under "Signing in to Google"
5. Select app: **Mail**
6. Select device: **Other (Custom name)**
7. Enter name: **RLJ Enterprise Website**
8. Click **Generate**
9. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
10. Paste it in `.env.local` as the `SMTP_PASSWORD` value (remove spaces)

### 3. Test Email Configuration

#### Option A: Using the Test API Endpoint
1. Start your dev server: `npm run dev`
2. Open your browser and go to: `http://localhost:3000/api/test-email`
3. This will send a test email to the company email (partners@rljenterprisect.com)
4. Check the email inbox and also check your terminal for logs

#### Option B: Test with a Specific Email
Send a GET request: `http://localhost:3000/api/test-email?to=your-test-email@example.com`

#### Option C: Test via Contact Form
1. Start your dev server: `npm run dev`
2. Go to: `http://localhost:3000/contact`
3. Fill out the contact form with test data
4. Submit the form
5. Check both:
   - Company email (partners@rljenterprisect.com) - should receive admin notification
   - The email you entered in the form - should receive confirmation

### 4. What to Check

**In your terminal, you should see:**
```
📧 Creating transporter with:
  host: smtp.gmail.com
  port: 587
  user: partners@rljenterprisect.com
  passwordSet: true
📧 Sending email to: [recipient]
✅ Email sent successfully! Message ID: [id]
```

**You should receive two emails:**
1. **Admin Notification** → sent to `partners@rljenterprisect.com`
   - Contains form submission details
   - Has the user's email as reply-to
   
2. **User Confirmation** → sent to the email entered in the form
   - Thanks them for reaching out
   - Includes a copy of their message

### 5. Common Issues & Solutions

#### Issue: "Invalid login" or "Authentication failed"
- **Solution:** Make sure you're using an App Password, not your regular Gmail password
- Verify 2FA is enabled on the Gmail account

#### Issue: "Missing SMTP_PASSWORD"
- **Solution:** Check that `.env.local` exists in the project root (not in `src/`)
- Verify the variable name is exactly `SMTP_PASSWORD`
- Restart your dev server after changing `.env.local`

#### Issue: Email not received
- **Solution:** 
  - Check spam/junk folder
  - Verify the email addresses in the code are correct
  - Check terminal logs for any error messages
  - Make sure `SMTP_FROM` matches `SMTP_USER`

#### Issue: "SMTP_HOST not set" in logs
- **Solution:** 
  - Restart your dev server (`Ctrl+C` then `npm run dev`)
  - Environment variables are only loaded on server startup

### 6. Testing Checklist

- [ ] `.env.local` file exists in project root
- [ ] All SMTP variables are set correctly
- [ ] Gmail App Password is generated and copied correctly
- [ ] Dev server restarted after updating `.env.local`
- [ ] Test endpoint returns success: `http://localhost:3000/api/test-email`
- [ ] Company receives admin notification emails
- [ ] Users receive confirmation emails
- [ ] Emails are properly formatted with RLJ Enterprise branding

### 7. What Happens When Forms Are Submitted

**Contact Form Flow:**
1. User submits form → `/api/contact`
2. Data saved to Supabase database
3. Email API called → `/api/email/contact`
4. Two emails sent:
   - Admin notification → `partners@rljenterprisect.com`
   - User confirmation → user's email

**Partnership Form Flow:**
1. User submits form → `/api/partnership`
2. Data saved to Supabase database
3. Email API called → `/api/email/partnership`
4. Two emails sent:
   - Admin notification → `partners@rljenterprisect.com`
   - User confirmation → user's email

### 8. Monitoring Email Delivery

Check your terminal logs for these indicators:

**Success:**
```
✅ Email sent successfully! Message ID: <...>
✅ Admin notification sent!
✅ User confirmation sent!
```

**Failure:**
```
❌ Email sending error: [error details]
⚠️ Email sending failed (but form was saved)
```

### 9. Production Deployment

When deploying to Vercel:
1. Go to your Vercel project → Settings → Environment Variables
2. Add all SMTP variables
3. Update `NEXT_PUBLIC_SITE_URL` to your production URL
4. Redeploy the site

---

## Need Help?

If you're still having issues after following this guide:
1. Check the terminal logs for specific error messages
2. Verify all environment variables are set correctly
3. Make sure you're using a Gmail App Password (not regular password)
4. Test with the `/api/test-email` endpoint first before testing forms

