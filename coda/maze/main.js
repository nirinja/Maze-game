import {ResizeSystem} from 'engine/systems/ResizeSystem.js';
import {UpdateSystem} from 'engine/systems/UpdateSystem.js';
import {GLTFLoader} from 'engine/loaders/GLTFLoader.js';
import {UnlitRenderer} from 'engine/renderers/UnlitRenderer.js';
import {FirstPersonController} from 'engine/controllers/FirstPersonController.js';
import {Camera, Model, Node, Transform,} from 'engine/core.js';
import {calculateAxisAlignedBoundingBox, mergeAxisAlignedBoundingBoxes,} from 'engine/core/MeshUtils.js';
import {Physics} from './Physics.js';

import { Renderer } from './Renderer.js';
import { Light } from './Light.js';


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
loader.loadNode('Cube').isStatic = true;
//maze
for (let i = 1; i <= 58; i++) {
    const curve = 'Curve.' + String(i).padStart(3, '0');
    loader.loadNode(curve).isStatic = true;
}
//coins
for (let i = 1; i <= 20; i++) {
    const curve = 'Cylinder.' + String(i).padStart(3, '0');
    loader.loadNode(curve).isStatic = true;
}

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
