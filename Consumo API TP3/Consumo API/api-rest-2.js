// Realizo la solicitud al servidor para obtener el JSON
fetch('https://apis.datos.gob.ar/georef/api/direcciones?direccion=Sarmiento%201247&departamento=Concepci%C3%B3n%20del%20Uruguay&provincia=Entre%20R%C3%ADos')
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
        // Obtengo los valores del JSON necesarios
        const calles = data.parametros.direccion.calles;
        const valor = data.parametros.direccion.altura.valor;
        const departamento = data.parametros.departamento;
        const provincia = data.parametros.provincia;
        
        // Creao el mensaje a mostrar en pantalla
        const mensaje = `<h2>Dirección 2:</h2> ${calles} ${valor}, ${departamento}, ${provincia}.`;

        // Muestro el mensaje en el elemento con id "results"
        document.getElementById('results2').innerHTML = mensaje;
    })
    
    .catch(error => {
        console.error('Error:', error);
        // En caso de error, se muestra un mensaje de error en el elemento con id "results"
        document.getElementById('results2').innerHTML = '<h2>Dirección 2:</h2> Se produjo un error al obtener los datos.';
    });