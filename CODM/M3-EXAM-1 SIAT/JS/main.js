

import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

//Creating the Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);

//Camera
camera.position.x = 0;
camera.position.y = 200;
camera.position.z = 50;

//Particles
let stars, starGeo;
particles();

// Lights
function lighting() {
    const ambientlight = new THREE.AmbientLight(0xeb9007,0.09);
    scene.add(ambientlight);

    const light = new THREE.HemisphereLight(0xdba260, 0x1c3020,.5 );
    scene.add(light);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(20, 200, 40);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1000;
    spotLight.shadow.mapSize.height = 1000;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    scene.add(spotLight);
}

// Textures
const floorTexture = new THREE.TextureLoader().load('Assets/Textures/floor.png');
const boxTexture = new THREE.TextureLoader().load('Assets/Textures/boxt1.png');
const boxTexture2 = new THREE.TextureLoader().load('Assets/Textures/boxt2.png');
const yellowBoxTexture = new THREE.TextureLoader().load('Assets/Textures/yellow.png');
const yellowMatTexture = new THREE.TextureLoader().load('Assets/Textures/yellowmat.png');
const crateTexture = new THREE.TextureLoader().load('Assets/Textures/crate.png');
const crateCoverTexture = new THREE.TextureLoader().load('Assets/Textures/cratetop.png');
const tarpTexture = new THREE.TextureLoader().load('Assets/Textures/tarp.png');
const tarpWallTexture = new THREE.TextureLoader().load('Assets/Textures/tarpwall.png');
const barrelTexture = new THREE.TextureLoader().load('Assets/Textures/barrel.png');
 const wallTexture = new THREE.TextureLoader().load('Assets/Textures/wall6.png');
 const wallTexture2 = new THREE.TextureLoader().load('Assets/Textures/wall7.png');
 const hazardTexture = new THREE.TextureLoader().load('Assets/Textures/hazard.png');
 const wall3Texture = new THREE.TextureLoader().load('Assets/Textures/wall3.png');
 const wall4Texture = new THREE.TextureLoader().load('Assets/Textures/brick.png');
 const wall2Texture = new THREE.TextureLoader().load('Assets/Textures/wall2.png');
 const logoTexture = new THREE.TextureLoader().load('Assets/Textures/logo.png');


//Color
const darkBrownColor = 0x120e04; 

// Some of the Materials
const yellowMaterial = new THREE.MeshMatcapMaterial({ color: 0xffb300});

// size of the floor based on the area covered by the particles
const floorSize = 600; 
const floorThickness = 10; 



// Floor
const floorGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; 
floor.position.y = -floorThickness / 2; 
scene.add(floor);

lighting();

//Geometries
// Box
const boxGeometry = new THREE.BoxGeometry(30, 30, 30); 
const boxMaterial = new THREE.MeshStandardMaterial({ map: boxTexture });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 13, 0);
scene.add(box);

//box2
const boxGeometry2 = new THREE.BoxGeometry(30, 30, 30); 
const boxMaterial2 = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
box2.position.set(0, 43, 0); 
scene.add(box2);

//box1 left
const leftBoxGeometry = new THREE.BoxGeometry(30, 30, 30); 
const leftBoxMaterial = new THREE.MeshStandardMaterial({ map: boxTexture });
const leftBox = new THREE.Mesh(leftBoxGeometry, leftBoxMaterial);
leftBox.position.set(-130, 13, -50); 
scene.add(leftBox);

//box2 left
const leftBehindBoxGeometry = new THREE.BoxGeometry(30, 30, 30);
const leftBehindBoxMaterial = new THREE.MeshStandardMaterial({ map: boxTexture });
const leftBehindBox = new THREE.Mesh(leftBehindBoxGeometry, leftBehindBoxMaterial);
leftBehindBox.position.set(-130, 13, -85); 
scene.add(leftBehindBox);

//box3 left
const leftOfLeftBoxGeometry = new THREE.BoxGeometry(30, 30, 30); 
const leftOfLeftBoxMaterial = new THREE.MeshStandardMaterial({ map: boxTexture });
const leftOfLeftBox = new THREE.Mesh(leftOfLeftBoxGeometry, leftOfLeftBoxMaterial);
leftOfLeftBox.position.set(-165, 13, -50); 
scene.add(leftOfLeftBox);

//box4 left
const box3Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box3Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const box3 = new THREE.Mesh(box3Geometry, box3Material);
box3.position.set(-160, 13, -80);
scene.add(box3);

//box5 left
const box5Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box5Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const box5 = new THREE.Mesh(box5Geometry, box5Material);
box5.position.set(-195, 13, -80); 
scene.add(box5);

//box6 left
const box6Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box6Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const box6 = new THREE.Mesh(box6Geometry, box6Material);
box6.position.set(-227, 13, -80);
scene.add(box6);

//box7 left
const box7Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box7Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const box7 = new THREE.Mesh(box7Geometry, box7Material);
box7.position.set(-220, 43, -75);
scene.add(box7);

//box8
const box8Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box8Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const box8 = new THREE.Mesh(box8Geometry, box8Material);
box8.position.set(-190, 43, -80); 
scene.add(box8);

//box9
const box9Geometry = new THREE.BoxGeometry(30, 30, 30); 
const box9Material = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const box9 = new THREE.Mesh(box9Geometry, box9Material);
box9.position.set(-222, 73, -75); 
scene.add(box9);

//frontbox
const boxMaterialFront1 = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const boxGeometryFront1 = new THREE.BoxGeometry(30, 30, 30); 
const frontbox1 = new THREE.Mesh(boxGeometryFront1, boxMaterialFront1);
frontbox1.position.set(12, 13, 265); 
scene.add(frontbox1);

//frontbox2
const boxMaterialFront2 = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const boxGeometryFront2 = new THREE.BoxGeometry(30, 30, 30); 
const frontbox2 = new THREE.Mesh(boxGeometryFront2, boxMaterialFront2);
frontbox2.position.set(12 - 30 - 5, 13, 270);
scene.add(frontbox2);

//frontbox3
const boxMaterialFront3 = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const boxGeometryFront3 = new THREE.BoxGeometry(30, 30, 30); 
const frontbox3 = new THREE.Mesh(boxGeometryFront3, boxMaterialFront3);
frontbox3.position.set(12, 13 + 30 + 5, 265); 
scene.add(frontbox3);

//rightbox1
const rightBox1Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const rightBox1Geometry = new THREE.BoxGeometry(30, 30, 30); 
const rightBox1 = new THREE.Mesh(rightBox1Geometry, rightBox1Material);
rightBox1.position.set(230, 13, -100); 
scene.add(rightBox1);

//rightbox2
const rightBox2Material = new THREE.MeshStandardMaterial({ map: boxTexture });
const rightBox2Geometry = new THREE.BoxGeometry(30, 30, 30); 
const rightBox2 = new THREE.Mesh(rightBox2Geometry, rightBox2Material);
rightBox2.position.set(230, 13, -60); 
scene.add(rightBox2);

//toprightbox
const rightOpBoxMaterial = new THREE.MeshStandardMaterial({ map: boxTexture2 });
const rightOpBoxGeometry = new THREE.BoxGeometry(30, 30, 30); 
const rightOpBox = new THREE.Mesh(rightOpBoxGeometry, rightOpBoxMaterial);
rightOpBox.position.set(235, 40, -80); 
scene.add(rightOpBox);

//hazard
const hazardMaterial = new THREE.MeshStandardMaterial({ map: hazardTexture });
const hazardGeometry = new THREE.BoxGeometry(60, 70, 80); 
const hazard = new THREE.Mesh(hazardGeometry, hazardMaterial);
hazard.position.set(160, 13, -70); 
scene.add(hazard);

//Yellow Tarp
const box10Geometry = new THREE.BoxGeometry(250, 5, 100); 
const box10Material = new THREE.MeshStandardMaterial({ map: tarpTexture });
const box10 = new THREE.Mesh(box10Geometry, box10Material);
box10.position.set(-165, 95, -150); 
scene.add(box10);

//tarpwall
const box11Geometry = new THREE.BoxGeometry(190, 110, 5);
const box11Material = new THREE.MeshStandardMaterial({ map: tarpWallTexture });
const box11 = new THREE.Mesh(box11Geometry, box11Material);
box11.position.set(-195, 42, -110); 
scene.add(box11);

//tarplegs
const behindMiddleBoxGeometry = new THREE.BoxGeometry(4, 110, 4);
const behindMiddleBoxMaterial = new THREE.MeshLambertMaterial({ color: darkBrownColor });
const behindMiddleBox = new THREE.Mesh(behindMiddleBoxGeometry, behindMiddleBoxMaterial);
behindMiddleBox.position.set(-50, 42, -110); 
scene.add(behindMiddleBox);

const legs2Geometry = new THREE.BoxGeometry(4, 110, 4); 
const legs2Material = new THREE.MeshLambertMaterial({ color: darkBrownColor });
const legs2 = new THREE.Mesh(legs2Geometry, legs2Material);
legs2.position.set(-50, 42, -190); 
scene.add(legs2);

//behind tarp
const secondfMaterial = new THREE.MeshStandardMaterial({ map: wall3Texture });
const secondfGeometry = new THREE.BoxGeometry(250, 150, 10); 
const secondf = new THREE.Mesh(secondfGeometry, secondfMaterial);
secondf.position.set(-165, 170, -200); 
scene.add(secondf);

//brickbuilding
const behindSecondfMaterial = new THREE.MeshPhongMaterial({ map: wall4Texture });
const behindSecondfGeometry = new THREE.BoxGeometry(250, 250, 90);
const behindSecondf = new THREE.Mesh(behindSecondfGeometry, behindSecondfMaterial);
behindSecondf.position.set(-165, 120, -250);
scene.add(behindSecondf);

//building2
const rightSideBoxMaterial = new THREE.MeshPhongMaterial({ map: wall2Texture });
const rightSideBoxGeometry = new THREE.BoxGeometry(175, 125, 90);
const rightSideBox = new THREE.Mesh(rightSideBoxGeometry, rightSideBoxMaterial);
rightSideBox.position.set(50, 60, -250);
scene.add(rightSideBox);

//building3
const building3Material = new THREE.MeshPhongMaterial({ map: wall2Texture });
const building3Geometry = new THREE.BoxGeometry(175, 125, 90)
const building3 = new THREE.Mesh(building3Geometry, building3Material);
building3.position.set(210, 60, -250);
scene.add(building3);

// building2 and 3 roof
const topBoxMaterial = new THREE.MeshStandardMaterial({ map: wall4Texture });
const topBoxGeometry = new THREE.BoxGeometry(340, 20, 90);
const topBox = new THREE.Mesh(topBoxGeometry, topBoxMaterial);
topBox.position.set(130, 135, -250); 
scene.add(topBox);

// yellow
const smallBoxGeometry = new THREE.BoxGeometry(50, 10, 50); 
const smallBox = new THREE.Mesh(smallBoxGeometry, yellowMaterial);
smallBox.position.set(40, 2, 0); 
scene.add(smallBox);

//yellow.2
const yellowBoxMaterial = new THREE.MeshStandardMaterial({ map: yellowBoxTexture });
const yellowBoxGeometry = new THREE.BoxGeometry(45, 10, 45); 
const yellowBox = new THREE.Mesh(yellowBoxGeometry, yellowBoxMaterial);
yellowBox.position.set(40, 4, 0); 
scene.add(yellowBox);

//yellowmat
const yellowMatMaterial = new THREE.MeshStandardMaterial({ map: yellowMatTexture });
const yellowMatBoxGeometry = new THREE.BoxGeometry(70, 2, 70); 
const yellowMatBox = new THREE.Mesh(yellowMatBoxGeometry, yellowMatMaterial);
yellowMatBox.position.set(90, -5.5, -80); 
scene.add(yellowMatBox);

//crate
const crateMaterial = new THREE.MeshStandardMaterial({ map: crateTexture });
const crateGeometry = new THREE.BoxGeometry(15, 20, 40); 
const crate = new THREE.Mesh(crateGeometry, crateMaterial);
crate.position.set(90, 2, -50); 
scene.add(crate);

// crate cover 
const crateCoverMaterial = new THREE.MeshStandardMaterial({ map: crateCoverTexture });
const crateCoverGeometry = new THREE.BoxGeometry(15, 1, 40); 
const crateCover = new THREE.Mesh(crateCoverGeometry, crateCoverMaterial);
crateCover.position.set(90, 12, -50);
scene.add(crateCover);
 
//barrel1
const barrelGeometry = new THREE.CylinderGeometry(10, 10, 47, 32);
const barrelMaterial = new THREE.MeshStandardMaterial({ map: barrelTexture });
const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
barrel.position.set(-190, 23, -50);
scene.add(barrel);

//barrel2
const barrelGeometry2 = new THREE.CylinderGeometry(10, 10, 47, 32); 
const barrelMaterial2 = new THREE.MeshStandardMaterial({ map: barrelTexture });
const barrel2 = new THREE.Mesh(barrelGeometry2, barrelMaterial2);
barrel2.position.set(-210, 23, -50); 
scene.add(barrel2);

//barrel3
const barrelGeometry3 = new THREE.CylinderGeometry(10, 10, 47, 32); 
const barrelMaterial3 = new THREE.MeshStandardMaterial({ map: barrelTexture });
const barrel3 = new THREE.Mesh(barrelGeometry3, barrelMaterial3);
barrel3.position.set(-230, 23, -50); 
scene.add(barrel3);

//wall1
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });
const wallGeometry = new THREE.BoxGeometry(600,  200, 10);
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
wall1.position.set(0,  80, 290); 
scene.add(wall1);

//wall2
const wallMaterial2 = new THREE.MeshStandardMaterial({ map: wallTexture2 }); 
const wallGeometry2 = new THREE.BoxGeometry(10, 350, 600); 
const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial2);
wall2.position.set(-290, 160, 0); 
scene.add(wall2);

//logo
const logoBoxMaterial = new THREE.MeshStandardMaterial({ map: logoTexture });
const logoBoxGeometry = new THREE.BoxGeometry(70, 4, 40); 
const logoBox = new THREE.Mesh(logoBoxGeometry, logoBoxMaterial);
logoBox.position.set(-300, 250, 0); 
scene.add(logoBox);


//logo positions
const initialPosition = new THREE.Vector3(-50, 250, 0);
const finalPosition = new THREE.Vector3(100, 250, 0);
const distanceThreshold = 200; 
let currentPosition = initialPosition.clone();
let direction = new THREE.Vector3(1, 0, 0); 

// //3D Models
// const barrelLoader = new GLTFLoader();

// barrelLoader.load('Assets/Models/barrel/scene.gltf', function (gltf) {
//     const model = scene.gltf;
//     model.scale.set(10, 10, 10); 
//     model.position.set(0, 10, 0); 
//     scene.add(model);
// });

//Animate Particles
function animateParticles() {
    starGeo.verticesNeedUpdate = true;
    stars.position.y -= 2;

    if (stars.position.y < -180) {
        stars.position.y = 180;
    }
};

//Animate
function animate() {
    requestAnimationFrame(animate);
    animateParticles();
    controls.update();
    renderer.render(scene, camera);

    const increment = direction.clone().multiplyScalar(2); 
    currentPosition.add(increment);
    logoBox.position.copy(currentPosition);

    if (currentPosition.distanceTo(initialPosition) >= distanceThreshold) {
        // go back to the initial position
        direction.negate();
    }


}


animate();

//Particles
function particles() {
    const points = [];

    for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
            Math.random() * 900 - 300,
            Math.random() * 900 - 300,
            Math.random() * 900 - 300
        );
        points.push(star);
    }

    starGeo = new THREE.BufferGeometry().setFromPoints(points);

    let sprite = new THREE.TextureLoader().load("./assets/images/flare.png");
    let starMaterial = new THREE.PointsMaterial({
        color: 0xfffff,
        size: 0.7,
        map: sprite,
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
}
