<script>
// @ts-nocheck

  import { supabase } from "$lib/supabaseClient";
  import { navigating } from "$app/stores";
    

function openNav() {
  document.getElementById("myNav").style.width = "21%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

async function signOut() {
    const { error } = await supabase.auth.signOut();
    alert('Succesvol uitgemeld');
    window.location.href = '/Login';
}

</script>



<header class="header bg-black flex justify-between items-center py-5 px-5">

    <div class="flex items-center gap-4">
        <button class="open" on:click={openNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                <path fill="none" stroke="#f29005" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" />
            </svg>
        </button>


        <img src="../../src/lib/Images/Logo.png" alt="Logo" class="w-10 absolute left-20">
    </div>

        <div id="myNav" class="overlay">


            <button class="closebtn" on:click={closeNav}>&times;</button>
            <img class="mx-10 my-10" src="../../src/lib/Images/Logo.png" alt="Logo">
           
            <nav class="overlay-content">

                <ul class="">
                    

                    <div class="flex items-center justify-center">

                        <span class="w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#f29005" d="M19.5 8.25h-3v-.5a4.5 4.5 0 0 0-9 0v.5h-3A1.25 1.25 0 0 0 3.25 9.5V18A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V9.5a1.25 1.25 0 0 0-1.25-1.25M9 7.75a3 3 0 0 1 6 0v.5H9ZM19.25 18A1.25 1.25 0 0 1 18 19.25H6A1.25 1.25 0 0 1 4.75 18V9.75H7.5V12A.75.75 0 0 0 9 12V9.75h6V12a.75.75 0 0 0 1.5 0V9.75h2.75Z" />
                            </svg>
                        </span>

                        <li class="w-32 text-left"><a href="/">Shop</a></li>
                    </div>

                    <div class="flex items-center justify-center">
                        
                        <span class="w-12 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                <path fill="#f29005" d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52" />
                            </svg>
                        </span>
                        
                        <li class="w-32 text-left"><a href="/Clients">Clients</a></li>
                    </div>
                    
                    <div class="flex items-center justify-center">

                        <span class="w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#f29005" d="M8 12h8v2H8zm2 8H6V4h7v5h5v3.1l2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4zm-2-2h4.1l.9-.9V16H8zm12.2-5c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1z" />
                            </svg>
                        </span>
            
                        <li class="w-32 text-left"><a href="/Contracts">Contracts</a></li>
                    </div>

                    
                </ul>

                <button class="text-white bg-red-800 w-4/5 py-2 mt-52" on:click={signOut}>Sign out</button>

            </nav>

         
        </div>

    <span class="text-white text-2xl">Dashboard</span>

    <button on:click={signOut}>

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path fill="white" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" />
        </svg>  
         
    </button >

</header>

