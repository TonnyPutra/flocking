const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;

let Ufo;
let Space;

function preload() {
  Ufo = loadImage("ufo.png");
  Space = loadImage("space.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);

  //menambahkan jumlah populasi
  p = createInput(10);
  p.position(2, 25);
  p.changed(population);

  population();

  function population() {
    pop = p.value();
    for (let i = 0; i < pop; i++) {
      flock.push(new Boid());
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(Space, 0, 0, windowWidth, windowHeight);
  //background(20);
  fill("white");
  stroke(5);
  text("Masukkan Jumlah Populasi Yang Ingin Ditambahkan", 2, 15);
  text("AlignSlider", 2, windowHeight - 20);
  text("CohesionSlider", 140, windowHeight - 20);
  text("SeparationSlider", 270, windowHeight - 20);

  for (let boid of flock) {
    fill("black");
    rect(windowWidth - 201, 0, 200, windowHeight * 0.35);
    fill("white");
    // stroke("white")
    strokeWeight(0);
    text("TUGAS MATA KULIAH", windowWidth - 170, 20);
    text("VISUAL STUDIO CODE", windowWidth - 173, 40);
    text("SIMULASI FLOCKING", windowWidth - 170, 60);

    text("Nama : Tonny Putra Yoga", windowWidth - 190, 150);
    text("NIM :121160048", windowWidth - 190, 180);
    text("Prodi : Matematika", windowWidth - 190, 210);

    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}
