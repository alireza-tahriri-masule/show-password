// انتخاب تمام input هایی که نوع آنها password است
const passwordInputs = document.querySelectorAll('input[type="password"]');

// حلقه روی هر input
passwordInputs.forEach(input => {
    // زمانی که موس وارد input شد، نوع را به text تغییر بده
    input.addEventListener('mouseenter', () => {
        input.type = 'text';
    });

    // زمانی که موس از input خارج شد، نوع را به password برگردان
    input.addEventListener('mouseleave', () => {
        input.type = 'password';
    });
});
