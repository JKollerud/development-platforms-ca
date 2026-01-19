import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://acyehiutsvoxtddlyzjp.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjeWVoaXV0c3ZveHRkZGx5empwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTM3MDgsImV4cCI6MjA4NDM4OTcwOH0.63gwe2o4DMqXo3acsRYtAXI7_pixyDmfHw7C70pE5gk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
