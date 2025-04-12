const formulario = document.getElementById("formulario");
const inputFormulario = document.getElementById("inputFormulario");

const formularioCliente = data => {
    formulario.addEventListener('keyup', e =>{
        e.preventDefault();
        const botonPresionado = inputFormulario.value.toLowerCase();
        // console.log(botonPresionado);
        const arrayExtra = data.filter(item => {
            const letraApi = item.name.official.toLowerCase();
            if(letraApi.indexOf(botonPresionado) !== -1){
                return item;
            }
        });        
        banderillas(arrayExtra);
    })
}