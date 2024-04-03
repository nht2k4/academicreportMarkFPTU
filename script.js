const maSinhVienInput = document.getElementById("ma-sinh-vien");
const btnCheckDiem = document.getElementById("btn-check-diem");
const ketQuaElement = document.getElementById("ket-qua");
const btnXemChiTiet = document.getElementById("btn-xem-chi-tiet");
const anhSinhVien = document.getElementById("anh-sinh-vien");

btnCheckDiem.addEventListener("click", function () {
    const maSinhVien = maSinhVienInput.value;

    if (maSinhVien === "SE180669") {
        ketQuaElement.classList.add("active");
    } else {
        alert("Mã sinh viên không hợp lệ!");
    }
});

btnXemChiTiet.addEventListener("click", function () {
    anhSinhVien.classList.add("active");
});

// Thu nhỏ logo FPT 1/3
const logo = document.querySelector(".logo img");
logo.style.width = "50%";

// Tăng kích thước ô nhập mã sinh viên 3 lần
maSinhVienInput.style.fontSize = "54px";
maSinhVienInput.style.width = "350px";
