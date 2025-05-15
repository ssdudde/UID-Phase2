import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//anti aliasing a technique smoothening out the edges
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

//adding all elements related to renderer to js
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
camera.position.set(5,6,18);  
camera.lookAt(0,1,0); //looking at centre 

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance =5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0,1,0);
controls.update()
 
const groundGeometry = new THREE.CircleGeometry(7,64);
groundGeometry.rotateX(-Math.PI/2);//To ensure it horizontal instead of vertical
const groundMaterial = new THREE.MeshStandardMaterial({                         //Mesh defines space around the obj(color,etc)
    color: 0x333333,//Gray
    side: THREE.DoubleSide //by default only 1 side is rendered so rendering both sides
});
const groundMesh = new THREE.Mesh(groundGeometry,groundMaterial);
groundMesh.castShadow = false; //as grnd doesnt need to cast shadow
groundMesh.receiveShadow = true; 
scene.add(groundMesh);

const backLight = new THREE.DirectionalLight(0xffffff, 1.2);
backLight.position.set(-10, 10, -10);
scene.add(backLight);

const spotLight = new THREE.SpotLight(0x2980b9, 10, 100, 0.3, 0.5); // light blue  //intensity,distance,
spotLight.position.set (5,25,5);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const loader = new GLTFLoader().setPath('keyboard/');
loader.load('scene.gltf',(gltf) =>{
    const mesh = gltf.scene;

    mesh.scale.set(25,25,25); 
    mesh.position.set(0,1,0);
    
    scene.add(mesh)
});


function animate(){
    requestAnimationFrame(animate);
    controls.update();  //requesting(bowser)for animation of animate func
    renderer.render(scene,camera);   //rendering our scene
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


animate(); //to start rendering calling the function
