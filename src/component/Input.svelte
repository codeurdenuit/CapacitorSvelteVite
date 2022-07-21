<script>
	export let label;
  export let placeholder;
  export let value;
</script>

<span class="input">
  <div class="label">{label}</div>
  <input class="field" bind:value={value}  placeholder={placeholder}/>
</span>

<style>
	.input {
    position:relative;
    display: inline-block;
	}
</style>