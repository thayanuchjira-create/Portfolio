// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myForm");
    if (form) {
        form.onsubmit = validateRegister;
    }
}
// เป็นตัวดักจับว่ากดปุ่มส่งฟอร์มยัง เพื่อส่งต่อให้ Valid ตรวจข้อมูล
function validateRegister(event) {
    if (event) event.preventDefault();
    const firstname = document.forms["myForm"]["firstname"].value;
    const lastname = document.forms["myForm"]["lastname"].value;
    const email = document.forms["myForm"]["email"].value;
    const username = document.forms["myForm"]["username"].value;
    const password = document.forms["myForm"]["password"].value;
    const retypePassword = document.forms["myForm"]["retypePassword"].value;

    // 1. ตรวจสอบว่ากรอกข้อมูลช่องบังคับครบหรือไม่
    if (!firstname || !lastname || !email || !username || !password || !retypePassword) {
        alert("กรุณากรอกข้อมูลในช่องที่มี * ให้ครบถ้วน");
        if (event) event.preventDefault(); // ไม่ให้เปลี่ยนหน้าจนกว่าจะถูก
        return false;
    }

    // 2. ตรวจสอบว่ารหัสผ่านและช่องยืนยันรหัสผ่านตรงกันหรือไม่
    if (password !== retypePassword) { // ดูว่ารหัสตรงกันมั้งทั้งสองอัน
        alert("รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่");
        if (event) event.preventDefault();
        return false;
    }

    // 3. บันทึกข้อมูลลงใน localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("ลงทะเบียนสำเร็จ!");
    window.location.href = "login.html";
    return false;
}