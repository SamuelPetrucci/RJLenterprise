# Email Setup Instructions for RLJ Enterprise

## Setting up App Password for partners@rljenterprisect.com

### Step 1: Enable 2-Factor Authentication (Required)
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with partners@rljenterprisect.com
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process (you'll need a phone number)

### Step 2: Generate App Password
1. After 2FA is enabled, go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select app: **Mail**
4. Select device: **Other (Custom name)**
5. Enter name: **RLJ Enterprise Website**
6. Click **Generate**
7. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### Step 3: Update Website Configuration
The app password needs to be added to the website's environment variables:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Environment Variables
   - Add new variable:
     - **Name**: `GMAIL_APP_PASSWORD`
     - **Value**: [paste the 16-character app password]
     - **Environment**: Production (and Preview if needed)
   - Click **Save**

2. **For Local Development:**
   - Create/update `.env.local` file in project root:
   ```
   GMAIL_APP_PASSWORD=your_16_character_app_password_here
   ```

### Step 4: Test Email Notifications
After setting up the app password:
1. Submit a test contact form on the website
2. Check if partners@rljenterprisect.com receives the notification email
3. Check spam folder if email doesn't arrive

## Important Notes:
- **Never share the app password** - it's like a master key to the email account
- **App passwords are different from regular passwords** - they're specifically for applications
- **If you change the app password**, you must update it in Vercel environment variables
- **The app password bypasses 2FA** for the website only

## Troubleshooting:
- If emails aren't sending, check Vercel logs for authentication errors
- Make sure 2FA is enabled before generating app password
- App passwords are only available for Google Workspace accounts with 2FA enabled

## Security:
- The website uses this app password to send emails on your behalf
- It's more secure than using your main password
- You can revoke this app password anytime from Google Account settings

