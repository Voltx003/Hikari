import * as THREE from 'three';

export class Stars {
  mesh: THREE.Points;

  constructor() {
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const posArray = new Float32Array(count * 3);

    for(let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    this.mesh = new THREE.Points(particlesGeometry, particlesMaterial);
  }

  update() {
    this.mesh.rotation.y -= 0.0005;
  }
}
