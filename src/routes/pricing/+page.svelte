<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";
	import { each } from "svelte/internal";

	async function checkout() {
        console.log("pass");
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
                items: [
                    { id: "price_1Ou9nhIkcMoCTGo1iiJOGJGS", quantity: "1" }
                ]
            }),
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
            
		});
	}

	async function checkout2() {
        console.log("pass");
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
                items: [
                    { id: "price_1OTM1fIkcMoCTGo1CgvtqGvL", quantity: "1" }
                ]
            }),
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
            
		});
	}

	async function checkout3() {
        console.log("pass");
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
                items: [
                    { id: "price_1OXAlOIkcMoCTGo1HYRvcujm", quantity: "1" }
                ]
            }),
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
            
		});
	}

    const products : Product[] = [
		{
			id: "price_1Ou9nhIkcMoCTGo1iiJOGJGS",
			name: "แพ็คโทเคนขนาดจิ้ว จำนวน 5000",
			price: 30
		},
		{
			id: "price_1NHMykIkcMoCTGo1Vt13jWdq",
			name: "แพ็คโทเคนขนาดกลาง 8000",
			price: 179
		},
		{
			id: "price_1NHMykIkcMoCTGo1Vt13jWdq",
			name: "แพ็คโทเคนขนาดใหญ่ 30000! ",
			price: 500
		}
	]


</script>



<section id="pricing" class="relative mb-32 pt-40">
	<!-- <div aria-hidden="true" class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-25 dark:opacity-60">
		<div class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
		<div class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
	</div> -->
	<div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">Pricing</h2>
			<p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Kurumi, Elaina, Silver Wolf, Hutao <br/><br/> </p>
			<h3>We live we love</h3>
		</div>
		<div class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-700 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">Pack 1</h3>
				
					<div class="space-y-6">
						<!-- {#each audioTracks as src}
							<AudioPlayer {src} />
						{/each} -->
						<div class="relative flex justify-around">
							<div class="flex items-end">
								<span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">30</span>
								<div class="pb-2">
									<span class="block text-2xl font-bold text-gray-700 dark:text-white">$</span>
									<span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
								</div>
							</div>
						</div>
						
						<ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300 md:w-10/12">
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>เข้าถึงสตูดิโอการสร้างเสียงแบบ Pro!</span>
							</li>
							
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>5000 โทเคน</span>
							</li>
							
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>มีตัวละครให้เลือกกว่า 10 ตัว> </span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>แปลงข้อความเป็นเสียงไวขึ้น<br/>
									  จากเวลา 30 วินาที
								      เหลือเพียง 7-15 วินาที</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>ปรับโทนเสียงได้หลากหลายมากขึ้น</span>
							</li>
						</ul>
						<button class="relative flex h-9 w-full justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125" on:click={() => checkout()}>
							<span class="relative text-sm font-semibold btn variant-filled-secondary">Buy now!</span>
						</button>
					</div>
				</div>
			</div>
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-700 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">Pack 2</h3>
					<div class="space-y-6">
						<div class="relative flex justify-around">
							<div class="flex items-end">
								<span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">100</span>
								<div class="pb-2">
									<span class="block text-2xl font-bold text-gray-700 dark:text-white">$</span>
									<span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
								</div>
							</div>
						</div>
						
						<ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300 md:w-10/12">
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>เข้าถึงสตูดิโอการสร้างเสียงแบบ Pro!</span>
							</li>
							
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>13000 โทเคน</span>
							</li>
							
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>มีตัวละครให้เลือกกว่า 10 ตัว> </span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>แปลงข้อความเป็นเสียงไวขึ้น<br/>
									  จากเวลา 30 วินาที
								      เหลือเพียง 7-15 วินาที</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>ปรับโทนเสียงได้หลากหลายมากขึ้น</span>
							</li>
						</ul>
						<button class="relative flex h-9 w-full justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125" on:click={() => checkout2()}>
							<span class="relative text-sm font-semibold btn variant-filled-secondary">Buy now!</span>
						</button>
					</div>
				</div>
			</div>
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-700 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">Pack 3</h3>
					<div class="space-y-6">
						<div class="relative flex justify-around">
							<div class="flex items-end">
								<span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">349</span>
								<div class="pb-2">
									<span class="block text-2xl font-bold text-gray-700 dark:text-white">$</span>
									<span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
								</div>
							</div>
						</div>
						
						<ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300 md:w-10/12">
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>เข้าถึงสตูดิโอการสร้างเสียงแบบ Pro!</span>
							</li>
							
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>40000 โทเคน</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>มีตัวละครให้เลือกกว่า 10 ตัว> </span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>แปลงข้อความเป็นเสียงไวขึ้น<br/>
									  จากเวลา 30 วินาที
								      เหลือเพียง 7-15 วินาที</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>ปรับโทนเสียงได้หลากหลายมากขึ้น</span>
							</li>
						</ul>
						<button class="relative flex h-9 w-full justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125" on:click={() => checkout3()}>
							<span class="relative text-sm font-semibold btn variant-filled-secondary">Buy now!</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>