<script>
    import { onMount } from 'svelte';

    let data = [];
    let data2 = [];

    onMount(() => {
        console.log("onMount triggered");

        try {
            if (typeof localStorage !== "undefined") {
                const storedData = localStorage.getItem("bestelling");
                const storedData2 = localStorage.getItem("gegevens");

                console.log("Stored data:", storedData);
                console.log("Stored data2:", storedData2);

                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    if (Array.isArray(parsedData)) {
                        data = parsedData;
                        console.log("Parsed data:", data);
                    } else {
                        console.error("Parsed data is not an array");
                    }
                }

                if (storedData2) {
                    const parsedData2 = JSON.parse(storedData2);
                    if (Array.isArray(parsedData2)) {
                        data2 = parsedData2;
                        console.log("Parsed data2:", data2);
                    } else {
                        console.error("Parsed data2 is not an array");
                    }
                }
            } else {
                console.error("LocalStorage is not available.");
            }
        } catch (error) {
            console.error("An error occurred while accessing localStorage.", error);
        }
    });
</script>

<form action="../Email?/accept" method="post" class="flex flex-col w-2/4 m-2/4">
    {#if Array.isArray(data)}
        {#each data as item, index}
            <input name="best{index}" value={item} readonly>
        {/each}
    {/if}
    {#if Array.isArray(data2)}
        {#each data2 as item, index}
            <input name="geg{index}" value={item} readonly>
        {/each}
    {/if}
    <button class="border border-black rounded p-2 m-5">Submit</button>
</form>
