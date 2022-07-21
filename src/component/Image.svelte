<script>
  import action from "../action"
  import Input from "./Input.svelte"

  let list = [];
  let dirName = 'images'
  let picName = 'mypic.png';
  let picSrc;

  async function onClickCreateDirectory() {
    await action.createDirectory(dirName);
  }

  async function onClickShowDirectory() {
    list = await action.dirDirectory(dirName)
  }

  async function onClickUpload(event) {
    const file = event.target.files[0];
    action.uploadMedia(dirName, picName, file);
  }

  async function onClickLoad() {
    picSrc = await action.loadMedia(dirName, picName);
  }

  async function onClickRemove() {
    await action.removeFile(dirName, picName);
    picName = '';
  }

</script>


<div class="poc">
  <div class="poc__title" >Poc Image</div>
  <div class="poc__block">
    <Input  bind:value={dirName}  placeholder="files"  label="directory"/>
    <Input  bind:value={picName}  placeholder="file.txt" label="name"/>
    <Input  bind:value={picSrc}  placeholder="" label="value"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickCreateDirectory}> Make Directory </button>
    <input type="file" accept="image/*" on:input={onClickUpload} />
    <button on:click={onClickLoad}> Load </button>
    <button on:click={onClickRemove}> Remove file </button>
    <button on:click={onClickShowDirectory}> Show Directory </button>
  </div>
  <div class="poc__block">
    <img class="preview" src={picSrc} alt="pic">
  </div>
  <div class="poc__block">
    {#each list as item}
    <span class="item">{item} </span>
    {/each}
  </div>
</div>