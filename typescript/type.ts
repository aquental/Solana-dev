const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

//Type Inference

let x = 3;
let y: number = 4;

//Best common type
//let z = [0, 1, null];
let w: (number | null)[];
