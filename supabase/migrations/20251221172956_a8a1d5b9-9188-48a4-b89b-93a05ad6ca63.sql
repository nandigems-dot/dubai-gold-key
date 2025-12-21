-- Add length constraints to protect against oversized inputs
ALTER TABLE public.leads
  ADD CONSTRAINT leads_full_name_length CHECK (length(full_name) <= 100),
  ADD CONSTRAINT leads_mobile_length CHECK (length(mobile) <= 20),
  ADD CONSTRAINT leads_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT leads_source_length CHECK (length(source) <= 50),
  ADD CONSTRAINT leads_medium_length CHECK (length(medium) <= 50),
  ADD CONSTRAINT leads_campaign_length CHECK (length(campaign) <= 100),
  ADD CONSTRAINT leads_page_url_length CHECK (length(page_url) <= 500);