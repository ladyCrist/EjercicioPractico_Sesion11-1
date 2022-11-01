function CambiarImagen() {
  random = Math.floor(Math.random() * 7 + 1);
  document.getElementById("gatos").src = `img/gato${random}.jpg`;
  console.log(random);
}

function serie0() {
  n = 8;
  v = 1;
  x = 1;
  let Ax = [];
  do {
    Ax.push(x);
    console.log(Ax[v - 1]);
    if (x == 0) x = 2;
    x--;
    v++;
  } while (v <= n);
  document.getElementById("resultado").innerHTML = Ax;
}

function Serie1() {
  n = 8;
  v = 1;
  a = 1;
  let Ax = [];
  do {
    if (a == 2) a = 0;
    Ax.push(a);
    console.log(Ax[v - 1]);
    v++;
    a++;
  } while (v <= n);
  document.getElementById("resultado").innerHTML = Ax;
}

function Serie2() {
  n = 8;
  v = 1;
  let Ax = [];
  Ax.push(-1);
  do {
    Ax.push(Ax[v - 1] * -1);
    console.log(Ax[v - 1]);
    v++;
  } while (v <= n);
  document.getElementById("resultado").innerHTML = Ax;
}

function Serie3() {
  n = 8;
  v = 1;
  x = 1;
  s = 1;
  let Ax = [];
  do {
    Ax.push(s * x);
    console.log(Ax[v - 1]);
    if (x == 2) {
      x = 0;
      s *= -1;
    }
    x++;
    v++;
  } while (v <= n);
  document.getElementById("resultado").innerHTML = Ax;
}

function Serie4() {
  n = 8;
  v = 1;
  x = 3;
  let Ax = [];
  do {
    Ax.push(x);
    console.log(Ax[v - 1]);
    if (x == 5) x = 2;
    x++;
    v++;
  } while (v <= n);
  document.getElementById("resultado").innerHTML = Ax;
}
