import { supabase } from "$lib/supabaseClient";
/** @type {import('./$types').Actions} */

/**De naam_tabel veranderen met de naam van de tabel die je wilt verbinden */
export async function load() {
  const { data } = await supabase
  .from("Licentie")
  .select(`
    *
  `)
  return {
    Licentie: data ?? [],
  };
}

  export const actions = {	
    sendInfo: async (event) => {	 		
}};