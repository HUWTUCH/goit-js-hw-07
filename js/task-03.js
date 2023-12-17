document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', function () {
        const trimmedValue = nameInput.value.trim();
        const outputText = trimmedValue === '' ? 'Anonymous' : trimmedValue;
        nameOutput.textContent = outputText;
    });
});