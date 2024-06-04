import { supabase } from "$lib/supabaseClient";

//Verbinding maken
export async function load() {
  const { data, count } = await supabase
    .from("Contract")
    .select(`*`, { count: 'exact' });

  if (!data) {
    console.error('Error fetching contracts:');
    return { Contract: [], Count: 0 };
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
    const { data: aantallicentiesData, error } = await supabase
      .from("totaallicenties")
      .select("sum, ContractFK")
      .eq("ContractFK", contract.PKcontract)
      .single();
    
    if (error) {
      console.error('Error fetching total price:', error.message);
      contract.Aantal = "0";
    } else {
      contract.Aantal = aantallicentiesData?.sum;
    }

  }

  // Haal de totale prijs op uit de view 'jos'
  for (const contract of data) {
    const { data: totaalprijsData, error } = await supabase
      .from("totaalprijs")
      .select("sum, ContractFK")
      .eq("ContractFK", contract.PKcontract)
      .single();
    
    if (error) {
      console.error('Error fetching total price:', error.message);
      contract.Prijs = "0";
    } else {
      contract.Prijs = totaalprijsData?.sum;
    }
  }
  
  return {
    Contract: data ?? [],
    Count: count ?? 0,
  };
}
