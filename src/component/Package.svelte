<script>
  import action from "../action"
  import Input from "./Input.svelte";

  let list = [];
  let packName = 'package.zip';
  let filePath1 = 'test/file01.json';
  let filePath2 = 'images/mypic.png';
  let filePath3 = 'media/video.mp4';

  let fileValue1;
  let fileValue2;
  let fileValue3;
  let player;


  async function onClickExport() {
    await action.exportPackage(packName, filePath1, filePath2, filePath3);
  }

  async function onClickImport(event) {
    const file = event.target.files[0];
    await action.importPackage('test', file);
  }

  function startAudio() {
    if(!player) {
      console.log('play', fileValue3)
      player = new Audio(fileValue3);
      player.setAttribute('crossorigin', 'anonymous');
      player.crossOrigin = 'anonymous';
      player.play();
    } else {
      player.pause();
      player = null;
    }
  }

</script>

<div class="poc">
  <div class="poc__title" >Poc Package</div>

  <div class="poc__block">
    <Input  bind:value={packName}  placeholder="package.vn"  label="packname"/>
    <Input  bind:value={filePath1}  placeholder="file02.json"  label="file "/>
    <Input  bind:value={filePath2}  placeholder="file01.png" label="image"/>
    <Input  bind:value={filePath3}  placeholder="file02.mp3" label="media"/>
  </div>

  <div class="poc__block">
    <button on:click={onClickExport}> Export Package </button>
    <input type="file" accept="*" on:input={onClickImport} />
  </div>
</div>
