import { supabase } from "$lib/supabaseClient";

// @ts-ignore
export async function load({ params }) {

  const pkschool = params.pkschool;

  const { data } = await supabase
      .from("School")
      .select("*")
      .eq("PKschool", pkschool)
      .single();
  
  let school = data;

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

  const { data: AdminData } = await supabase
    .from("Persoon")
    .select("Naam, Voornaam, Email")
    .eq("PKpersoon", school.AdminFK)
    .single();
  
  school.Admin = AdminData?.Naam;
  school.Voornaam = AdminData?.Voornaam;
  school.Email = AdminData?.Email;

  const { data: SchoolgroepData } = await supabase
    .from("Schoolgroep")
    .select("Naam")
    .eq("PKschoolgroep", school.SchoolgroepFK)
    .single();
  
  school.Schoolgroep = SchoolgroepData?.Naam;


	return {
		school: school,

  }
}