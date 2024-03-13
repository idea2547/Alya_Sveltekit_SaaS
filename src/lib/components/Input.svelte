<script>
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let noLabel = false;

	export let errors;
</script>

<div class="form-control w-full max-w-lg mb-0">
	{#if noLabel == false} 
		<label for={id} class="label font-medium pb-1">
			<span class="label-text">{label}</span>
		</label>
	{/if}	
	<input
		class={type === 'file'
			? 'file-input file-input-bordered w-full max-w-lg'
			: 'input input-bordered w-full max-w-lg'}
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label py-0 pt-1">
				<span class="label-text-alt text-error">
					{error}
				</span>
			</label>
		{/each}
	{/if}
</div>
