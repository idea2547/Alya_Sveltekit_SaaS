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

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<nav id="navbar" class="fixed h-14 top-0 inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
			<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Sveltekit SaaS</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/pricing"
					rel="noreferrer"
				>
					Pricing
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
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
			</svelte:fragment>
		</AppBar>
		</nav>
		<!-- App Bar -->
		
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
