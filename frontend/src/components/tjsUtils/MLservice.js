// // mlService.js

// import * as tf from "@tensorflow/tfjs";
// import { drawRect } from "../utilities";
// import { labelMap } from "../utilities";

// const RunModel = async (webcamRef, canvasRef) => {
//     const net = await tf.loadGraphModel('https://storage.googleapis.com/beyondthewords/model.json');

//     setInterval(() => {
//         detect(net, webcamRef, canvasRef);
//     }, 16.7);
// };

// const detect = async (net, webcamRef, canvasRef) => {
//     if (
//         typeof webcamRef.current !== "undefined" &&
//         webcamRef.current !== null &&
//         webcamRef.current.video.readyState === 4
//     ) {
//         const video = webcamRef.current.video;
//         const videoWidth = video.videoWidth;
//         const videoHeight = video.videoHeight;

//         video.width = videoWidth;
//         video.height = videoHeight;
//         canvasRef.current.width = videoWidth;
//         canvasRef.current.height = videoHeight;

//         const img = tf.browser.fromPixels(video);
//         const resized = tf.image.resizeBilinear(img, [640, 480]);
//         const casted = resized.cast('int32');
//         const expanded = casted.expandDims(0);
//         const obj = await net.executeAsync(expanded);

//         const boxes = await obj[1].array();
//         const classes = await obj[2].array();
//         const scores = await obj[4].array();

//         const ctx = canvasRef.current.getContext("2d");

//         requestAnimationFrame(() => drawRect({
//             boxes: boxes[0],
//             classes: classes[0],
//             scores: scores[0],
//             threshold: 0.8,
//             imgWidth: videoWidth,
//             imgHeight: videoHeight,
//             ctx,
//             labelMap
//         }));

//         tf.dispose(img);
//         tf.dispose(resized);
//         tf.dispose(casted);
//         tf.dispose(expanded);
//         tf.dispose(obj);
//     }
// };

// export default RunModel;
