document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        let hasWarnings = false;

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value;

        document.getElementById('warning-nombre').innerHTML = "";
        document.getElementById('warning-email').innerHTML = "";
        document.getElementById('warning-telefono').innerHTML = "";
        document.getElementById('warning-motivo').innerHTML = "";
        document.getElementById('warning-mensaje').innerHTML = "";

        if (nombre.trim() === "") {
            document.getElementById('warning-nombre').innerHTML = "*El campo 'Nombre' es obligatorio.";
            hasWarnings = true;
        }

        if (email.trim() === "") {
            document.getElementById('warning-email').innerHTML = "*El campo 'Email' es obligatorio.";
            hasWarnings = true;
        } else {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                document.getElementById('warning-email').innerHTML = "*El formato del 'Email' no es válido.";
                hasWarnings = true;
            }
        }

        if (telefono.trim() === "") {
            document.getElementById('warning-telefono').innerHTML = "*El campo 'Teléfono' es obligatorio.";
            hasWarnings = true;
        } else {
            const telefonoPattern = /^[0-9\s-]+$/; 
            if (!telefonoPattern.test(telefono)) {
                document.getElementById('warning-telefono').innerHTML = "*El formato del 'Teléfono' no es válido. Solo se permiten números, espacios y guiones.";
                hasWarnings = true;
            }
        }

        if (motivo.trim() === "") {
            document.getElementById('warning-motivo').innerHTML = "*Debe seleccionar un 'Motivo de contacto'.";
            hasWarnings = true;
        }

        if (mensaje.trim() === "") {
            document.getElementById('warning-mensaje').innerHTML = "*El campo 'Mensaje' es obligatorio.";
            hasWarnings = true;
        }

        if (hasWarnings) {
            event.preventDefault();
        }
    });
});