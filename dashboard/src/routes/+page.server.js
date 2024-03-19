import { supabase } from "$lib/supabaseClient";

/**Hier zal je de naam_tabel veranderen met de naam van de tabel die je wilt hiermee connecteren */
export async function load() {
  const { data, count } = await supabase.from("School").select(`*`, { count: 'exact'});
  return {
    School: data ?? [],
    Count: count ?? [],
  };
}

