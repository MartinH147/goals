import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rpiacublarufouiutzcb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwaWFjdWJsYXJ1Zm91aXV0emNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxOTc0NTAsImV4cCI6MjA0NTc3MzQ1MH0.WQiwHJFYKYWSjFbRQE1EwFpRQR_wxjZL0zTrb3bmU5A';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
