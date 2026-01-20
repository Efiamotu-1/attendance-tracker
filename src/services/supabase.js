import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wvkelmvgkdrguvmxdyrb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a2VsbXZna2RyZ3V2bXhkeXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4NzE0NzgsImV4cCI6MjA4NDQ0NzQ3OH0.Mqsl45eMkJN8vFU3BY6KjjFyZnXimrtPe3sAadnRpV0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
