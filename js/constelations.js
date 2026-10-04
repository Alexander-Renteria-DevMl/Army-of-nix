/**
 * ARMY OF NIX - PARTICLE CONSTELLATION ENGINE
 * Genera una red de nodos interactivos que se unen al cursor.
 */
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("cyber-matrix-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width, height;
    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Rastreo de posición del mouse
    const mouse = {
        x: null,
        y: null,
        radius: 180 // Distancia de atracción/conexión con el cursor
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Clase para representar cada nodo/partícula
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8; // Velocidad X
            this.vy = (Math.random() - 0.5) * 0.8; // Velocidad Y
            this.radius = 2; // Tamaño del punto
        }

        update() {
            // Rebote en bordes de la pantalla
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            this.x += this.vx;
            this.y += this.vy;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(57, 255, 20, 0.8)"; // Verde neón
            ctx.fill();
        }
    }

    // Densidad de nodos basada en el tamaño de la pantalla
    const particleCount = Math.floor((width * height) / 12000);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Bucle principal de animación
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Fondo semi-transparente para acoplarse a la paleta oscura
        ctx.fillStyle = "rgba(3, 4, 4, 1)";
        ctx.fillRect(0, 0, width, height);

        // 1. Actualizar y dibujar partículas
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // 2. Conectar partículas entre sí (red neuronal/constelación)
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 120; // Distancia máxima para trazar línea entre nodos

                if (dist < maxDist) {
                    const alpha = 1 - (dist / maxDist);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(57, 255, 20, ${alpha * 0.25})`; // Opacidad según distancia
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            // 3. Conectar partículas con el cursor si está presente
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const alpha = 1 - (dist / mouse.radius);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(57, 255, 20, ${alpha * 0.6})`; // Resplandor mayor al mouse
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});
