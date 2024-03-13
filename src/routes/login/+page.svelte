<script>
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
	import toast from 'svelte-french-toast';
	export let form;
	let loading = false;


	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Invalid credentials');
					await update();
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<style>
	.red {
	  color: red;
	}
  
	.yellow {
	  color: rgb(255, 238, 0);
	}

	label{
		padding-right: .5em;
	}
	small{
		padding-left: .5em;
		color: #ff0000;
	}

	span{
		color: #000000;
		border-radius: 115px;
	}
	.btn-auth-img:hover{
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

	}
	.btn-auth{
		border:0;
		background-color: rgba(84, 81, 81, 0.0);
		padding:.01em;
	}
	.btn-auth:hover{
		border:0;
		padding:.01em;
		text-decoration: none;
		background-color: rgba(84, 81, 81, 0.0);
	}
	.auth-form{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.auth-form p{
		margin:0;
	}
</style>

<div class="flex flex-col items-center h-full w-full pt-32 sm:pt-40 md:pt-28">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Login
	</h2>
	<p class="text-center mt-1">
		or <a href="/register" class="text-primary font-medium hover:cursor-pointer hover:underline yellow"
			>Register</a
		> if you dont have one
	</p>
	<form
		action="?/login"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitLogin}
	>
		<Input
			type="email"
			id="email"
			label="Email/อีเมล"
			value={form?.data?.email ?? ''}
			errors={form?.errors?.email}
			disabled={loading}
		/>
		<Input
			type="password"
			id="password"
			label="Password/รหัสผ่าน"
			errors={form?.errors?.password}
			disabled={loading}
		/>
		<div class="w-full max-w-lg">
			<a
				href="/reset-password"
				class="font-medium text-primary hover:cursor-pointer hover:underline"
			>
				Forget password?</a
			>
		</div>

		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn variant-filled-secondary btn-primary w-full" disabled={loading}>Login</button>
		</div>
		{#if form?.notVerified}
			<div class="alert alert-error shadow-lg w-full max-w-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>You have to verify your account first!</span>
				</div>
			</div>
		{/if}
		{#if form?.InvalidCred}
			<div class="alert alert-error shadow-lg w-full max-w-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Wrong information</span>
				</div>
			</div>
		{/if}
	</form>
	
	<form class="auth-form flex flex-col items-center space-y-10 w-full pt-4" method="post" action="?/OAuth">
        <div class="space-y-2">
            <p>Or</p>
			<div type="submit" class="btn-auth w-full max-w-lg pt-2">
				<button disabled={loading}>
					<img class="btn-auth-img" src='https://gist.githubusercontent.com/JoostvDoorn/32d7b63c69a2522d4b19c43ac01081bd/raw/5c148a2c250d47c62d0ee0eea4a4000682d8b7fd/btn_google_signin_dark_pressed_web.png' alt='google sign in'/>
				</button>
			</div>
        </div>

    </form>
</div>
