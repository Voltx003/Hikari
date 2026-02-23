import * as THREE from 'three';
import { Cube } from './objects/Cube';
import { Stars } from './scene/Stars';
import { Lights } from './scene/Lights';
import { PostProcessing } from './scene/PostProcessing';
import './style.css';

const scene = new THREE.Scene();
// Deep space background color
scene.background = new THREE.Color(0x050510);
// Add some fog for depth
scene.fog = new THREE.FogExp2(0x050510, 0.035);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ReinhardToneMapping;
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Add objects
const cube = new Cube();
scene.add(cube.mesh);

const stars = new Stars();
scene.add(stars.mesh);

const lights = new Lights();
lights.addToScene(scene);

// Post processing
const postProcessing = new PostProcessing(scene, camera, renderer);

// Mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isHovered = false;

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
  requestAnimationFrame(animate);

  // Interaction logic
  raycaster.setFromCamera(mouse, camera);
  // Need to cast line mesh which might be tricky with raycaster sometimes,
  // but LineSegments usually works if threshold is set or intersected properly.
  // However, raycasting lines can be precise. Let's create a invisible box for better hit testing if needed.
  // For now, let's try direct intersection.
  raycaster.params.Line.threshold = 0.1;

  const intersects = raycaster.intersectObject(cube.mesh);
  isHovered = intersects.length > 0;

  if (isHovered) {
      // @ts-ignore
      if(cube.mesh.material.color) cube.mesh.material.color.setHex(0xff00ff);
      cube.mesh.rotation.x += 0.02;
      cube.mesh.rotation.y += 0.02;
  } else {
      // @ts-ignore
      if(cube.mesh.material.color) cube.mesh.material.color.setHex(0x00ffff);
      cube.update();
  }

  stars.update();

  postProcessing.render();
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    postProcessing.resize();
});
