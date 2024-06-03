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
    const { data: aantallicentiesData } = await supabase
      .from("Bestelregel")
      .select("Aantal")
      .eq("PKbestelregel", contract.BestelregelFK)
      .single();
   
    contract.Aantal = aantallicentiesData?.Aantal;
  }

  // Haal de totale prijs op uit de view 'jos'
  for (const contract of data) {
    const { data: totaalprijsData, error } = await supabase
      .from("jos")
      .select("sum, ContractFK") // Gebruik de juiste kolomnamen uit je view
      .eq("ContractFK", contract.PKcontract)
      .single();
   
    if (error) {
      console.error('Error fetching total price:', error.message);
      contract.Prijs = "negeer aub";
    } else {
      contract.Prijs = totaalprijsData?.sum;
    }
  }
 
  return {
    Contract: data ?? [],
    Count: count ?? 0,
  };
}
