import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://yvflqxdcmrssspbbjfsb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZmxxeGRjbXJzc3NwYmJqZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDM3MjksImV4cCI6MjA5NjU3OTcyOX0.GGCwwqboa7HWk3UNRWsW5zIYIdPm7UHqbDalDq_W8o0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
