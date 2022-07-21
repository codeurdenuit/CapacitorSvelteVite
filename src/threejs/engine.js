import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
class Engine {
  constructor(dom) {
    this.clock = new THREE.Clock(true);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, false);
    dom.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(60, dom.offsetWidth / dom.offsetHeight, 0.05, 2000);
  }

  async start(Scene) {
    this.scene = new Scene();
    this.scene.background = new THREE.Color(0xcccccc);
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    await this.scene._init(this.camera);
    controls.target.set(0.0, 0.0, 0);
    controls.update();
    const update = () => {
      this.requestAnimation = requestAnimationFrame(update);
      this.render(this.renderer);
      this.update(this.clock.getDelta(), this.renderer);
    };
    update();
  }

  update(dt, renderer) {
    this.scene.update(dt, this.camera);
  }

  render(renderer) {
    renderer.render(this.scene, this.camera);
  }

  dismount() {
    cancelAnimationFrame(this.requestAnimation);
  }
}

export default Engine;
