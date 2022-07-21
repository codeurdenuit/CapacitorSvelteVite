<script>
  import action from "../action";
  import Input from "./Input.svelte";

  let list = [];
  let dirName = 'test';
  let fileValue = '{test:0}';
  let fileName = 'file01.json';


  async function onClickCreateDirectory() {
    await action.createDirectory(dirName);
  }

  async function onClickShowDirectory() {
    list = await action.dirDirectory(dirName);
  }

  async function onClickWrite() {
    await action.creatFile(dirName, fileName, fileValue);
    fileValue = '';
    fileName = '';
  }

  async function onClickRead() {
    fileValue = await action.readFile(dirName, fileName);
  }

  async function onClickRemove() {
    await action.removeFile(dirName, fileName);
    fileName = '';
  }
</script>


<div class="poc">
  <div class="poc__title" >Poc File</div>
  <div class="poc__block">
    <Input  bind:value={dirName}  placeholder="files"  label="directory"/>
    <Input  bind:value={fileName}  placeholder="file.txt" label="name"/>
    <Input  bind:value={fileValue}  placeholder="" label="value"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickCreateDirectory}> Make Directory </button>
    <button on:click={onClickWrite}> Write file </button>
    <button on:click={onClickRead}> Read file </button>
    <button on:click={onClickRemove}> Remove file </button>
    <button on:click={onClickShowDirectory}> Show Directory </button>
  </div>
  <div class="poc__block">
    {#each list as item}
    <span class="item">{item} </span>
    {/each}
  </div>
 
</div>



