//creacion de fecha actualizada:
/* InnerText o innerHTML, hace referencia a la parte del código vacía (donde escribes), del elemento que nombras. 
En este caso, fecha*/

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString("es-ES", {
  year: "numeric",
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
