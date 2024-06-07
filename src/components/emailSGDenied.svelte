<script>
    import { Button, Hr, Text } from 'svelte-email';

    export let licentie = '';
    export let amount= '';
    export let naam = '';
    export let voornaam = '';
    export let street = '';
    export let housenumber = '';
    export let mail = '';
    export let schoolgroep = '';
    export let reason = '';

</script>

<div>
    <Text>
        <div style="width: 100%; background-color: #666666; display: flex; justify-content: center;">
            <div style="display: flex; width: 40%; min-width: 500px; background-color: gray; color: #fff; flex-direction: column;">
                <img src="https://edu-tech.be/wp-content/uploads/2020/11/Logo-only-small-e1606142482154.png" style="height: 10%; width: 10%; margin: 25px auto 0px auto;" alt="Logo van edu-tech">
                <br><br>
                <h1 style="text-align: center; color: #fff;">Edu-Tech BV</h1>
                <h1 style="text-align: center; color: #fff;">De aankoop kon niet worden gemaakt.</h1>
                <hr style="border: 1px solid rgb(243, 145, 3); width: 100%;">
                <h1 style="padding-left: 15px">De reden:</h1>
                <p style="color: #fff; list-style-type: none; display: flex; padding: 5px 25% 5px 5%;">{reason}</p>
                <hr style="border: 1px solid rgb(243, 145, 3); width: 100%;">
                <h2 style="padding-left: 15px;">Klant Informatie:</h2>
                <hr style="border-top: 1px solid rgb(243, 145, 3); width: 100%;">
                <ul style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; gap: 50% 10px;">
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 25% 5px 5%; width:100px;">{naam}</li>
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 5% 0px 0px; width:100px;">{voornaam}</li>
                    </div>
                    <div style="display: flex; flex-direction: row; gap: 20px 10px;">
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 25% 5px 5%; width:100px;">{street}</li>
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 5% 0px 0px; width:100px;">{housenumber}</li>
                    </div>
                    <div style="display: flex; flex-direction: row; gap: 20px 10px;">
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 25% 5px 5%; width:100px;">{mail}</li>
                        <li style="color: #fff; list-style-type: none; display: flex; padding: 5px 5% 0px 0px; width:100px;">{schoolgroep}</li> 
                    </div>
                </ul>
                <hr style="border-top: 1px solid rgb(243, 145, 3); width: 100%;">
                <h2 style="color: white; padding-left: 15px;">Bestelling:</h2>
                <hr style="border-top: 1px solid rgb(243, 145, 3); width: 100%;">
                <ul style="display: flex; flex-direction: row; gap: 20px 10px;">
                    <!-- <li style="color: #fff; width: 250px; white-space: pre-line; list-style-type: none; padding: 5px;">{licentie}</li>
                    <li style="color: #fff; width: 250px; list-style-type: none; padding: 5px;">{amount}x</li> -->
                </ul>
                <br><br>
                <br><br>
            </div>
        </div>
    </Text>
    <Hr />
    <Button href="https://edu-tech.be/">Visit Edu-tech</Button>
</div>
