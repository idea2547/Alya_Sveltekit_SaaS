<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";
	import BlockPricing from "$lib/components/PricingBlock/blockPricing.svelte";
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
			
		</div>
		<div class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
			<BlockPricing PackName="Pro Pack" 
			Price="29.99" 
			details={[
				"New feature 1",
				"New feature 2",
				"Another new feature",
				"Yet another feature"
			]} />
			<BlockPricing PackName="Pro Pack" 
			Price="39.99" 
			details={[
				"New feature 1",
				"New feature 2",
				"Another new feature",
				"Yet another feature"
			]} />
			<BlockPricing PackName="Pro Pack" 
			Price="29.99" 
			details={[
				"New feature 1",
				"New feature 2",
				"Another new feature",
				"Yet another feature"
			]} />
		</div>
	</div>
</section>