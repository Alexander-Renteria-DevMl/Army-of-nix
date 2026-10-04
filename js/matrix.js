/**
 * ARMY OF NIX - RAIN MATRIX GRAPHIC ENGINE
 * Maneja de forma aislada la animación del canvas de fondo.
 */
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("cyber-matrix-canvas");
    if (!canvas) return; // Validación por si una vista no incluye el canvas

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const charset = "0123456789ABCDEF<>[]{}$_+=//X";
    const charArray = charset.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(43, 163, 69, 0.68)";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 33);
});
