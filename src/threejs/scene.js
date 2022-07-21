import * as THREE from 'three';

class Scene extends THREE.Scene {
  constructor() {
    super();
    this.root = new THREE.Object3D();
    this.add(this.root);
  }

  async _init(camera) {
    this.initialised = true;
    await this.init(camera);
  }

  refreshSceneState() {

  }
}

export default Scene;
