/**
 * ARMY OF NIX - TERMINAL & LEAD FLOW CONTROL
 * Controla la lógica de la consola interactiva de escaneo y captación.
 */
document.addEventListener("DOMContentLoaded", () => {
    const stepInit = document.getElementById("step-init");
    const stepScanning = document.getElementById("step-scanning");
    const stepResult = document.getElementById("step-result");
    const stepSuccess = document.getElementById("step-success");

    const btnStartScan = document.getElementById("btn-start-scan");
    const targetInput = document.getElementById("target-input");
    const leadForm = document.getElementById("lead-form");
    const codeStream = document.getElementById("code-stream");

    const log1 = document.getElementById("log-1");
    const log2 = document.getElementById("log-2");
    const log3 = document.getElementById("log-3");

    let streamInterval;

    // Validación: Verificar que la vista actual contenga los elementos del escáner
    if (!btnStartScan || !leadForm) return;

    btnStartScan.addEventListener("click", () => {
        const value = targetInput.value.trim();
        if (!value) {
            alert("Please enter a valid target corporate domain or email.");
            return;
        }

        // Limpieza de nodos antes de reejecutar
        log1.textContent = "";
        log2.textContent = "";
        log3.textContent = "";
        codeStream.textContent = "";

        // Transición de la UI: Inicio -> Consola Activa
        stepInit.style.display = "none";
        stepScanning.style.display = "block";

        // Secuencia cronometrada de impresiones en consola
        setTimeout(() => { 
            log1.textContent = `> Initializing static network telemetry map on target: "${value}"...`; 
        }, 500);

        setTimeout(() => { 
            log2.textContent = `> Running syntactic penetration test blocks and local memory cache dumps...`; 
        }, 1500);

        setTimeout(() => { 
            log3.textContent = `> CRITICAL ALERT: 3 exposure vectors identified on remote surface. Evaluating payload breach impact...`; 
        }, 2600);

        // Generador de líneas de ensamblador en alta velocidad
        streamInterval = setInterval(() => {
            let fakeLines = [
                `MOV EAX, [ESP+4] | STACK_INTEGRITY_CHECK: PASS`,
                `TRYING EXPLOIT BUFFER_OVERFLOW ON LOGICAL PORT: ${Math.floor(Math.random()*65535)}... INJECTING`,
                `PAYLOAD STRIP TRIGGERED... PERMISSION_STATUS: 403 ACCESS DENIED`,
                `LOCAL_FINGERPRINT_HASH: SHA256-${Math.random().toString(36).substring(2,10).toUpperCase()}`
            ];
            codeStream.textContent = fakeLines[Math.floor(Math.random() * fakeLines.length)];
        }, 100);

        // Finalización del escaneo a los 4.2 segundos
        setTimeout(() => {
            clearInterval(streamInterval);
            stepScanning.style.display = "none";
            stepResult.style.display = "block";
        }, 4200);
    });

    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        stepResult.style.display = "none";
        stepSuccess.style.display = "block";
    });
});