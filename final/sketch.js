// let pio
// let bark
// // Constants
// const Y_AXIS = 1;
// const X_AXIS = 2;
// let b1, b2, c1, c2;

function setup() {
//   createCanvas(710, 400);
//
//   // Define colors
//   b1 = color(255);
//   b2 = color(0);
//   c1 = color(204, 102, 0);
//   c2 = color(0, 102, 153);
//
//   noLoop();
// }
//
//
// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();
// }
//
//
// function preload() {
//
//     pio = loadImage("pio.jpg")
//     // ocean = loadSound("oceanNoise.mp3")
//
// }
//
// function setup() {

    createCanvas(windowWidth, windowHeight).parent('p5')

}

function draw() {

  // Background

      let color_1 = color(89, 120, 255)      // light blue  99, 166, 207
      let color_2 = color(5, 18, 26)      // abyss black

      // fade_amount has to be between 0 and 1
      // by taking the mouseY value and dividing it by the height of the screen
      // we get a value between 0 and 1 which represents how far up the screen the
      // mouse is currently positioned
      let fade_amount = mouseY / height
      let lerped_color = lerpColor(color_1, color_2, fade_amount)

      //// or try using frameCount()
      // let fade_amount = frameCount / 500
      // let lerped_color = lerpColor(color_1, color_2, fade_amount)

      //// or an object variable (see object declaration above)
      // let fade_amount = changing_color.c / 500
      // let lerped_color = lerpColor(color_1, color_2, fade_amount)
      // changing_color.c += changing_color.vc
      // if (changing_color.c == 0 || changing_color.c == 500) {
      //     changing_color.vc = -changing_color.vc
      // }

      background(lerped_color)



}

function mouseClicked() {

    // ocean.play()
    print(int(mouseX), int(mouseY))
}
