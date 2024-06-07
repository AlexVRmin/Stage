<script>
    import Header from "../../components/Header.svelte";

    export let data;
    let itemsLicenties = ['1'];
    let nextItem = 65;
    export let index;
    let bestellingKlant = [];
    let visibleLicenties = [data.Licentie];

    export let formValues = {
        typeLicenties: {
            type: [],
            amount : [],
        },
        schoolName: '',
        name: '',
        familyName: '',
        street: '',
        houseNumber: '',
        mail: '',
        schoolGroup: '',
    }

    function storeData() { 
        localStorage.clear();
        for (let index = 1; index < formValues.typeLicenties.type.length; index++) {
                if (formValues.typeLicenties.type[index]) {
                bestellingKlant.push(formValues.typeLicenties.type[index], formValues.typeLicenties.amount[index]);
                localStorage.setItem("bestelling", JSON.stringify(bestellingKlant));
            }
            console.log(localStorage);
        }       
        bestellingKlant = [];

        localStorage.setItem("gegevens", JSON.stringify([formValues.name, formValues.familyName, formValues.schoolName, formValues.street, formValues.houseNumber, formValues.mail, formValues.schoolGroup]));
    }

    function fixArray(index) {
        // visibleLicenties[0].splice(index,1)
        let licenties = [];
        let infoLicentie = licenties.push(formValues.typeLicenties.type);
        infoLicentie = licenties.push(formValues.typeLicenties.amount);
        console.log(licenties);
    }

    function addItem() {
        itemsLicenties = [...itemsLicenties, String.fromCharCode(nextItem++)];
        storeData();
    }

    function removeItem(index) {
        itemsLicenties.splice(index, 1);
        formValues.typeLicenties.type.splice(index+1,1);
        formValues.typeLicenties.amount.splice(index+1,1);
        console.log(index);
        formValues = formValues;
        itemsLicenties = itemsLicenties;
    }




</script>

<svelte:head>
    <title>EDU-TECH BV | License Shop</title>
</svelte:head>

<Header/>

<form class="m-1" action="./Email?/sendEmail" method="post">

    <section class="flex justify-between mt-20">

        <div class="w-full border-r-2">
            {#each itemsLicenties as item, i (item)}
                <div class="flex justify-center gap-2">
                    <select name="Licenties" class="border border-black p-6 w-3/5 focus:outline-none" id="Licenties{i + 1}" bind:value={formValues.typeLicenties.type[i+1]}  on:input={() => fixArray(i)}  required>
                        <option disabled selected value>Maak een keuze</option>
                        {#each data.Licentie as Licenties}
                            <option value={Licenties.Naam} id="licentie{Licenties.PKlicentie}" >{Licenties.Naam}</option>
                        {/each}
                    </select>
                    <input placeholder="x1" type="number" name="amount" id="amount" class="border border-black p-6 w-1/6 focus:outline-none" bind:value={formValues.typeLicenties.amount[i+1]} on:input={() => fixArray(i)} required min=1>
                    <button type="button" on:click={() => removeItem(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="none" stroke="#d11515" stroke-linecap="round" d="m6 6l12 12m0-12L6 18" />
                        </svg>
                    </button>
                </div>
            {/each}

            <div class="flex justify-center w-full mt-5">
                <button type="button" on:click={addItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <path fill="#000000" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
                        <path fill="#00000" d="M16 24h18v2H16z" />
                        <path fill="#00000" d="M24 16h2v18h-2z" />
                    </svg>
                </button>
            </div>

        </div>

    
        <div class="w-full">

            <div class="flex flex-col w-full p-10 gap-2">

                <span class="underline">Schoolinformatie</span>
                <input type="text" placeholder="Schoolnaam" class="border border-black p-2 ml-4" name="Client" bind:value={formValues.schoolName}>
                <input type="text" placeholder="Schoolgroep" class="border border-black p-2 ml-4 mb-6" name="Schoolgroep" bind:value={formValues.schoolGroup}>

                <span class="underline">Persoonsinformatie</span>
                <div class="flex gap-2">
                    <input type="text" placeholder="Voornaam" class="border border-black p-2 w-1/2 ml-4" name="Voornaam" bind:value={formValues.familyName}>
                    <input type="text" placeholder="Naam" class="border border-black p-2 w-1/2 ml-4" name="Naam" bind:value={formValues.name}>
                </div>
                
                <input type="text" placeholder="Straat" class="border border-black p-2 ml-4" name="Street" bind:value={formValues.street}>

                <input type="text" placeholder="Huisnummer" class="border border-black p-2 ml-4" name="Housenumber" bind:value={formValues.houseNumber}>
 
                <input type="email" placeholder="E-mail" class="border border-black p-2 ml-4" name="Mail" bind:value={formValues.mail}>

                <button class="border rounded p-2 ml-4 mt-40 bg-edutech-orange" on:click={() => storeData()}>Bestel</button>
            </div>
        </div>

    </section>

    {#each itemsLicenties as item, i (item)}
        <input type="hidden" name="Type{i+1}" bind:value={formValues.typeLicenties.type[i+1]}/>
        <input type="hidden" name="Amount{i+1}" bind:value={formValues.typeLicenties.amount[i+1]}>
    {/each}

    <input type="hidden" name="Index" bind:value={formValues.typeLicenties.type.length}>

        
</form>
