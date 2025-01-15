import {ResizeSystem} from 'engine/systems/ResizeSystem.js';
import {UpdateSystem} from 'engine/systems/UpdateSystem.js';
import {GLTFLoader} from 'engine/loaders/GLTFLoader.js';
import {FirstPersonController} from 'engine/controllers/FirstPersonController.js';
import {Camera, Model, Node, Transform,} from 'engine/core.js';
import {calculateAxisAlignedBoundingBox, mergeAxisAlignedBoundingBoxes,} from 'engine/core/MeshUtils.js';
import {Physics} from './Physics.js';

import {Renderer} from './Renderer.js';
import {Light} from './Light.js';

// main.js
export let coinCount = 0;
const coinAudio = new Audio('scene/coin-recieved.mp3');

// A helper function to update the DOM display
export function updateCoinCountDisplay() {
    const coinCountSpan = document.getElementById('coinCount');
    if (coinCountSpan) {
        coinCountSpan.textContent = coinCount;
    }
}

// (Optional) a function to increment coin count
export function incrementCoinCount() {
    coinCount++;
    coinAudio.play()
    updateCoinCountDisplay();
    if (coinCount === 10) {
        sessionStorage.setItem('dontRender', JSON.stringify([]));
        location.reload();
        window.location.href = "end.html";
    }
}

// main.js

// Poskrbi, da se koda požene šele, ko je DOM pripravljen
document.addEventListener('DOMContentLoaded', () => {
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            sessionStorage.setItem('dontRender', JSON.stringify([]));
            location.reload();
        });
    }
});



const canvas = document.querySelector('canvas');
const renderer = new Renderer(canvas);
await renderer.initialize();

const loader = new GLTFLoader();
await loader.load(new URL('./scene/Kvadraten.gltf', import.meta.url));

const scene = loader.loadScene(loader.defaultScene);
if (loader.environmentMap) {
    renderer.setEnvironment(loader.environmentMap);
}
const camera = loader.loadNode('Camera');
camera.addComponent(new FirstPersonController(camera, canvas));
camera.isDynamic = true;
camera.aabb = {
    min: [-0.2, -0.2, -0.2],
    max: [0.2, 0.2, 0.2],
};

//luč
const light = new Node();
light.addComponent(new Transform({
    translation: [3, 3, 3],
}));
light.addComponent(new Light({
    ambient: 0.3,
}));
scene.addChild(light);

//floor
loader.loadNode('Floor').isStatic = true;
loader.loadNode('Sky').isStatic = true;

//maze
for (let i = 1; i <= 58; i++) {
    const curve = 'Curve.' + String(i).padStart(3, '0');
    loader.loadNode(curve).isStatic = true;
}
//coin shadows
for (let i = 11; i <= 20; i++) {
    const curve = 'Cylinder.' + String(i).padStart(3, '0');
    loader.loadNode(curve).isStatic = true;
}

//coins
const coin1 = loader.loadNode('Cylinder.001');
coin1.isStatic = true;
coin1.name = 'Cylinder.001';
const coin2 = loader.loadNode('Cylinder.002');
coin2.isStatic = true;
coin2.name = 'Cylinder.002';
const coin3 = loader.loadNode('Cylinder.003');
coin3.isStatic = true;
coin3.name = 'Cylinder.003';
const coin4 = loader.loadNode('Cylinder.004');
coin4.isStatic = true;
coin4.name = 'Cylinder.004';
const coin5 = loader.loadNode('Cylinder.005');
coin5.isStatic = true;
coin5.name = 'Cylinder.005';
const coin6 = loader.loadNode('Cylinder.006');
coin6.isStatic = true;
coin6.name = 'Cylinder.006';
const coin7 = loader.loadNode('Cylinder.007');
coin7.isStatic = true;
coin7.name = 'Cylinder.007';
const coin8 = loader.loadNode('Cylinder.008');
coin8.isStatic = true;
coin8.name = 'Cylinder.008';
const coin9 = loader.loadNode('Cylinder.009');
coin9.isStatic = true;
coin9.name = 'Cylinder.009';
const coin10 = loader.loadNode('Cylinder.010');
coin10.isStatic = true;
coin10.name = 'Cylinder.010';

const physics = new Physics(scene);

scene.traverse(node => {
    const model = node.getComponentOfType(Model);
    if (!model) return;

    const boxes = model.primitives.map(primitive => calculateAxisAlignedBoundingBox(primitive.mesh));
    node.aabb = mergeAxisAlignedBoundingBoxes(boxes);
});


function update(time, dt) {
    scene.traverse(node => {
        for (const component of node.components) {
            component.update?.(time, dt);
        }
    });
    physics.update(time, dt);
}

function render() {
    renderer.render(scene, camera);
}

function resize({displaySize: {width, height}}) {
    camera.getComponentOfType(Camera).aspect = width / height;
}

new ResizeSystem({canvas, resize}).start();
new UpdateSystem({update, render}).start();
