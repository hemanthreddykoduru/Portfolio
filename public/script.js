// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 40;

// Renderer
const canvas = document.querySelector("#bg");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// Core 3D Object
const geometry = new THREE.IcosahedronGeometry(12, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x38bdf8,
  wireframe: true,
  emissive: 0x1e40af
});
const core = new THREE.Mesh(geometry, material);
scene.add(core);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(20, 20, 20);
scene.add(light);

// Particles
function addParticle() {
  const geo = new THREE.SphereGeometry(0.2, 16, 16);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geo, mat);

  const [x, y, z] = Array(3).fill().map(() =>
    THREE.MathUtils.randFloatSpread(200)
  );

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().forEach(addParticle);

// Animate
function animate() {
  requestAnimationFrame(animate);

  core.rotation.x += 0.002;
  core.rotation.y += 0.003;

  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
