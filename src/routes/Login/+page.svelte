<script>

    import { supabase } from "$lib/supabaseClient";

    async function signInWithAzure() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'azure',
            options: {
            scopes: 'email',
            },
        });
        
        if (error) {
            console.error("Error signing in with Azure:", error.message);
        } else {
            console.log("Successfully signed in with Azure:", data);
        }
    }

    function testSignIn() {
        alert('je gaat inloggen');
    }
    
</script>

<svelte:head>
    <title>Aanmelden | EDU-TECH BV</title> 
</svelte:head>


<main class="flex justify-between h-screen">

    <aside class="w-1/2 pt-5 pl-10 bg-white tablet:w-full">

        <img src="src/lib/Images/Logo.png" alt="Logo">


        <div class="flex justify-center mt-24">

            <div class="flex flex-col gap-10 w-1/2">

                <div class="mb-9 w-fit">
                    <h1 class="text-4xl font-bold">Welcome to EDU-Tech</h1>
                    <p class="text-gray-500 font-bold">Your partner in education!</p>
                </div>

                <div class="flex flex-col gap-2">
                    
                    <span class="font-bold">Email</span>
                    <input class="border-solid border-gray-300 border rounded-md bg-lightgrey p-2 focus:outline-edutech-orange" type="email" name="" id="">

                    <span class="font-bold">Password</span>
                    <input class="border-solid border-gray-300 border rounded-md bg-lightgrey p-2 focus:outline-edutech-orange" type="password" name="" id="">

                    <div class="flex justify-between tablet:flex-col">
                        <div>
                            <input type="checkbox" name="" id="">
                            <span>Remember me</span>
                        </div>
                        
                        <a href="#Forgot password">Forgot password?</a>
                    </div>

                    <button class="bg-edutech-orange rounded-md p-2" on:click={testSignIn}>Log in</button>

                    <button class="rounded-md p-2 border-grey-200 border flex justify-center align-center gap-2" on:click={signInWithAzure}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z" />
                            <path fill="#80cc28" d="M256 121.666H134.335V0H256z" />
                            <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z" />
                            <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z" />
                        </svg>
                        
                        <p>Aanmelden met microsoft</p>
                    
                    </button>
                </div>
                

            </div>
        </div>

    </aside>

    <aside class="bg-gray-300 w-1/2 flex justify-center align-center tablet:hidden">

        <div class="m-auto">
            <img class="w-full" src="src/lib/Images/login.png" alt="People meeting">
        </div>

    </aside>

</main>