
    import { render } from 'svelte-email';
    import { supabase } from "$lib/supabaseClient";
    import EmailSGKlant from '../../components/emailSGKlant.svelte';
    import sendgrid from '@sendgrid/mail';
    import { PRIVATE_API_KEY } from '$env/static/private';
    import EmailSGBeheer from '../../components/emailSGBeheer.svelte';
    import EmailSGDenied from "../../components/emailSGDenied.svelte";

    /** @type {import('./$types').Actions} */
    export const actions = {
        sendEmail: async (event) => {
            const data = await event.request.formData();
            let licentie = [];
            let amount = [];
            let index = 1;
            while (data.get('Type'+index) != null) {
                licentie.push(data.get('Type'+index));
                amount.push(data.get('Amount'+index));
                index++;
            }
            const client = data.get('Client');
            const naam = data.get('Naam');
            const voornaam = data.get('Voornaam');
            const street = data.get('Street');
            const housenumber = data.get('Housenumber');
            const mail = data.get('Mail');
            const schoolgroep = data.get('Schoolgroep'); 

            sendgrid.setApiKey(PRIVATE_API_KEY);

            let licentiesHtml = '';
            let amountHtml = '';

            licentie.forEach(item => {
                licentiesHtml += item+", ";
            });

            amount.forEach(item => {
                amountHtml += ` ${item} x`;
            });

            let emailHtml = render({
                template: EmailSGKlant,
                props: {
                    licentie : licentiesHtml,
                    amount: amountHtml,
                    client: `${client}`,
                    naam: `${naam}`,
                    voornaam: `${voornaam}`,
                    street: `${street}`,
                    housenumber: `${housenumber}`,
                    mail: `${mail}`,
                    schoolgroep: `${schoolgroep}`,
                }
            });
            let emailBeheer = render({
                template: EmailSGBeheer,
                props: {
                    licentie : licentiesHtml,
                    amount: `${amount}`,
                    client: `${client}`,
                    naam: `${naam}`,
                    voornaam: `${voornaam}`,
                    street: `${street}`,
                    housenumber: `${housenumber}`,
                    mail: `${mail}`,
                    schoolgroep: `${schoolgroep}`,
                }
            });
    
            const optionsKlanten = {
                from: 'noreply@mskis.be',
                to: `${mail}`,
                subject: `Bedankt voor uw aankoop bij Edu-tech`,
                html: emailHtml,
            };

            const optionsBeheer = {
                from: 'noreply@mskis.be',
                to: `a.vanroy@miniemen.school`, // Dit kan je veranderen om naar iemand anders te sturen
                subject: `Er is een aankoop gemaakt bij Edu-tech`,
                html: emailBeheer,
            }


            console.log(optionsKlanten);

            sendgrid
            .send(optionsKlanten)
            .then(() => {
                console.log("Email was successfully sent");
            })
            sendgrid
            .send(optionsBeheer)
            .then(() => {
                console.log("Email was successfully sent");
            })
        },
        
    denied: async (event) => {
        try {
            const data = await event.request.formData();
            const naam = data.get('geg0');
            const voornaam = data.get('geg1');
            const street = data.get('geg3');
            const housenumber = data.get('geg4');
            const mail = data.get('geg5');
            const schoolgroep = data.get('geg6');
            const reason = data.get('reason');

            sendgrid.setApiKey(PRIVATE_API_KEY);

            const emailDenied = render({
                template: EmailSGDenied,
                props: {
                    naam: `${naam}`,
                    voornaam: `${voornaam}`,
                    street: `${street}`,
                    housenumber: `${housenumber}`,
                    mail: `${mail}`,
                    schoolgroep: `${schoolgroep}`,
                    reason: `${reason}`,
                }
            });

            const optionsDenied = {
                from: 'noreply@mskis.be',
                to: `a.vanroy@miniemen.school`,
                subject: `Bedankt voor uw aankoop bij Edu-tech`,
                html: emailDenied,
            };

            await sendgrid.send(optionsDenied);
            console.log("Email was successfully sent");

        } catch (error) {
            console.error("Error sending email:", error);
        }
    },
    accept: async (event) => {
        try {
            const data1 = await event.request.formData();
            const naam = data1.get('geg0');
            const voornaam = data1.get('geg1');
            const street = data1.get('geg3');
            const housenumber = data1.get('geg4');
            const mail = data1.get('geg5');
            const schoolgroep = data1.get('geg6');
            let licentie = [];
            let amount = [];
            let index = 0;
            let indexplus = 1;
            while (data1.get('best'+index) != null && data1.get('best'+indexplus) != null) {
                licentie.push(data1.get('best'+index));
                amount.push(data1.get('best'+indexplus));
                index++;
                indexplus++;
            }

            let licentiesHtml = '';
            let amountHtml = '';

            licentie.forEach(item => {
                licentiesHtml += item+", ";
            });

            amount.forEach(item => {
                amountHtml += ` ${item} x`;
            });

            async function load() {
                const { data } = await supabase
                .from("Bestelregel")
                .select(`*`);

                for (const infoBest of data) {

                    const insertContract = {
                        Naam: `${schoolgroep}contract1`,
                        Goedgekeurd : `True`,
                    }              
                      
                    const { error } = await supabase
                    .from('Contract')
                    .insert({insertContract});
                    for (const infoContract of data) {
                        const { data: contractdata } = await supabase
                        .from("Contract")
                        .select(`*`)
                        .eq("PKcontract", infoContract.ContractFK)
                        .single()

                        infoContract.PKcontract = contractdata?.PKcontract;
                    }
                    for (const no of data) {
                        console.log(no.PKcontract);
                    }
                    for (let index = 0 ; data1.get('best'+index) != null && data1.get('best'+index+1) != null; index++) {
                        if (licentie[index] == infoBest.Naam) {
                            const updateBestReg = {
                                LicentieFK : infoBest.Naam, 
                                Goedgekeurd : `True`,
                            }   
                            console.log(updateBestReg);
                        }
                    
                        // const { error } = await supabase
                        // .from('countries')
                        // .update({ name: 'Australia' })
                        // .eq('id', 1)
                    }
                }
            } load();
            

        } catch (error) {
            console.error("Error pushing data:", error);
        }
    }
    
};

    

