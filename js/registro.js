document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terminos = document.getElementById('terminos').checked;
        
        if (!nombre || !apellidos || !correo || !password || !confirmPassword) {
            alert('Por favor complete todos los campos');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        if (password.length < 4 || password.length > 12) {
            alert('La contraseña debe tener entre 4 y 12 caracteres');
            return;
        }
        
        if (!terminos) {
            alert('Debe aceptar los términos y condiciones');
            return;
        }
        
        window.location.href = 'LogEcogarzones.html';
    });
});