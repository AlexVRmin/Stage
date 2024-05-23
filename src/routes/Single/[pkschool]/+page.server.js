import { supabase } from "$lib/supabaseClient";

// @ts-ignore
export async function load({ params }) {

  const pkschool = params.pkschool;

  const { data: schoolData } = await supabase
    .from("School")
    .select("*")
    .eq("PKschool", pkschool)
    .single();
  
  let school = schoolData;

  const { data: stadData } = await supabase
    .from("Stad")
    .select("Naam, Postcode")
    .eq("PKstad", school.StadFK)
    .single();
    
  school.Stad = stadData?.Naam;
  school.Postcode = stadData?.Postcode;

  const { data: ondertekenaarData } = await supabase
    .from("Persoon")
    .select("Naam")
    .eq("PKpersoon", school.OndertekenaarFK)
    .single();

  school.Ondertekenaar = ondertekenaarData?.Naam;

  const { data: adminData } = await supabase
    .from("Persoon")
    .select("Naam, Voornaam, Email")
    .eq("PKpersoon", school.AdminFK)
    .single();
  
  school.Admin = adminData?.Naam;
  school.Voornaam = adminData?.Voornaam;
  school.Email = adminData?.Email;

  const { data: schoolgroepData } = await supabase
    .from("Schoolgroep")
    .select("Naam")
    .eq("PKschoolgroep", school.SchoolgroepFK)
    .single();
  
  school.Schoolgroep = schoolgroepData?.Naam;

  const { data: contractData } = await supabase
    .from("Contract")
    .select("*")
    .eq("SchoolFK", school.PKschool);

  school.Contract = contractData || [];

  return {
    school: school
  };
}
