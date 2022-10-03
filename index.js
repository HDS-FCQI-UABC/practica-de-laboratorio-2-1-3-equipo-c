const display = document.getElementById("valor");
const botonNumero = document.querySelectorAll(".botonNumero");
const botonBorrar = document.getElementById("borrar");
const botonEntrar = document.getElementById("entrar");
const botonCancelar = document.getElementById("cancelar");

let valor = "";

botonNumero.forEach(boton => {
  boton.addEventListener('click', ()=>{
    display.value += "*";
    valor += boton.innerHTML;
  })
});

botonCancelar.addEventListener('click', () => {
  display.value = "";
  valor = "";
});

botonBorrar.addEventListener('click', () => {
  display.value = (display.value).slice(0, (display.value.length - 1));
  valor = valor.slice(0, valor.length - 1);
});

