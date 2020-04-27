function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(1500, 850).parent('p5')
  print("this is setup")

}

function draw() {

background(86, 123, 145)

//worm time ! try lerp color on it or make it change color somehow
fill(250)
ellipse(700,800,70,20)
stroke(250)
strokeWeight(2)
line(667,798,649,792)
line(667,798,649,806)
line(673,782,673,818)
line(679,783,679,815)
line(685,784,685,815)
line(691,783,691,817)
line(698,784,698,817)
line(705,783,705,815)
line(712,784,712,816)
line(722,783,722,812)
line(727,784,727,810)
line(717,781,717,812)


//big squid
noStroke()
fill(199, 114, 34)
quad(748,574,769,545,812,565,789,600)
ellipse(562,576,400,80)
strokeWeight(6)
stroke(199, 114, 34)
line(379,576,23,616)
line(389,562,21,567)
line(402,560,32,526)
line(402,584,87,646)
line(388,575,63,687)
quad(31,523,22,514,4,524,20,532)
quad(22,565,11,556,3,563,17,572)
quad(21,615,15,608,3,616,17,624)
quad(85,645,74,644,66,649,82,654)
quad(61,685,47,683,40,693,60,696)
fill(204, 124, 49)
ellipse(518,575,10,90)
stroke(204, 124, 49)
strokeWeight(5)
line(733,573,798,568)
stroke(0)
fill(250)
circle(445,565,40)
fill(0)
circle(445,565,25)


//goblin shark
noStroke()
fill(40, 86, 115)
ellipse(255,431,215,40)
ellipse(259,436,150,30)
quad(233,408,294,382,308,417,270,424)
quad(233,408,71,410,160,421,315,435)
quad(235,408,370,412,429,435,242,426)
quad(119,414,119,424,152,436,430,458)
quad(152,434,121,442,121,450,190,454)
quad(186,451,456,457,453,438,367,412)
quad(171,452,248,451,241,439,158,436)
quad(444,437,512,374,521,375,474,457)
quad(487,423,490,472,467,474,448,450)
quad(390,447,394,467,419,470,420,447)
quad(315,448,322,466,353,469,358,442) //middle fin
quad(181,449,196,464,239,460,239,442)
quad(365,413,380,395,400,408,400,427) // top
triangle(196,462,219,470,238,458)
fill(0)
ellipse(138,415,6,4)
stroke(0)
strokeWeight(3)
line(167,421,171,442)
line(184,423,185,441)
line(174,420,178,442)


// transparent fish blob
noStroke()
fill(236, 221, 237,100)
circle(504,681,55)
quad(535,704,538,692,530,688,521,699)
quad(479,667,482,671,481,675,476,676)
quad(500,700,515,693,501,677,487,686)
arc(552,704,35,35,PI - HALF_PI, PI + HALF_PI ,PIE);
stroke(0,0,0,100)
strokeWeight(1)
arc(513,684,45,25,PI-QUARTER_PI,PI, PIE);
fill(0)
circle(498,669,10)

//small jellyfish
noStroke()
fill(199, 187, 84)
arc(527,188,30,30,PI- QUARTER_PI,0, CHORD)
strokeWeight(1.5)
stroke(199, 187, 84)
line(515,191,524,211)
line(541,198,537,187)
line(542,202,534,186)
line(534,198,527,190)
line(533,210,522,188)
line(538,185,543,198)
line(532,186,536,200)
line(518,189,523,201)
line(532,202,525,187)

// // large jellyfish
noStroke()
fill(161, 98, 156)
arc(460,353,80,80, PI - QUARTER_PI,0, CHORD)
strokeWeight(2.5)
stroke(161, 98, 156)
line(483,333,511,403)
line(478,342,499,394)
line(476,356,499,411)
line(464,360,478,383)
line(452,358,478,421)
line(443,365,455,390)
line(433,366,462,417)
line(476,392,458,359)
line(472,354,489,401)
line(451,361,464,401)



//angler
stroke(138, 54, 48)
strokeWeight(2)
line(289,727,278,710)
line(278,710,251,715)
line(251,715,242,740)
fill(138, 54, 48)
circle(244,769,65)
ellipse(235,775,75,45)
triangle(217,794,233,799,214,804)
arc(185,776,35,35,PI + HALF_PI, PI - HALF_PI ,PIE);
fill(250)
noStroke()
circle(289,727,6)
circle(256,756,12)
arc(244,771,45,25,PI-QUARTER_PI,PI, PIE);
arc(277,775,25,35,PI-QUARTER_PI,0-HALF_PI, PIE);


//bluefin tuna
strokeWeight(.5)
stroke(0)
fill(85, 119, 194)
ellipse(145,137,65,25)
triangle(186,138,160,147,161,126) //form tail

circle(124,132,6) // eye

fill(48, 76, 138)
triangle(150,124,150,115,140,124) //top fin
triangle(147,139,142,142,134,139) //side fun
triangle(148,149,151,156,141,148) //bottom fin

fill(121, 147, 163)
triangle(183,136,190,119,189,135)//tail points
triangle(189,135,194,154,183,138)

fill(0)
circle(123,132,4)//eye fill
fill(250,250,250,0)
triangle(113,139,116,137,112,134) // mouth - find a way to make this transparent
stroke(85, 119, 194)
strokeWeight(2.5)
line(160,128,160,146)
stroke(20, 47, 224)
strokeWeight(.75)
line(122,138,172,137)

//small fish
noStroke()
fill(30,50,200) // change or make random again
arc(111,182,10,10,PI - HALF_PI, PI + HALF_PI ,PIE);
ellipse(141-44,183,20,10)
fill(0,0,0)
circle(93,180,5)
fill(270,270,270)
circle(93,180,2)
fill(99,70,108) // change or make random again
triangle(93,182,100,182,97,184);

}

function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
