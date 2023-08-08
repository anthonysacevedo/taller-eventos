document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".div").style.backgroundColor = "green";
})

document.addEventListener("click", function () {
    const contenedor = document.querySelector(".div");
    function saludar(){
        return alert("Hola, soy el Div");
    }

    contenedor.addEventListener("click", saludar())
})