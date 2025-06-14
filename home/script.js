import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Get the container and canvas elements
const container = document.getElementById("keyboard-container");
const canvas = document.getElementById("keyboard-canvas");

// Anti-aliasing: a technique for smoothening out the edges
// Use the canvas if it exists, otherwise let renderer create one
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Set renderer size to match container, not window
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);


const scene = new THREE.Scene();

// Camera setup: use container aspect ratio for correct sizing
const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    1,
    1000
);
camera.position.set(5, 6, 18);
camera.lookAt(0, 1, 0); // Looking at centre

// OrbitControls for interactive rotation
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;//for making object  seem like it has weight
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;//vertical angle
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// Optional: Add a ground mesh for visual effect
const groundGeometry = new THREE.CircleGeometry(7, 64);
groundGeometry.rotateX(-Math.PI / 2); // To ensure it is horizontal instead of vertical
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333, // Gray
    side: THREE.DoubleSide // By default only 1 side is rendered, so rendering both sides
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(groundMesh);

// Lighting setup
const backLight = new THREE.DirectionalLight(0xffffff, 1.2);
backLight.position.set(-10, 10, -10);
scene.add(backLight);

const spotLight = new THREE.SpotLight(0x2980b9, 10, 100, 0.3, 0.5); // Light blue
spotLight.position.set(5, 25, 5);
scene.add(spotLight);

// Add a little ambient light for a more modern look
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Load the GLTF keyboard model
const loader = new GLTFLoader().setPath('keyboard/');
loader.load('scene.gltf', (gltf) => {
    const mesh = gltf.scene;

    mesh.scale.set(40, 40,40);
    mesh.position.set(0, 1, 0);

    scene.add(mesh);
}, undefined, (error) => {
    console.error('Error loading keyboard model:', error);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Requesting (browser) for animation of animate func
    renderer.render(scene, camera); // Rendering our scene
}

// Responsive resizing: always use container size
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

animate(); // To start rendering, calling the function
