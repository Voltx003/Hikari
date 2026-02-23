import * as THREE from 'three';

export class Cube {
  mesh: THREE.LineSegments;

  constructor() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const edges = new THREE.EdgesGeometry(geometry);
    // Neon Cyan Color
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    this.mesh = new THREE.LineSegments(edges, material);
  }

  update() {
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.005;
  }
}
