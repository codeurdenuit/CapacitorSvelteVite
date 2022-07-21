import storagePackage from './storagePackage';
import {Filesystem, Directory, Encoding} from '@capacitor/filesystem';

const root = {

  async createDirectory(directory) {
    await Filesystem.mkdir({path: directory, directory: Directory.Data});
  },

  async dirDirectory(path) {
    const list = await Filesystem.readdir({path, directory: Directory.Data});
    return list.files;
  },

  async readFile(directory, name) {
    const path = `${directory}/${name}`;
    const contents = await Filesystem.readFile({path, directory: Directory.Data, encoding: Encoding.UTF8});
    const blob = await this.compatibilityForRead(contents.data);
    const text = await this.blobToText(blob);
    return text;
  },

  async creatFile(directory, name, content) {
    const path = `${directory}/${name}`;
    const blob = new Blob([content], {type: 'text/plain'});
    const data = await this.compatibilityForWrite(blob);
    await Filesystem.writeFile({path, data, directory: Directory.Data, encoding: Encoding.UTF8});
  },

  async removeFile(directory, name) {
    const path = `${directory}/${name}`;
    await Filesystem.deleteFile({path, directory: Directory.Data});
  },

  async uploadMedia(directory, name, file) {
    const path = `${directory}/${name}`;
    const blob = new Blob([file], {type: file.type});
    const data = await this.compatibilityForWrite(blob);
    await Filesystem.writeFile({path, data, directory: Directory.Data, encoding: Encoding.UTF8});
  },

  async loadMedia(directory, name) {
    const path = `${directory}/${name}`;
    const contents = await Filesystem.readFile({path, directory: Directory.Data, encoding: Encoding.UTF8});
    const blob = await this.compatibilityForRead(contents.data);
    const src = await URL.createObjectURL(blob);
    return src;
  },

  async loadFileAsBlob(path) {
    const contents = await Filesystem.readFile({path, directory: Directory.Data, encoding: Encoding.UTF8});
    const blob = await this.compatibilityForRead(contents.data);
    return blob;
  },

  async compatibilityForWrite(blob) {
    if (Capacitor.getPlatform() === 'web') return blob;
    return this.blobToBase64(blob);
  },

  async compatibilityForRead(file) {
    if (Capacitor.getPlatform() === 'web') return file;
    return this.base64ToBlob(file);
  },


  blobToBase64(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        resolve(reader.result);
      };
    });
  },

  async base64ToBlob(base64Data) {
    const base64Response = await fetch(base64Data);
    const blob = await base64Response.blob();
    return blob;
  },

  blobToText(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsText(blob);
      reader.onloadend = function() {
        resolve(reader.result);
      };
    });
  },

  async _getByXhr(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.send();
    });
  },

};

export default Object.assign(root, storagePackage);
