import JsZip from 'jszip';
import {Filesystem, Directory, Encoding} from '@capacitor/filesystem';

export default {

  async exportPackage(name, filePath1, filePath2, filePath3) {
    const blob1 = await this.loadFileAsBlob(filePath1);
    const blob2 = await this.loadFileAsBlob(filePath2);
    const blob3 = await this.loadFileAsBlob(filePath3);
    const pack = new JsZip();
    pack.file('file.json', blob1);
    pack.file('file.png', blob2);
    pack.file('file.mp4', blob3);
    const packValue = await pack.generateAsync({type: 'blob'});
    await this.saveAs(packValue, name);
  },

  async importPackage(directory, file) {
    const blob = new Blob([file], {type: file.type});
    const zip = new JsZip();
    const pack = await zip.loadAsync(blob);
    await this.unpackage(directory, pack);
  },

  async unpackage(directory, pack) {
    for (const name in pack.files) {
      if (Object.prototype.hasOwnProperty.call(pack.files, name)) {
        const file = pack.files[name];
        const blob = await file.async('blob');
        const data = await this.compatibilityForWrite(blob);
        const path = `${directory}/${name}`;
        console.log(path)
        await Filesystem.writeFile({path, data, directory: Directory.Data, encoding: Encoding.UTF8});
      }
    }
  },

  async saveAs(blob, name) {
    if (Capacitor.getPlatform() === 'web') {
      this.saveByLink(blob, name);
    } else {
      this.saveInDevice(blob, name);
    }
  },

  async saveByLink(blob, name) {
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target= '_blank';
    link.download = name;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(downloadUrl);
  },

  async saveInDevice(blob, name) {
    const path = name;
    const data = await this.blobToBase64(blob);
    await Filesystem.writeFile({path, data, directory: Directory.Documents});
  },

};
