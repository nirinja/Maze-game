// Importing essential modules and components for the application.
import {ResizeSystem} from 'engine/systems/ResizeSystem.js';
import {UpdateSystem} from 'engine/systems/UpdateSystem.js';

import {GLTFLoader} from 'engine/loaders/GLTFLoader.js';
import {UnlitRenderer} from 'engine/renderers/UnlitRenderer.js';
import {FirstPersonController} from 'engine/controllers/FirstPersonController.js';

import {Camera, Model} from 'engine/core.js';

import {
    calculateAxisAlignedBoundingBox,
    mergeAxisAlignedBoundingBoxes,
} from 'engine/core/MeshUtils.js';

import {Physics} from './Physics.js';

// Set up the rendering canvas and initialize the renderer.
const canvas = document.querySelector('canvas');
const renderer = new UnlitRenderer(canvas);
await renderer.initialize(); // Prepares the renderer for use.

// Load a GLTF scene and retrieve its default scene and nodes.
const loader = new GLTFLoader();
await loader.load(new URL('./scene/Kvadraten.gltf', import.meta.url));

const scene = loader.loadScene(loader.defaultScene); // Retrieve the main scene.
const camera = loader.loadNode('Camera'); // Retrieve the camera node.
camera.addComponent(new FirstPersonController(camera, canvas)); // Add first-person controls to the camera.
camera.isDynamic = true; // Mark the camera as dynamic for updates.
camera.aabb = { // Define the axis-aligned bounding box for the camera.
    min: [-0.2, -0.2, -0.2],
    max: [0.2, 0.2, 0.2],
};

// Load and configure various static nodes in the scene.
loader.loadNode('Cube').isStatic = true;
loader.loadNode('Curve.001').isStatic = true;
loader.loadNode('Curve.002').isStatic = true;
loader.loadNode('Curve.003').isStatic = true;
loader.loadNode('Curve.004').isStatic = true;
loader.loadNode('Curve.005').isStatic = true;
loader.loadNode('Curve.006').isStatic = true;
loader.loadNode('Curve.007').isStatic = true;
loader.loadNode('Curve.008').isStatic = true;
loader.loadNode('Curve.009').isStatic = true;
loader.loadNode('Curve.010').isStatic = true;
loader.loadNode('Curve.011').isStatic = true;
loader.loadNode('Curve.012').isStatic = true;
loader.loadNode('Curve.013').isStatic = true;
loader.loadNode('Curve.014').isStatic = true;
loader.loadNode('Curve.015').isStatic = true;
loader.loadNode('Curve.016').isStatic = true;
loader.loadNode('Curve.017').isStatic = true;
loader.loadNode('Curve.018').isStatic = true;
loader.loadNode('Curve.019').isStatic = true;
loader.loadNode('Curve.020').isStatic = true;
loader.loadNode('Curve.021').isStatic = true;
loader.loadNode('Curve.022').isStatic = true;
loader.loadNode('Curve.023').isStatic = true;
loader.loadNode('Curve.024').isStatic = true;
loader.loadNode('Curve.025').isStatic = true;
loader.loadNode('Curve.026').isStatic = true;
loader.loadNode('Curve.027').isStatic = true;
loader.loadNode('Curve.028').isStatic = true;
loader.loadNode('Curve.029').isStatic = true;
loader.loadNode('Curve.030').isStatic = true;
loader.loadNode('Curve.031').isStatic = true;
loader.loadNode('Curve.032').isStatic = true;
loader.loadNode('Curve.033').isStatic = true;
loader.loadNode('Curve.034').isStatic = true;
loader.loadNode('Curve.035').isStatic = true;
loader.loadNode('Curve.036').isStatic = true;
loader.loadNode('Curve.037').isStatic = true;
loader.loadNode('Curve.038').isStatic = true;
loader.loadNode('Curve.039').isStatic = true;
loader.loadNode('Curve.040').isStatic = true;
loader.loadNode('Curve.041').isStatic = true;
loader.loadNode('Curve.042').isStatic = true;
loader.loadNode('Curve.043').isStatic = true;
loader.loadNode('Curve.044').isStatic = true;
loader.loadNode('Curve.045').isStatic = true;
loader.loadNode('Curve.046').isStatic = true;
loader.loadNode('Curve.047').isStatic = true;
loader.loadNode('Curve.048').isStatic = true;
loader.loadNode('Curve.049').isStatic = true;
loader.loadNode('Curve.050').isStatic = true;
loader.loadNode('Curve.051').isStatic = true;
loader.loadNode('Curve.052').isStatic = true;
loader.loadNode('Curve.053').isStatic = true;
loader.loadNode('Curve.054').isStatic = true;
loader.loadNode('Curve.055').isStatic = true;
loader.loadNode('Curve.056').isStatic = true;
loader.loadNode('Curve.057').isStatic = true;
loader.loadNode('Curve.058').isStatic = true;

const coin1 = loader.loadNode('Cylinder.001');
coin1.isStatic = true;
coin1.name = 'Cylinder.001';
//loader.loadNode('Cylinder.001').isStatic = true;
loader.loadNode('Cylinder.002').isStatic = true;
loader.loadNode('Cylinder.003').isStatic = true;
loader.loadNode('Cylinder.004').isStatic = true;
loader.loadNode('Cylinder.005').isStatic = true;
loader.loadNode('Cylinder.006').isStatic = true;
loader.loadNode('Cylinder.007').isStatic = true;
loader.loadNode('Cylinder.008').isStatic = true;
loader.loadNode('Cylinder.009').isStatic = true;
loader.loadNode('Cylinder.010').isStatic = true;

// Initialize the physics system for the scene.
const physics = new Physics(scene);

// Calculate axis-aligned bounding boxes for all models in the scene.
scene.traverse(node => {
    const model = node.getComponentOfType(Model); // Get the model component of the node.
    if (!model) return;

    // Calculate the bounding boxes for all primitives in the model.
    const boxes = model.primitives.map(primitive => calculateAxisAlignedBoundingBox(primitive.mesh));
    // Merge all bounding boxes into one and assign it to the node.
    node.aabb = mergeAxisAlignedBoundingBoxes(boxes);
});

// Define the update function to handle time-based updates.
function update(time, dt) {
    scene.traverse(node => {
        for (const component of node.components) {
            component.update?.(time, dt);
        }
    });

    physics.update(time, dt); // Update the physics system.
}

// Define the render function to draw the scene using the renderer.
function render() {
    renderer.render(scene, camera);
}

// Handle resizing of the canvas and adjust the camera's aspect ratio.
function resize({displaySize: {width, height}}) {
    camera.getComponentOfType(Camera).aspect = width / height;
}

// Start the systems for handling resize events and updates.
new ResizeSystem({canvas, resize}).start();
new UpdateSystem({update, render}).start();
