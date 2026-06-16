
        // Capturamos el botón
        const boton = document.getElementById("procesar");

        // Evento click
        boton.addEventListener("click", function() {
            
            // Capturamos los valores
            let num1 = Number(document.getElementById("numero1").value);
            let num2 = Number(document.getElementById("numero2").value);

            // Sumamos
            let suma = num1 + num2;

            // Mostramos el resultado
            document.getElementById("resultado").innerHTML = "Resultado: " + suma;
        });
    