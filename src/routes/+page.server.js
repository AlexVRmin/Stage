import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, count } = await supabase.from("School").select(`*`, { count: 'exact'});
  return {
    School: data ?? [],
    Count: count ?? [],
  };
}

