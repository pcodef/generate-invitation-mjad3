function generarInvitacion() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const lugar = document.getElementById('lugar').value;

    // Obtener el lienzo (canvas) de la imagen
    const canvas = document.createElement('canvas');
    const img = document.getElementById('invitacion-template');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    // Estilos del texto
    ctx.font = '40px Arial'; // Ajusta la fuente y tamaño
    ctx.fillStyle = 'black'; // Ajusta el color del texto
    ctx.textAlign = 'left';

    // Posiciones del texto (ajusta según tu diseño)
    const xNombre = 252;
    const yNombre = 680;
    const xFecha = 252;
    const yFecha = 1050;
    const xHora = 252;
    const yHora = 1110;
    const xLugar = 252;
    const yLugar = 1170;

    // Escribir el texto en la imagen
    ctx.fillText(nombre, xNombre, yNombre);
    ctx.fillText(fecha, xFecha, yFecha);
    ctx.fillText(hora, xHora, yHora);
    ctx.fillText(lugar, xLugar, yLugar);

    // Convertir el canvas a imagen PNG
    const dataURL = canvas.toDataURL('image/png');

    // Descargar la imagen
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'invitacion.png';
    link.click();
}