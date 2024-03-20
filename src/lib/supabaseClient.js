import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://facbywqwkyedmxbkgzpr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhY2J5d3F3a3llZG14YmtnenByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1NDM0NzYsImV4cCI6MjAxODExOTQ3Nn0.Usho0XM_c36DBYMsK6EPO0XtLU-ckCtiUL-aG1_wKhA')