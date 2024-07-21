<script>

    export let PackName;
    export let Price;
    export let details = [
        "เข้าถึงสตูดิโอการสร้างเสียงแบบ Pro!",
        "5000 โทเคน",
        "มีตัวละครให้เลือกกว่า 10 ตัว",
        "แปลงข้อความเป็นเสียงไวขึ้น จากเวลา 30 วินาที เหลือเพียง 7-15 วินาที",
        "ปรับโทนเสียงได้หลากหลายมากขึ้น"
    ];
</script>


<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-700 dark:shadow-none sm:p-12">
    <div class="space-y-12 text-center">
        <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">{PackName}</h3>
    
        <div class="space-y-6">
            <!-- {#each audioTracks as src}
                <AudioPlayer {src} />
            {/each} -->
            <div class="relative flex justify-around">
                <div class="flex items-end">
                    <span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">{Price}</span>
                    <div class="pb-2">
                        <span class="block text-2xl font-bold text-gray-700 dark:text-white">$</span>
                        <span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
                    </div>
                </div>
            </div>
            
            <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300 md:w-10/12">
                {#each details as detail}
                    <li class="space-x-2">
                        <span class="font-semibold text-gray-500">&check;</span>
                        <span>{detail}</span>
                    </li>
                {/each}
            </ul>
            <button class="relative flex h-9 w-full justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125" on:click={() => checkout()}>
                <span class="relative text-sm font-semibold btn variant-filled-secondary">Buy now!</span>
            </button>
        </div>
    </div>
</div>