const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background').appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 10000; i++) {
  vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
  vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
  vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ color: 0x00ffe7, size: 2 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 1000;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();

