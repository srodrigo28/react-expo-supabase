import 'react-native-url-polyfill'
import { createClient } from '@supabase/supabase-js'

const supbaseUrl="https://qebsbrvyfahtxktqyzpu.supabase.co"
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYnNicnZ5ZmFodHhrdHF5enB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMTM2MzAsImV4cCI6MjAzMjY4OTYzMH0.jrNzhbbKY5njflpFIuLI8f_cV7DB9FrHbkHHYXCMyZo'

export const supabase = createClient(supbaseUrl, supabaseKey)