-- Migration: create_links_table
-- Description: Initial schema for the URL shortener service.

-- Table: links
create table public.links (
  id uuid primary key default gen_random_uuid(),
  original_url text not null,
  short_code text not null unique,
  clicks integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Index for fast lookups by short_code
create index idx_links_short_code on public.links (short_code);

-- Function: auto-update updated_at on row change
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger: call set_updated_at before every update on links
create trigger links_set_updated_at
  before update on public.links
  for each row
  execute function public.set_updated_at();

-- RLS: Enable Row Level Security
alter table public.links enable row level security;

-- Policy: allow anonymous reads (required for redirects)
create policy "Allow public read"
  on public.links
  for select
  using (true);

-- Policy: allow anonymous inserts (required for shortening URLs)
create policy "Allow public insert"
  on public.links
  for insert
  with check (true);

-- Policy: allow anonymous updates (required for click counting)
create policy "Allow public update"
  on public.links
  for update
  using (true);
