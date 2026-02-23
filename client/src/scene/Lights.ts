import * as THREE from 'three';

export class Lights {
  ambientLight: THREE.AmbientLight;
  pointLight: THREE.PointLight;

  constructor() {
    this.ambientLight = new THREE.AmbientLight(0x404040, 5);
    this.pointLight = new THREE.PointLight(0xffffff, 2, 100);
    this.pointLight.position.set(10, 10, 10);
  }

  addToScene(scene: THREE.Scene) {
    scene.add(this.ambientLight);
    scene.add(this.pointLight);
  }
}
