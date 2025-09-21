-- RLJ Contact Submissions Table
-- This table is separate from other entities and specifically for RLJ Enterprise contact forms

CREATE TABLE public.rlj_contact (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  email character varying NOT NULL,
  phone character varying NOT NULL,
  company character varying,
  interest character varying NOT NULL,
  message text NOT NULL,
  status character varying DEFAULT 'new'::character varying CHECK (status::text = ANY (ARRAY['new'::character varying, 'contacted'::character varying, 'in_progress'::character varying, 'closed'::character varying]::text[])),
  source character varying DEFAULT 'RLJ Enterprise Website'::character varying,
  form_type character varying NOT NULL CHECK (form_type::text = ANY (ARRAY['contact'::character varying, 'partnership'::character varying]::text[])),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT rlj_contact_pkey PRIMARY KEY (id)
);

-- Create indexes for better performance
CREATE INDEX idx_rlj_contact_status ON public.rlj_contact(status);
CREATE INDEX idx_rlj_contact_created_at ON public.rlj_contact(created_at);
CREATE INDEX idx_rlj_contact_form_type ON public.rlj_contact(form_type);

-- Enable Row Level Security (RLS)
ALTER TABLE public.rlj_contact ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to access all records
CREATE POLICY "Service role can manage all rlj_contact records" ON public.rlj_contact
  FOR ALL USING (auth.role() = 'service_role');

-- Create policy for authenticated users to insert records
CREATE POLICY "Anyone can insert rlj_contact records" ON public.rlj_contact
  FOR INSERT WITH CHECK (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_rlj_contact_updated_at 
  BEFORE UPDATE ON public.rlj_contact 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
