import * as THREE from 'three';
import Scene from './scene';
import Grid from './grid';
import materialLineGradiant from './materialLineGradiant';

export default class Demo extends Scene {
  async init(camera) {
    camera.position.set( 3, 1, 1);
    camera.lookAt(0.0, -2, 0);

    this.lightAmbient = new THREE.AmbientLight(0x303040);
    this.add(this.lightAmbient);

    this.light = new THREE.PointLight(0xffdddd);
    this.light.position.set(0.2 * 2, 1.812 * 1.5, 0.913 * 3);
    this.add(this.light);

    this.grid = new THREE.Line(new Grid(10, 10, 10, 10), materialLineGradiant);
    this.add(this.grid);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshLambertMaterial({color: 0x333333});
    const cube = new THREE.Mesh(geometry, material);
    this.add(cube);
  }


  update(dt) {
  }
}
