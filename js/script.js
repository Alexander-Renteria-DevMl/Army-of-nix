document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. RAIN MATRIX GRAPHIC ENGINE (Neon Green Theme) ---
    const canvas = document.getElementById("cyber-matrix-canvas");
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
        ctx.fillStyle = "rgba(3, 4, 4, 0.06)"; // Trail effect matching new palette
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(57, 255, 20, 0.22)"; // Pure logo neon color green
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


    // --- 2. SYNCHRONOUS TERMINAL AND LEAD FLOW CONTROL ---
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

    btnStartScan.addEventListener("click", () => {
        const value = targetInput.value.trim();
        if (!value) {
            alert("Please enter a valid target corporate domain or email.");
            return;
        }

        // Clear layout nodes for clean re-execution states
        log1.textContent = "";
        log2.textContent = "";
        log3.textContent = "";
        codeStream.textContent = "";

        // UI Transits from Welcome Screen -> Active Console Simulation
        stepInit.style.display = "none";
        stepScanning.style.display = "block";

        // Step-by-step console print sequence
        setTimeout(() => { log1.textContent = `> Initializing static network telemetry map on target: "${value}"...`; }, 500);
        setTimeout(() => { log2.textContent = `> Running syntactic penetration test blocks and local memory cache dumps...`; }, 1500);
        setTimeout(() => { log3.textContent = `> CRITICAL ALERT: 3 exposure vectors identified on remote surface. Evaluating payload breach impact...`; }, 2600);

        // Raw fast assembly memory logs generator inside the console frame
        streamInterval = setInterval(() => {
            let fakeLines = [
                `MOV EAX, [ESP+4] | STACK_INTEGRITY_CHECK: PASS`,
                `TRYING EXPLOIT BUFFER_OVERFLOW ON LOGICAL PORT: ${Math.floor(Math.random()*65535)}... INJECTING`,
                `PAYLOAD STRIP TRIGGERED... PERMISSION_STATUS: 403 ACCESS DENIED`,
                `LOCAL_FINGERPRINT_HASH: SHA256-${Math.random().toString(36).substring(2,10).toUpperCase()}`
            ];
            codeStream.textContent = fakeLines[Math.floor(Math.random() * fakeLines.length)];
        }, 100);

        // CRITICAL FIX: Terminal stops and immediately enables the Diagnostic Report Component after exactly 4.2s
        setTimeout(() => {
            clearInterval(streamInterval);
            stepScanning.style.display = "none";
            
            // This displays the "Preliminary diagnostic completed" alert box frame natively
            stepResult.style.display = "block"; 
        }, 4200);
    });

    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        stepResult.style.display = "none";
        stepSuccess.style.display = "block";
    });
});