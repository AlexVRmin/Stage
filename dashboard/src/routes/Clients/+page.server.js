import { supabase } from "$lib/supabaseClient";

//Verbinding maken
export async function load() {
  const { data, count } = await supabase
    .from("School")
    .select(`*`, { count: 'exact'});
  
  // FK's omzetten
  if (!data) {
    console.error('No data fetched from the server.');
    return { School: [] };
  }

  for (const school of data) {
    const { data: stadData } = await supabase
      .from("Stad")
      .select("Naam, Postcode")
      .eq("PKstad", school.StadFK)
      .single();
    
    school.Stad = stadData?.Naam;
    school.Postcode = stadData?.Postcode;
  }

  for (const school of data) { 
      const { data: AdminData } = await supabase
        .from("Persoon")
        .select("Naam, Email, Voornaam")
        .eq("PKpersoon", school.AdminFK)
        .single();
      
      school.Admin = AdminData?.Naam;
      school.Email = AdminData?.Email;
      school.Voornaam = AdminData?.Voornaam;
    }
  

  for (const school of data) { 
    const { data: SchoolgroepData } = await supabase
      .from("Schoolgroep")
      .select("Naam")
      .eq("PKschoolgroep", school.SchoolgroepFK)
      .single();
    
    school.Schoolgroep = SchoolgroepData?.Naam;
  }
  

  return {
    School: data ?? [],
    Count: count ?? [],
  };
}



