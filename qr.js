function createQRCode(elementId, text, size = 200) {
    const element = document.getElementById(elementId);

    if (!element) {
        throw new Error(
            `QR element "${elementId}" was not found.`
        );
    }

    element.innerHTML = "";

    return new QRCode(element, {
        text: text,
        width: size,
        height: size,
        correctLevel: QRCode.CorrectLevel.M
    });
}
