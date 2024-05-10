// Realizo la solicitud al servidor para obtener el JSON
fetch('https://apis.datos.gob.ar/georef/api/direcciones?direccion=Lucilo%20B.%20L%C3%B3pez%201289&departamento=Concepci%C3%B3n%20del%20Uruguay&provincia=Entre%20R%C3%ADos')
    .then(response => response.json()) // Convertimos la respuesta a formato JSON
    .then(data => {
        // Obtengo los valores del JSON necesario para el enunciado
        const calles = data.parametros.direccion.calles;
        const valor = data.parametros.direccion.altura.valor;
        const departamento = data.parametros.departamento;
        const provincia = data.parametros.provincia;
        
        // Creo el mensaje a mostrar en pantalla
        const mensaje = `<h2>Dirección 1:</h2> ${calles} ${valor}, ${departamento}, ${provincia}.`;

        // Muestro el mensaje en el elemento con id "results"
        document.getElementById('results').innerHTML = mensaje;
    })

    .catch(error => {
        console.error('Error:', error);
        // En caso de error, se muestra un mensaje de error en el elemento con id "results"
        document.getElementById('results').innerHTML = '<h2>Dirección 1:</h2> Se produjo un error al obtener los datos.';
    });