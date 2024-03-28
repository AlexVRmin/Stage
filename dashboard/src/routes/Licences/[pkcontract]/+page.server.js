import { supabase } from "$lib/supabaseClient";

// @ts-ignore
export async function load({ params }) {
  
  const pkcontract = params.pkcontract;

  const { data } = await supabase
    .from("Bestelregel") 
    .select("*, Licentie(*)")
    .eq("ContractFK", pkcontract);


  let licenties = [];
  if (data !== null) {
    for (let licentieData of data) {
      licenties.push(licentieData.Licentie);
    }
  }
    
  return {
    licenties: licenties ?? [],
  };
}
