function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  let glyphsNumber = 49;
  let columnsNumber = ceil(sqrt(glyphsNumber));
  let rowsNumber = sqrt(glyphsNumber);
  let currentX = 0;
  let currentY = 0;
  let columnWidth = windowWidth/columnsNumber;
  let rowsWidth = windowHeight/rowsNumber;

  for (let g = 0; g < glyphsNumber; g++) {
    myGlyph(currentX + columnWidth/2, currentY + rowsWidth/2, rowsWidth*0.6);
    currentX = currentX + columnWidth

    if (currentX >= windowWidth) {
      currentX = 0;
      currentY = currentY + rowsWidth
    }
  }

}

function draw() {
}

function myGlyph(_x, _y, _size) {
  push();

    fill(random(0,255), random(0, 255), random(0, 255)) // funzione magnifica per colori casuali

    // FACCIA
    translate(_x, _y);

    push();
    noStroke()
    rect(0, 0, _size, _size, 10);
    pop();

    push();


      // orecchie
      push();

        noStroke()
        rect(_size/10, -_size/10, _size/5, _size/5, 5)
        rect(_size-(_size/10)*3, -_size/10, _size/5, _size/5, 5)

      pop();


      // occhi
      fill(255, 255, 255)
      circle(_size/5, _size/5, _size/3)
      circle(_size-_size/5, _size/5, _size/3)


      // pupille
      const eyeSpace = random(_size/10, _size/3.7)

      fill(0)
      circle(eyeSpace, eyeSpace, _size/10)
      circle(_size-eyeSpace, eyeSpace, _size/10)
      

      // bocca
      fill(random(0,255), random(0, 255), random(0, 255))
      rect(_size/10, _size-_size/2.5, _size-_size/5, _size/5, 10)   


    pop();

    

    // BOLLE
    for (let i = 0; i < 4; i++) {
    
      angleMode(DEGREES)
      const myRotation = random(360); // se un numero, tra 0 e quel numero; se due numeri, tra quelli
      const myDiameter = random(_size/10, _size/3);
    
      push();

        rotate(myRotation);
        translate(_size/2, _size/2);
        circle(0, 0, myDiameter);

      pop();
    }

  pop();
}