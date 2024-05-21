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

  const { data: contractData } = await supabase
    .from("Contract")
    .select("*, School(*)")
    .eq("SchoolFK", school.PKschool)
    .order('HoofdcontractFK', { ascending: false });


  const { data: hoofdcontractData } = await supabase
    .from("Hoofdcontract")
    .select("*");
    console.log('hoofdcontractData', hoofdcontractData);

  // Make mapping of Hoofdcontracts by their PK.
  let hoofdcontractLookup = {};
  if (hoofdcontractData !== null) {
    for (let hoofdcontract of hoofdcontractData) {
      // @ts-ignore
      hoofdcontractLookup[hoofdcontract.PKhoofdcontract] = hoofdcontract;
    }
  }

  school.Contract = contractData;

  // Loop through contracts, and remove second occurences of Hoofdcontract so we don't output the second occurence of Hoofdcontact title.
  let HoofdcontractFK = null;
  for (const contract of school.Contract) {
    if (contract.HoofdcontractFK !== null) {
      if (contract.HoofdcontractFK == HoofdcontractFK) {
        contract.HoofdcontractFK = null;
      } else {
        HoofdcontractFK = contract.HoofdcontractFK;
      }
    }
  }

	return {
		school: school,
		hoofdcontractLookup: hoofdcontractLookup
  }
}