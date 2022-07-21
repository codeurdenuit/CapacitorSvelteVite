<script>
  import Engine from './../threejs/engine';
  import Demo from './../threejs/demo';
  let root;
  function onStart(){
    const engine = new Engine(root);
    engine.start(Demo);
  }
</script>


<div class="poc">
  <div class="poc__title" >Poc WebGL</div>
  <div class="poc__block" >
    <button on:click={onStart}> Start </button>
    <div class="webglContainer" bind:this={root}></div>
  </div>
</div>