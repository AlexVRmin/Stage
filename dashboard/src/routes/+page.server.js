import { supabase } from "$lib/supabaseClient";

/**Hier zal je de naam_tabel veranderen met de naam van de tabel die je wilt hiermee connecteren */
export async function load() {
  const { data } = await supabase.from("naam_tabel").select();
  return {
    naam_tabel: data ?? [],
  };
}