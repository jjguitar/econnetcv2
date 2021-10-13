// Función "añadir cero".
function addZero(x, n) {
  while (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
}

// Añadir control al elemento "p" principal de la página.
function idGenerator() {
  let d = new Date();
  let m = addZero(d.getMinutes(), 2);
  let s = addZero(d.getSeconds(), 2);
  let ms = addZero(d.getMilliseconds(), 3);
  return m + s + ms
}

export { idGenerator }