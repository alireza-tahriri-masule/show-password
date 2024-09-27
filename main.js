const passwordInputs = document.querySelectorAll('input[type="password"]');

passwordInputs.forEach(input => {
    input.addEventListener('mouseenter', () => {
        input.type = 'text';
    });

    input.addEventListener('mouseleave', () => {
        input.type = 'password';
    });
});
