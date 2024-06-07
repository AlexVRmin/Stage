
    import { render } from 'svelte-email';
    import EmailSGKlant from '../../components/emailSGKlant.svelte';
    import sendgrid from '@sendgrid/mail';
    import { PRIVATE_API_KEY } from '$env/static/private';
    import EmailSGBeheer from '../../components/emailSGBeheer.svelte';

    /** @type {import('./$types').Actions} */
    export const actions = {
        default: async (event) => {
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
                licentiesHtml += item+"    ";
            });

            amount.forEach(item => {
                amountHtml += ` ${item} x <br>`;
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
        }
    };


