let topfishs=[]
let tunas=[]
let smalljellys=[]
let largejellys=[]
let sharks=[]
let squids=[]
let anglers=[]
let deepfishs=[]
let worms=[]
let bubbles=[]


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

for (let i=0; i<45 ; i++){

          let random_bubble= {x:40,
            y:80,
            x:random(0,width),
            y:random(0,height/3),
            vx:random(1,3),
            vy:random(1,3),
            color:[0,random(100,250),random(100,250),100],
           }

            bubbles.push(random_bubble)
          }

for (let i=0; i<150 ; i++){

      let random_topfish= {x:20,
        y:80,
        x:random(0,width),
        y:random(0,height/3),
        vx:random(-1,-5),
        vy:random(1,5),
        color:[random(0,250),random(200,250),random(200,250)],
       }

        topfishs.push(random_topfish)
      }

for (let i=0; i<7 ; i++){

        let random_tuna= { x:random(0,width),
          y:random(0,height/4),
          vx:random(-1,-4) ,
          vy:random(1,3),
          color:[random(230,234),random(220,225),random(30,35)],
         }

          tunas.push(random_tuna)
        }

for (let i=0; i<15; i++){

          let random_smalljelly= { x:random(0,width),
            y:random(0,height),
            vx:random(0,1) ,
            vy:random(0,6),
            color:[random(0,250),random(0,250),random(0,250),random(100,250)],
           }

            smalljellys.push(random_smalljelly)
          }
for (let i=0; i<5 ; i++){

            let random_largejelly= { x:random(0,width),
              y:random(0,height),
              vx:random(0,3) ,
              vy:random(0,4),
              color:[random(0,250),random(0,250),random(0,250),random(100,200)],
             }

              largejellys.push(random_largejelly)
            }
for (let i=0; i<1 ; i++){

              let random_shark= { x:random(0,width),
                y:random(0,height),
                vx:random(-1,-3) ,
                vy:random(1,3),

               }

                sharks.push(random_shark)
              }
for (let i=0; i<1 ; i++){

                let random_angler= { x:random(0,width),
                  y:random(height-80,height/2),
                  vx:random(.25,2) ,
                  vy:random(.25,.5),

                 }

                  anglers.push(random_angler)
                }
for (let i=0; i<2 ; i++){

                  let random_worm= { x:0,
                    y:(0),
                    vx:random(.1,1),
                    vy:random(.1,1),
                    color:[random(0,250),random(0,225),random(0,250),random(100,150)],
                   }

                    worms.push(random_worm)
                  }

for (let i=0; i<1 ; i++){

                    let random_deepfish=  { x:random(0,width),
                      y:random(0,height/2),
                      vx:random(-.25,2) ,
                      vy:random(.25,.5),
                    }
                      deepfishs.push(random_deepfish)
                    }

for (let i=0; i<2 ; i++){

                      let random_squid=  { x:0,
                        y:random(0,height/2),
                        vx:random(.5,2) ,
                        vy:random(.25,.75)
                      }

                        squids.push(random_squid)
                      }


}

function draw() {

if(frameCount<=300){
    let color_1 = color(156, 213, 219 )
    let color_2 = color(3,4,5)


    let fade_amount = frameCount /1200
    let lerped_color = lerpColor(color_1, color_2, fade_amount)


    background(lerped_color)

    for ( let topfish of topfishs) {
      noStroke()
      fill(30,50,200)
      arc(topfish.x,topfish.y,10,10,PI - HALF_PI, PI + HALF_PI ,PIE);
      ellipse(topfish.x-13,topfish.y+1,20,10)
      fill(0,0,0)
      circle(topfish.x-18,topfish.y-2,5)
      fill(270,270,270)
      circle(topfish.x-18,topfish.y-2,2)
      fill(99,70,108)
      triangle(topfish.x-11,topfish.y,topfish.x-11,topfish.y,topfish.x-18,topfish.y+2);

      topfish.x = topfish.x + topfish.vx + random(-5, 5)
      topfish.y = topfish.y + topfish.vy + random(-5, 5)
          if (topfish.x>= width) {
            topfish.vx=-topfish.vx
          }
          if(topfish.x<=0) {
            topfish.vx=-topfish.vx
          }
          if(topfish.y>=height) {
            topfish.vy=-topfish.vy
          }
          if(topfish.y<=0) {
            topfish.vy=-topfish.vy
          }
        }

      for ( let bubble of bubbles ) {
          fill(bubble.color)
          circle(bubble.x + random(-10, 10), bubble.y + random(-10, 10), random(2, 15))

              }
        }
        for (let smalljelly of smalljellys) {

        strokeWeight(1.5)
        stroke(199, 187, 84)
        line(smalljelly.x+15,smalljelly.y-9,smalljelly.x+24,smalljelly.y+11)
        line(smalljelly.x+41,smalljelly.y-2,smalljelly.x+37,smalljelly.y-13)
        line(smalljelly.x+42,smalljelly.y+2,smalljelly.x+34,smalljelly.y-14)
        line(smalljelly.x+34,smalljelly.y-2,smalljelly.x+27,smalljelly.y-10)
        line(smalljelly.x+33,smalljelly.y-2,smalljelly.x+22,smalljelly.y-12)
        line(smalljelly.x+33,smalljelly.y+10,smalljelly.x+22,smalljelly.y-12)
        line(smalljelly.x+38,smalljelly.y-15,smalljelly.x+43,smalljelly.y-2)
        line(smalljelly.x+32,smalljelly.y-14,smalljelly.x+36,smalljelly.y)
        line(smalljelly.x+18,smalljelly.y-11,smalljelly.x+23,smalljelly.y+1)
        line(smalljelly.x+32,smalljelly.y+2,smalljelly.x+25,smalljelly.y-13)

        noStroke()
        fill(smalljelly.color)
        arc(smalljelly.x+27,smalljelly.y-12,30,30,PI- QUARTER_PI,0, CHORD)

        smalljelly.x = smalljelly.x + smalljelly.vx *.4
        smalljelly.y = smalljelly.y + smalljelly.vy *.1
            if (smalljelly.x>= width) {
              smalljelly.vx=-smalljelly.vx
            }
            if(smalljelly.x<=0) {
              smalljelly.vx=-smalljelly.vx
            }
            if(smalljelly.y>=height) {
              smalljelly.vy=-smalljelly.vy
            }
            if(smalljelly.y<=0) {
              smalljelly.vy=-smalljelly.vy}
        }
        for ( let tuna of tunas ) {
        //     //bluefin tuna
            strokeWeight(.5)
            stroke(0)
            fill(85, 119, 194)
            ellipse(tuna.x,tuna.y,65,25)
            triangle(tuna.x+41,tuna.y+1,tuna.x+15,tuna.y+10,tuna.x+16,tuna.y-11) //form tail

            circle(tuna.x-21,tuna.y-5,6) // eye

            fill(48, 76, 138)
            triangle(tuna.x+5,tuna.y-13,tuna.x+5,tuna.y-22,tuna.x-5,tuna.y-13) //top fin
            triangle(tuna.x+2,tuna.y+2,tuna.x-3,tuna.y-5,tuna.x+11,tuna.y+2) //side fun
            triangle(tuna.x+3,tuna.y+12,tuna.x+6,tuna.y+19,tuna.x-4,tuna.y+11) //bottom fin

            fill(121, 147, 163)
            triangle(tuna.x+38,tuna.y-1,tuna.x+45,tuna.y-18,tuna.x+44,tuna.y-2)//tail points
            triangle(tuna.x+44,tuna.y-2,tuna.x+49,tuna.y+27,tuna.x+38,tuna.y+1)

            fill(0)
            circle(tuna.x-22,tuna.y-5,4)//eye fill
            fill(250,250,250,0)
            triangle(tuna.x-32,tuna.y+2,tuna.x-29,tuna.y,tuna.x-33,tuna.y-3) // mouth
            stroke(85, 119, 194)
            strokeWeight(2.5)
            line(tuna.x+15,tuna.y-9,tuna.x+15,tuna.y+9)
            stroke(20, 47, 224)
            strokeWeight(.75)
            line(tuna.x-23,tuna.y+1,tuna.x+27,tuna.y)

        tuna.x = tuna.x + tuna.vx
        tuna.y = tuna.y + tuna.vy
            if (tuna.x>= width) {
              tuna.vx=-tuna.vx
            }
            if(tuna.x<=0) {
              tuna.vx=-tuna.vx
            }
            if(tuna.y>=height) {
              tuna.vy=-tuna.vy
            }
            if(tuna.y<=0) {
              tuna.vy=-tuna.vy
            }
        }

if(frameCount>300 && frameCount<600 ){

    let color_1 = color(156, 213, 219 )      // light blue
    let color_2 = color(3,4,5)

    let fade_amount = frameCount /1200
    let lerped_color = lerpColor(color_1, color_2, fade_amount)


    background(lerped_color)

    for ( let largejelly of largejellys) {

    strokeWeight(2.5)
    stroke(161, 98, 156)
    line(largejelly.x+83,largejelly.y+33,largejelly.x+111,largejelly.y+103)
    line(largejelly.x+78,largejelly.y+42,largejelly.x+99,largejelly.y+94)
    line(largejelly.x+76,largejelly.y+56,largejelly.x+99,largejelly.y+111)
    line(largejelly.x+64,largejelly.y+60,largejelly.x+78,largejelly.y+83)
    line(largejelly.x+52,largejelly.y+58,largejelly.x+78,largejelly.y+121)
    line(largejelly.x+43,largejelly.y+68,largejelly.x+55,largejelly.y+90)
    line(largejelly.x+33,largejelly.y+66,largejelly.x+62,largejelly.y+117)
    line(largejelly.x+76,largejelly.y+92,largejelly.x+58,largejelly.y+59)
    line(largejelly.x+72,largejelly.y+54,largejelly.x+89,largejelly.y+101)
    line(largejelly.x+51,largejelly.y+61,largejelly.x+64,largejelly.y+101)
    noStroke()
    fill(largejelly.color) //161, 98, 156
    arc(largejelly.x+60,largejelly.y+53,80,80, PI - QUARTER_PI,0, CHORD)

    largejelly.x = largejelly.x + largejelly.vx *.3
    largejelly.y = largejelly.y + largejelly.vy *.1
        if (largejelly.x>= width) {
          largejelly.vx=-largejelly.vx
        }

        if(largejelly.y>=height) {
          largejelly.vy=-largejelly.vy
        }
        if(largejelly.y<=0) {
          largejelly.vy=-largejelly.vy}
    }

    for (let smalljelly of smalljellys) {

    strokeWeight(1.5)
    stroke(199, 187, 84)
    line(smalljelly.x+15,smalljelly.y-9,smalljelly.x+24,smalljelly.y+11)
    line(smalljelly.x+41,smalljelly.y-2,smalljelly.x+37,smalljelly.y-13)
    line(smalljelly.x+42,smalljelly.y+2,smalljelly.x+34,smalljelly.y-14)
    line(smalljelly.x+34,smalljelly.y-2,smalljelly.x+27,smalljelly.y-10)
    line(smalljelly.x+33,smalljelly.y-2,smalljelly.x+22,smalljelly.y-12)
    line(smalljelly.x+33,smalljelly.y+10,smalljelly.x+22,smalljelly.y-12)
    line(smalljelly.x+38,smalljelly.y-15,smalljelly.x+43,smalljelly.y-2)
    line(smalljelly.x+32,smalljelly.y-14,smalljelly.x+36,smalljelly.y)
    line(smalljelly.x+18,smalljelly.y-11,smalljelly.x+23,smalljelly.y+1)
    line(smalljelly.x+32,smalljelly.y+2,smalljelly.x+25,smalljelly.y-13)

    noStroke()
    fill(smalljelly.color) //199, 187, 84
    arc(smalljelly.x+27,smalljelly.y-12,30,30,PI- QUARTER_PI,0, CHORD)

    smalljelly.x = smalljelly.x + smalljelly.vx *.4
    smalljelly.y = smalljelly.y + smalljelly.vy *.1
        if (smalljelly.x>= width) {
          smalljelly.vx=-smalljelly.vx
        }
        if(smalljelly.x<=0) {
          smalljelly.vx=-smalljelly.vx
        }
        if(smalljelly.y>=height) {
          smalljelly.vy=-smalljelly.vy
        }
        if(smalljelly.y<=0) {
          smalljelly.vy=-smalljelly.vy}
    }

    for ( let tuna of tunas ) {
    //     //bluefin tuna
        strokeWeight(.5)
        stroke(0)
        fill(85, 119, 194)
        ellipse(tuna.x,tuna.y,65,25)
        triangle(tuna.x+41,tuna.y+1,tuna.x+15,tuna.y+10,tuna.x+16,tuna.y-11) //form tail

        circle(tuna.x-21,tuna.y-5,6) // eye

        fill(48, 76, 138)
        triangle(tuna.x+5,tuna.y-13,tuna.x+5,tuna.y-22,tuna.x-5,tuna.y-13) //top fin
        triangle(tuna.x+2,tuna.y+2,tuna.x-3,tuna.y-5,tuna.x+11,tuna.y+2) //side fun
        triangle(tuna.x+3,tuna.y+12,tuna.x+6,tuna.y+19,tuna.x-4,tuna.y+11) //bottom fin

        fill(121, 147, 163)
        triangle(tuna.x+38,tuna.y-1,tuna.x+45,tuna.y-18,tuna.x+44,tuna.y-2)//tail points
        triangle(tuna.x+44,tuna.y-2,tuna.x+49,tuna.y+27,tuna.x+38,tuna.y+1)

        fill(0)
        circle(tuna.x-22,tuna.y-5,4)//eye fill
        fill(250,250,250,0)
        triangle(tuna.x-32,tuna.y+2,tuna.x-29,tuna.y,tuna.x-33,tuna.y-3) // mouth
        stroke(85, 119, 194)
        strokeWeight(2.5)
        line(tuna.x+15,tuna.y-9,tuna.x+15,tuna.y+9)
        stroke(20, 47, 224)
        strokeWeight(.75)
        line(tuna.x-23,tuna.y+1,tuna.x+27,tuna.y)

    tuna.x = tuna.x + tuna.vx
    tuna.y = tuna.y + tuna.vy
        if (tuna.x>= width) {
          tuna.vx=-tuna.vx
        }
        if(tuna.x<=0) {
          tuna.vx=-tuna.vx
        }
        if(tuna.y>=height) {
          tuna.vy=-tuna.vy
        }
        if(tuna.y<=0) {
          tuna.vy=-tuna.vy
        }
    }
}

if(frameCount>=600 && frameCount<900 ){

      let color_1 = color(156, 213, 219 )      // light blue
      let color_2 = color(3,4,5)

      let fade_amount = frameCount /1200
      let lerped_color = lerpColor(color_1, color_2, fade_amount)
      // let fade_amount = mouseY / height //use this to control animals by depth
      // let lerped_color = lerpColor(color_1, color_2, fade_amount)

      background(lerped_color)

      for ( let shark of sharks) {
      //goblin shark
      noStroke()
      fill(79, 107, 125) //40, 86, 115
      ellipse(shark.x+55,shark.y+31,215,40)
      ellipse(shark.x+59,shark.y+36,150,30)
      quad(shark.x+33,shark.y+8,shark.x+94,shark.y-18,shark.x+108,shark.y+17,shark.x+70,shark.y+24)
      quad(shark.x+33,shark.y+8,shark.x-129,shark.y+10,shark.x-40,shark.y+21,shark.x+115,shark.y+35)
      quad(shark.x+35,shark.y+8,shark.x+170,shark.y+12,shark.x+229,shark.y+35,shark.x+42,shark.y+26)
      quad(shark.x-81,shark.y+14,shark.x-81,shark.y+24,shark.x-48,shark.y+36,shark.x+230,shark.y+58)
      quad(shark.x-48,shark.y+34,shark.x-79,shark.y+42,shark.x+79,shark.y+50,shark.x-10,shark.y+54) //+79 might be -
      quad(shark.x-14,shark.y+51,shark.x+256,shark.y+57,shark.x+253,shark.y+38,shark.x+167,shark.y+12)
      quad(shark.x-29,shark.y+52,shark.x+48,shark.y+51,shark.x+41,shark.y+39,shark.x-42,shark.y+36)
      quad(shark.x+244,shark.y+37,shark.x+312,shark.y-26,shark.x+321,shark.y-25,shark.x+274,shark.y+57)
      quad(shark.x+287,shark.y+23,shark.x+290,shark.y+72,shark.x+267,shark.y+74,shark.x+248,shark.y+50)
      quad(shark.x+190,shark.y+47,shark.x+194,shark.y+67,shark.x+219,shark.y+70,shark.x+220,shark.y+47)
      quad(shark.x+115,shark.y+48,shark.x+122,shark.y+66,shark.x+153,shark.y+69,shark.x+158,shark.y+42) //middle fin
      quad(shark.x-19,shark.y+49,shark.x-4,shark.y+64,shark.x+39,shark.y+60,shark.x+39,shark.y+42)
      quad(shark.x+165,shark.y+13,shark.x+180,shark.y-5,shark.x+200,shark.y+8,shark.x+200,shark.y+27) // top
      triangle(shark.x-4,shark.y+62,shark.x+19,shark.y+70,shark.x+38,shark.y+58)
      fill(0)
      ellipse(shark.x-62,shark.y+15,6,4)
      stroke(0)
      strokeWeight(3)
      line(shark.x-33,shark.y+21,shark.x-29,shark.y+42)
      line(shark.x-16,shark.y+23,shark.x-15,shark.y+41)
      line(shark.x-26,shark.y+20,shark.x-22,shark.y+42)

      shark.x = shark.x + shark.vx *.2
      shark.y = shark.y + shark.vy *.1
}
for ( let worm of worms){
//worm time ! try lerp color on it or make it change color somehow
fill(worm.color)
ellipse(worm.x+100,worm.y,70,20)
stroke(worm.color)
strokeWeight(2)
line(worm.x+67,worm.y-2,worm.x+49,worm.y+8)
line(worm.x+67,worm.y-2,worm.x+49,worm.y-8)
line(worm.x+73,worm.y-20,worm.x+73,worm.y+20)
line(worm.x+79,worm.y-20,worm.x+79,worm.y+20)
line(worm.x+85,worm.y-20,worm.x+85,worm.y+20)
line(worm.x+91,worm.y-20,worm.x+91,worm.y+20)
line(worm.x+98,worm.y-20,worm.x+98,worm.y+20)
line(worm.x+105,worm.y-20,worm.x+105,worm.y+20)
line(worm.x+112,worm.y-20,worm.x+112,worm.y+20)
line(worm.x+123,worm.y-20,worm.x+123,worm.y+20)
line(worm.x+122,worm.y-20,worm.x+122,worm.y+20)
line(worm.x+127,worm.y-20,worm.x+127,worm.y+20)
line(worm.x+117,worm.y-20,worm.x+117,worm.y+20)

worm.x = worm.x + worm.vx *.3
worm.y = worm.x + worm.vy *.2}


for ( let squid of squids ) {

noStroke()
fill(199, 114, 34)
quad(squid.x+748,squid.y+374,squid.x+769,squid.y+345,squid.x+812,squid.y+365,squid.x+789,squid.y+400)
ellipse(squid.x+562,squid.y+376,400,80)
strokeWeight(6)
stroke(199, 114, 34)
line(squid.x+379,squid.y+376,squid.x+23,squid.y+416)
line(squid.x+389,squid.y+362,squid.x+21,squid.y+367)
line(squid.x+402,squid.y+360,squid.x+32,squid.y+326)
line(squid.x+402,squid.y+384,squid.x+87,squid.y+446)
line(squid.x+388,squid.y+375,squid.x+63,squid.y+487)
quad(squid.x+31,squid.y+323,squid.x+22,squid.y+314,squid.x+4,squid.y+324,squid.x+20,squid.y+332)
quad(squid.x+22,squid.y+365,squid.x+11,squid.y+356,squid.x+3,squid.y+363,squid.x+17,squid.y+372)
quad(squid.x+21,squid.y+415,squid.x+15,squid.y+408,squid.x+3,squid.y+416,squid.x+17,squid.y+424)
quad(squid.x+85,squid.y+445,squid.x+74,squid.y+444,squid.x+66,squid.y+449,squid.x+82,squid.y+454)
quad(squid.x+61,squid.y+485,squid.x+47,squid.y+483,squid.x+40,squid.y+493,squid.x+60,squid.y+496)
fill(204, 124, 49)
ellipse(squid.x+518,squid.y+375,10,90)
stroke(204, 124, 49)
strokeWeight(5)
line(squid.x+733,squid.y+373,squid.x+798,squid.y+368)
stroke(0)
fill(250)
circle(squid.x+445,squid.y+365,40)
fill(0)
circle(squid.x+445,squid.y+365,25)

squid.x = squid.x + squid.vx *.2
squid.y = squid.y + squid.vy *.1

}
}


if(frameCount>=900 ){
 // && frameCount<1200 ){

        let color_1 = color(156, 213, 219 )      // light blue
        let color_2 = color(3,4,5)

        // let fade_amount = mouseY / height //use this to control animals by depth
        // let lerped_color = lerpColor(color_1, color_2, fade_amount)
        let fade_amount = frameCount /1200
        let lerped_color = lerpColor(color_1, color_2, fade_amount)

        background(lerped_color)

        for (let angler of anglers) {
        stroke(138, 54, 48)
        strokeWeight(2)
        line(angler.x+39,angler.y+27,angler.x+28,angler.y+10)
        line(angler.x+28,angler.y+10,angler.x+1,angler.y+15)
        line(angler.x+1,angler.y+15,angler.x-8,angler.y+40)
        fill(138, 54, 48)
        circle(angler.x-6,angler.y+69,65)
        ellipse(angler.x-15,angler.y+75,75,45)
        triangle(angler.x-33,angler.y+94,angler.x-17,angler.y+99,angler.x-36,angler.y+104)
        arc(angler.x-65,angler.y+76,35,35,PI + HALF_PI, PI - HALF_PI ,PIE);
        fill(250)
        noStroke()
        circle(angler.x+39,angler.y+27,6)
        circle(angler.x+6,angler.y+56,12) //eye
        arc(angler.x-6,angler.y+71,45,25,PI-QUARTER_PI,PI, PIE);
        arc(angler.x+25,angler.y+75,25,35,PI-QUARTER_PI,0-HALF_PI, PIE);

        angler.x = angler.x + angler.vx *.2
        angler.y = angler.y + angler.vy *.1
        }


        for (let deepfish of deepfishs) {
        // transparent fish blob
        noStroke()
        fill(236, 221, 237,100)
        circle(deepfish.x+4,deepfish.y+81,55)
        quad(deepfish.x+35,deepfish.y+104,deepfish.x+38,deepfish.y+92,deepfish.x+30,deepfish.y+88,deepfish.x+21,deepfish.y+99)
        quad(deepfish.x-21,deepfish.y+67,deepfish.x-18,deepfish.y+71,deepfish.x-19,deepfish.y+75,deepfish.x-24,deepfish.y+76)
        quad(deepfish.x,deepfish.y+100,deepfish.x+15,deepfish.y+93,deepfish.x+1,deepfish.y+77,deepfish.x-13,deepfish.y+86)
        arc(deepfish.x+52,deepfish.y+104,35,35,PI - HALF_PI, PI + HALF_PI ,PIE);
        stroke(0,0,0,100)
        strokeWeight(1)
        arc(deepfish.x+13,deepfish.y+84,45,25,PI-QUARTER_PI,PI, PIE);
        fill(0)
        circle(deepfish.x-2,deepfish.y+69,10)

        deepfish.x = deepfish.x + deepfish.vx *.3
        deepfish.y = deepfish.y + deepfish.vy *.2
        if (deepfish.x>= width) {
          deepfish.vx=-deepfish.vx
        }
        if(deepfish.x<=0) {
          deepfish.vx=-deepfish.vx
        }
        if(deepfish.y>=height) {
          deepfish.vy=-deepfish.vy
        }
        if(deepfish.y<=0) {
          deepfish.vy=-deepfish.vy}

        }
}

function mouseClicked() {

    fullscreen(true)
}
function windowResized() {

    resizeCanvas(windowWidth, windowHeight)
}
}
