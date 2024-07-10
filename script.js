function encriptar() {
    const inputText = document.getElementById('input-text').value;
    const shift = 3; // Número de posiciones a desplazar
    const outputText = document.getElementById('output-text');

    if (inputText.trim() === '') {
        alert('Ingrese el texto a encriptar');
        return;
    }

    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        // Solo encriptar letras minúsculas (a-z)
        if (char >= 97 && char <= 122) {
            char = ((char - 97 + shift) % 26) + 97;
        }

        encryptedText += String.fromCharCode(char);
    }

    outputText.textContent = encryptedText;
    mostrarResultado();
}

function desencriptar() {
    const inputText = document.getElementById('input-text').value;
    const shift = 3; // Número de posiciones a desplazar
    const outputText = document.getElementById('output-text');

    if (inputText.trim() === '') {
        alert('Ingrese el texto a desencriptar');
        return;
    }

    let decryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        // Solo desencriptar letras minúsculas (a-z)
        if (char >= 97 && char <= 122) {
            char = ((char - 97 - shift + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(char);
    }

    outputText.textContent = decryptedText;
    mostrarResultado();
}

function mostrarResultado() {
    document.querySelector('.output-placeholder').style.display = 'none';
    document.getElementById('output-text').style.display = 'block';
    document.querySelector('button.copy').style.display = 'block';
}

function copiarTexto() {
    const outputText = document.getElementById('output-text');
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

