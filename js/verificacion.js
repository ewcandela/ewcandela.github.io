function validateForm() {
    const requiredInputs = document.querySelectorAll('[aria-required="true"]');
    let isValid = true;
    let errorMessages = [];

    requiredInputs.forEach(element => {
        let fieldName = element.previousElementSibling?.textContent || 'Campo';
        
        if (element.tagName === 'INPUT') {
            switch(element.type) {
                case 'text':
                    if (!element.value.trim()) {
                        errorMessages.push(`${fieldName} es requerido`);
                        isValid = false;
                    }
                    break;
                case 'number':
                    if (!element.value) {
                        errorMessages.push(`${fieldName} es requerido`);
                        isValid = false;
                    }
                    break;
                case 'checkbox':
                    if (!element.checked) {
                        errorMessages.push(`Por favor, recuerda aceptar ${fieldName}`);
                        isValid = false;
                    }
                    break;
            }
        } else if (element.tagName === 'SELECT') {
            if (element.value === '-') {
                errorMessages.push('Por favor, seleccione su problema.');
                isValid = false;
            }
        } else if (element.tagName === 'TEXTAREA') {
            if (!element.value.trim()) {
                errorMessages.push('Por favor, describa su problema con más detalle.');
                isValid = false;
            }
        }
    });

    const emailInput = document.querySelector('[name="request_mail"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errorMessages.push('El formato del correo electrónico no es válido.');
            isValid = false;
        }
    }

    const phoneInput = document.querySelector('[name="request_number"]');
    if (phoneInput && phoneInput.value) {
        if (phoneInput.value.length < 8 || phoneInput.value.length > 15) {
            errorMessages.push('El número de teléfono debe tener entre 8 y 15 dígitos.');
            isValid = false;
        }
    }

    // Mostrar mensajes en la consola
    if (!isValid) {
        console.log('Errores encontrados: ');
        errorMessages.forEach(message => console.log(`- ${message}`));
    } else {
        console.log('El formulario es válido.');
    }

    return isValid;
}

document.querySelector('form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});