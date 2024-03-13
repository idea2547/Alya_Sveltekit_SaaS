<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "", name:"", price: 0};
    let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    // id: "1"
    let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    });

    async function checkout() {
        console.log(String(product.id));
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
                items: [
                    { id: product.id, quantity: "1" }
                ]
            }),
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
            
		});
	}
    
</script>


<div class="card">
    <header class="card-header"><h2>{product.name}</h2></header>
    {#if cartProduct !== undefined}
        <div class="card-body px-4">
            Quantity: <strong></strong>
        </div>
    {/if}
    <div class="card-body px-4">
        Price: {product.price} บาท
    </div>
    <footer class="card-footer">
        <button class="btn variant-filled-primary space-y-5" on:click={() => checkout()}>ซื้อ {product.name}</button>
    </footer>
</div>