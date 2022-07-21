<script>
	import File from "./component/File.svelte";
	import Image from "./component/Image.svelte";
	import Media from "./component/Media.svelte";
	import Package from "./component/Package.svelte";
	import Webgl from "./component/Webgl.svelte";
</script>

<h1>POC CORDOVA !!</h1>
<File />
<Image />
<Media />
<Package />
<Webgl />

<style type="scss" global>
	.poc {
		border: solid 1px;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: rgb(165, 165, 165);
		&__block {
			margin-bottom: 1rem;
		}
		&__title {
			margin-bottom: 1rem;
		}
	}
	.item {
		margin-left: 1rem;
		background-color: white;
	}
	.preview {
    width: 9rem;
    height: 9rem;
    display: inline-block;
    background: white;
	}
	.webglContainer {
		position: relative;
		display: block;
		width: 20rem;
    height: 20rem;
	}
	canvas {
        position: absolute;
        padding: 0;
        margin: 0;
  }
</style>
