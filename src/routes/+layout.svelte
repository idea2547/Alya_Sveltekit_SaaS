<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import Navigation from '$lib/components/navigation.svelte';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	
	const drawerStore = getDrawerStore();
	const settings: DrawerSettings = { id: 'example-1' };


	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data;
</script>
<Drawer>
	{#if $drawerStore.id === 'example-1'}
	<div id="navlinks" class="items-center w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end p-8 opacity-100 transition-all duration-300 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
		<div class="dark:text-gray-300 lg:pr-4">
			<ul class="space-y-6 text-base tracking-wide lg:flex lg:space-y-0 lg:text-sm">
				<p1 class="nav-link block transition lg:px-4">
					{#if data?.Subscription}
					<!-- Render subscription count if data has Subscription property -->
					<p>Subscription: {data.Subscription}</p>
					{:else}
					<!-- Render "null" if data does not have Subscription property -->
					<p>Subscription: 0</p>
					{/if}
					
				
					</p1>
					<li>
						<a href="/#" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Homepage</span>
						</a>
					</li>
					<li>
						<a href="/Info" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Info</span>
						</a>
					</li>
					<li>
						<a href="" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Product 
								
							</span>
						</a>
					</li>
					
					<li>
						<a href="/#features" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Features</span>
						</a>
					</li>
					<!-- <li>
						<a href="#testimonials" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Testimonials</span>
						</a>
					</li> -->
					<li>
						<a href="/pricing" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
							<span>Pricing</span>
						</a>
					</li>
					
				</ul>
			</div>

			

			<!-- 								<a
				class="btn btn-sm variant-ghost-surface"
				href="https://twitter.com/SkeletonUI"
				target="_blank"
				rel="noreferrer"
			>
				Twitter
			</a> -->
			<div class="dark:text-gray-300 lg:pr-4">

				
			</div>
			{#if data.user}
				<form action="/logout" method="POST">
					<button class="btn btn-sm variant-ghost-surface">
						<a>
							<span class="relative text-sm font-semibold lg:text-primary lg:dark:text-white">Logout</span>
						</a>
					</button>
				</form>
			{:else}
				<button class="btn btn-sm variant-ghost-surface">
					<a href="/login">
						<span class="relative text-sm font-semibold lg:text-primary lg:dark:text-white">Login</span>
					</a>
				</button>
			{/if}
		</div>
	{:else if $drawerStore.id === 'example-2'}
		<!-- (show 'example-2' contents) -->
	{:else}
		<!-- (fallback contents) -->
	{/if}
</Drawer>
<!-- App Shell -->
<AppShell slot="sidebarLeft">
	<svelte:fragment slot="header">
			<AppBar>
			<svelte:fragment slot="lead">
				<nav id="navbar" class="fixed h-14 top-0 inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
					<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
						<div class="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
							<div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
								<a href="/#" aria-label="ampire logo" class="text-xl uppercase nav-link flex items-center space-x-2">Alya Sveltekit SaaS</a>
								
								<button aria-label="humburger" id="hamburger" class="relative -mr-6 p-6 lg:hidden" on:click={() => drawerStore.open(settings)}>
									<div aria-hidden="true" id="line" class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
									<div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
								</button>
							</div>
							
							
							<div aria-hidden="true" id="layer" class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"></div>
							<div id="navlinks" class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
								<div class="dark:text-gray-300 lg:pr-4">
									<ul class="space-y-6 text-base tracking-wide lg:flex lg:space-y-0 lg:text-sm">
										<p1 class="nav-link block transition lg:px-4">
											{#if data?.Subscription}
											<!-- Render subscription count if data has Subscription property -->
											<p>Subscription: {data.Subscription}</p>
											{:else}
											<!-- Render "null" if data does not have Subscription property -->
											<p>Subscription: 0</p>
											{/if}
											
										
										</p1>
										<li>
											<a href="/#" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Homepage</span>
											</a>
										</li>
										<li>
											<a href="/Info" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Info</span>
											  </a>
										</li>
										<li>
											<a href="" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Product 
													
												</span>
											  </a>
										</li>
										
										<li>
											<a href="/#features" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Features</span>
											</a>
										</li>
										<!-- <li>
											<a href="#testimonials" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Testimonials</span>
											</a>
										</li> -->
										<li>
											<a href="/pricing" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
												<span>Pricing</span>
											</a>
										</li>
										
									</ul>
								</div>
	
								

<!-- 								<a
									class="btn btn-sm variant-ghost-surface"
									href="https://twitter.com/SkeletonUI"
									target="_blank"
									rel="noreferrer"
								>
									Twitter
								</a> -->
								{#if data.user}
									<form action="/logout" method="POST">
										<button class="btn btn-sm variant-ghost-surface">
											<a>
												<span class="relative text-sm font-semibold lg:text-primary lg:dark:text-white">Logout</span>
											</a>
										</button>
									</form>
								{:else}
									<button class="btn btn-sm variant-ghost-surface">
										<a href="/login">
											<span class="relative text-sm font-semibold lg:text-primary lg:dark:text-white">Login</span>
										</a>
									</button>
								{/if}
							</div>
							<!-- <div class="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
								<button aria-label="switche theme" class="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
									<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" viewBox="0 0 20 20" fill="currentColor">
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
									</svg>
								</button>
							</div> -->
						</div>
					</div>
				</nav>
				
			</svelte:fragment>
			<svelte:fragment slot="trail">
				
			</svelte:fragment>
		</AppBar>
		<!-- App Bar -->

		
		
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
