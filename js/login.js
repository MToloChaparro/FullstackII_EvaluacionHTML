document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        if (username === 'admin' && password === 'admin123') {
            window.location.href = 'adminEcogarzones.html';
        } else if (username && password) {
            window.location.href = 'indexUser_ecogarzones.html';
        } else {
            alert('Por favor complete todos los campos');
        }
    });
});