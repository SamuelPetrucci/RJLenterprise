# Supabase Setup for RLJ Enterprise

## Database Setup

### 1. Create the RLJ Contact Table

Run the SQL script in your Supabase dashboard:

```sql
-- Copy and paste the contents of supabase/rlj_contact_table.sql
-- into your Supabase SQL editor and execute it
```

### 2. Environment Variables

Add these variables to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration (for future setup)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=partners@rljenterprisect.com

# Existing variables
GROQ_API_KEY=your_groq_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Supabase Project Setup

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or use existing one
3. Go to Settings > API
4. Copy the Project URL and API keys
5. Add them to your `.env.local` file

### 4. Table Schema

The `rlj_contact` table includes:

- **Basic Contact Info**: first_name, last_name, email, phone
- **Business Info**: company, interest (service type)
- **Message**: message content
- **Tracking**: status, source, form_type (contact/partnership)
- **Timestamps**: created_at, updated_at (auto-updated)

### 5. Security

- Row Level Security (RLS) is enabled
- Service role can manage all records
- Anyone can insert new contact records
- Automatic timestamp updates via triggers

## API Routes

The following API routes will be created:

- `POST /api/contact` - Submit contact form
- `POST /api/partnership` - Submit partnership form
- `GET /api/admin/contacts` - View submissions (admin only)
- `PUT /api/admin/contacts/[id]` - Update contact status (admin only)

## Email Notifications (Future Setup)

Email routes are set up but require SMTP configuration:

- Contact form submissions
- Partnership inquiries
- Admin notifications
- Auto-responses to users

## Getting Your Supabase Credentials

1. **Project URL**: Dashboard > Settings > API > Project URL
2. **Anon Key**: Dashboard > Settings > API > Project API keys > anon public
3. **Service Role Key**: Dashboard > Settings > API > Project API keys > service_role (keep secret!)

## Next Steps

1. Run the SQL script in Supabase
2. Add environment variables
3. Install Supabase client: `npm install @supabase/supabase-js`
4. Test the API routes
5. Configure email settings when ready
