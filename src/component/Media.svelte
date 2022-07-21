<script>
  import action from "../action"
  import Input from "./Input.svelte"

  let list = [];
  let videoPlayer;
  let dirName = 'media'
  let fileName = 'video.mp4';
  let mediaUrl = '/image/audiotesst.mp3';
  let player = null;

  async function onClickCreateDirectory() {
    await action.createDirectory(dirName);
  }

  async function onClickShowDirectory() {
    list = await action.dirDirectory(dirName)
  }

  async function onClickUpload(event) {
    const file = event.target.files[0];
    action.uploadMedia(dirName, fileName, file);
  }

  async function onClickLoadMedia() {
    mediaUrl = await action.loadMedia(dirName, fileName);
    startMedia();
  }

  //https://learn.svelte.dev/tutorial/media-elements
  function startAudio() {
    if(!player) {
      console.log('play', mediaUrl)
      player = new Audio(mediaUrl);
      player.setAttribute('crossorigin', 'anonymous');
      player.crossOrigin = 'anonymous';
      player.play();
    } else {
      player.pause();
      player = null;
    }
  }

  function startMedia() {
    if(videoPlayer.paused) {
      videoPlayer.src = mediaUrl;
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }

  async function onClickRemove() {
    await action.removeFile(dirName, fileName);
    fileName = '';
  }

</script>


<div class="poc">
  <div class="poc__title" >Poc Media</div>
  <div class="poc__block">
    <Input  bind:value={dirName}  placeholder="files"  label="directory"/>
    <Input  bind:value={fileName}  placeholder="file.txt" label="name"/>
    <Input  bind:value={mediaUrl}  placeholder="" label="value"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickCreateDirectory}> Make Directory </button>
    <input type="file" accept="video/mp4" on:input={onClickUpload} />
    <button on:click={onClickLoadMedia}> Load Media </button>
    <button on:click={onClickRemove}> Remove file </button>
    <button on:click={onClickShowDirectory}> Show Directory </button>
  </div>

  <div class="poc__block">
    <video class="preview" bind:this={videoPlayer}><track kind="captions"></video>
  </div>

  <div class="poc__block">
    {#each list as item}
    <span class="item">{item} </span>
    {/each}
  </div>

</div>