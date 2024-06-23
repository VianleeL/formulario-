document.addEventListener('formulario'), () => {
    const form = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const fecha_nacimiento = document.getElementById('fecha_nacimiento');
    const cedula = document.getElementById('cedula');
    const celular = document.getElementById('celular');
    const correo = document.getElementById('correo');
    const genero = document.getElementById('genero');
    const alergias = document.getElementsByName('alergias[]');
    const internado = document.getElementsByName('internado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar nombre
    if (nombre.value.trim() === '') {
        alert('Por favor, ingrese su nombre');
        return;
    }

    // Validar fecha de nacimiento
    if (fechaNacimiento.value === '') {
        alert('Por favor, ingrese su fecha de nacimiento');
        return;
    }

    // Validar cédula
    if (cedula.value.trim() === '' || cedula.value.length < 10) {
        alert('Por favor, ingrese su cédula válida');
        return;
    }

    // Validar número de celular
    if (celular.value.trim() === '' || celular.value.length < 10) {
        alert('Por favor, ingrese su número de celular válido');
        return;
    }

    // Validar correo electrónico
    if (correo.value.trim() === '' ||!validarCorreo(correo.value)) {
        alert('Por favor, ingrese su correo electrónico válido');
        return;
    }

    // Validar género
    if (genero.value === '') {
        alert('Por favor, seleccione su género');
        return;
    }

    // Validar alergias
    let alergiasSeleccionadas = [];
    for (let i = 0; i < alergias.length; i++) {
        if (alergias[i].checked) {
            alergiasSeleccionadas.push(alergias[i].value);
        }
    }
    if (alergiasSeleccionadas.length === 0) {
        alert('Por favor, seleccione al menos una alergia');
        return;
    }

    // Validar internado
    if (internado[0].checked === false && internado[1].checked === false) {
        alert('Por favor, seleccione si ha estado internado o no');
        return;
    }
})
}
function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
};
