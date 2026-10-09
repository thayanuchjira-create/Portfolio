// =============================================================================
// MDT312 Assignment 7 - Square Game
// ใช้ DOM, Event, Loop และ Timer
// =============================================================================
window.onload = pageLoad;

let timer = null;

function pageLoad() {

    const startBtn = document.getElementById("start");
    startBtn.onclick = startGame;

    // หากล่องแม่ที่ใช้เก็บ square
    const gameLayer = document.getElementById("layer");
    gameLayer.onclick = function(event) {

        // เช็คว่าตัวที่คลิกเป็น square หรือไม่
        if (event.target.classList.contains("square")) {
            event.target.remove();
        }
    };
}

function startGame() {

    alert("Ready");
    clearScreen();
    addBox();
    timeStart();
}

function timeStart() {

    const TIMER_TICK = 1000;

    // ถ้ามี Timer เก่าอยู่ ให้หยุดก่อน
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }

    const min = 0.1;
    let second = min * 60;

    // Element ที่ใช้แสดงเวลา
    const clockDisplay = document.getElementById("clock");

    // แสดงเวลาเริ่มต้น
    clockDisplay.textContent = second;

    // เรียก timeCount() ซ้ำทุก 1 วินาที
    timer = setInterval(timeCount, TIMER_TICK);


    // ตรวจสถานะเกมทุก 1 วินาที
    function timeCount() {

        const allbox = document.querySelectorAll("#layer div");

        // ถ้ากล่องหมด และเวลายังเหลือ = ชนะ
        if (allbox.length === 0 && second > 0) {

            alert("You win!");

            // หยุด Timer
            clearInterval(timer);
            timer = null;

            // ล้างเวลาบนหน้าจอ
            clockDisplay.textContent = "";
        }

        else if (second <= 0) {
            alert("Game over");

            // หยุด Timer
            clearInterval(timer);
            timer = null;
            clearScreen();
            clockDisplay.textContent = "";
        }
        // ถ้ายังเล่นอยู่ ให้ลดเวลาลงทีละ 1 วินาที
        else {
            second--;

            // แสดงเวลาที่เหลือ
            clockDisplay.textContent = second;
        }
    }
}

function addBox() {

    // อ่านจำนวนกล่องจาก input และแปลงเป็นตัวเลข
    const numbox =
        parseInt(document.getElementById("numbox").value) || 0;

    const gameLayer =
        document.getElementById("layer");

    // อ่านสีที่ผู้ใช้เลือกจาก dropdown
    const colorDrop =
        document.getElementById("color").value;

    // วนสร้างกล่องตามจำนวนที่ผู้ใช้กรอก
    for (let i = 0; i < numbox; i++) {

        // สร้าง div ใหม่ 1 ตัว
        const tempbox =
            document.createElement("div");

        tempbox.className =
            "square " + colorDrop;

        tempbox.id =
            "box" + i;

        tempbox.style.left =
            Math.random() * Math.max(0, gameLayer.clientWidth - 25) + "px";

        tempbox.style.top =
            Math.random() * Math.max(0, gameLayer.clientHeight - 25) + "px";

        // เพิ่ม square เข้าไปใน layer
        gameLayer.appendChild(tempbox);
    }
}

function clearScreen() {

    const allbox =
        document.querySelectorAll("#layer div");

    for (let i = 0; i < allbox.length; i++) {
        allbox[i].remove();
    }
}