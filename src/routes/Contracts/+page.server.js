import { supabase } from "$lib/supabaseClient";

//Verbinding maken
export async function load() {
  const { data, count } = await supabase
    .from("Contract")
    .select(`*`, { count: 'exact'});
  
  // FK's omzetten
  if (!data) {
    console.error('No data fetched from the server.');
    return { Contract: [] };
  }

  for (const contract of data) {
    const { data: contractData } = await supabase
      .from("Contract")
      .select("Startdatum, Einddatum, PCN, Gratislicenties")
      .eq("PKcontract", contract.PKcontract)
      .single();
    
    contract.Startdatum = contractData?.Startdatum;
    contract.Einddatum = contractData?.Einddatum;
    contract.PCN = contractData?.PCN;
    contract.Gratislicenties = contractData?.Gratislicenties;
  }

  for (const contract of data) { 
      const { data: AantallicentiesData } = await supabase
        .from("Bestelregel")
        .select("Aantal")
        .eq("PKbestelregel", contract.BestelregelFK)
        .single();
      
      contract.Aantal = AantallicentiesData?.Aantal;
    } 

  return {
    Contract: data ?? [],
    Count: count ?? [],
  };
}



