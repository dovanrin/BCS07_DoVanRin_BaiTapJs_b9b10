// gán các thuộc tính trong bảng khai báo
function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  eMail,
  matKhau,
  soNgayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = eMail;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = soNgayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}
// tìm vị trí nhân viên qua tài khoản
function timViTriNhanVien(taiKhoan) {
  var viTri = -1;

  arrayNhanVien.forEach(function (item, index) {
    // item ở đây là 1 nhân viên nằm trong array arrayNhanVien nên mới chấm tới thuộc tính tài khoản
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}
//  Lấy giá trị input từ người dùng nhập

function layGiaTriInput() {
  // lấy giữ liệu người dùng
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _eMail = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _soNgayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  valid =
    kiemTraRong(_taiKhoan, "tbTKNV") &
    kiemTraRong(_hoTen, "tbTen") &
    kiemTraRong(_eMail, "tbEmail") &
    kiemTraRong(_matKhau, "tbMatKhau") &
    kiemTraRong(_soNgayLam, "tbNgay") &
    kiemTraRong(_luongCoBan, "tbLuongCB") &
    kiemTraRong(_chucVu, "tbChucVu") &
    kiemTraRong(_gioLam, "tbGiolam");
  valid &= kiemTraEmail(_eMail, "tbEmail");
  valid &= kiemTraDoDai(_taiKhoan, 4, 6, "tbTKNV");
  valid &= kiemTraDinhDang(_hoTen, "tbTen");
  valid &= checkPass(_matKhau, "tbMatKhau");
  valid &= kiemTraSoLuong(_luongCoBan, 1000000, 20000000, "tbLuongCB");
  valid &= kiemTraSoLuong(_gioLam, 80, 200, "tbGiolam");
  valid &= checkDate(_soNgayLam, "tbNgay");

  if (!valid) {
    return;
  }
  var nhanVien = new NhanVienVP(
    _taiKhoan,
    _hoTen,
    _eMail,
    _matKhau,
    _soNgayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}
//Lưu vào localstorge
function saveStorage(arrayNhanVien) {
  localStorage.setItem("arrayNhanVien", JSON.stringify(arrayNhanVien));
}

// Lấy giá trị từ local đã lưu lên lại trên web.
function getStorrage() {
  var localNhanVien = JSON.parse(localStorage.getItem("arrayNhanVien"));
  if (localNhanVien != null) {
    arrayNhanVien = localNhanVien;
  }
}

// Tìm nhân viên theo xếp loại
// function timViTriNhanVienA(loaiNhanVien) {
//   var viTri = -1;

//   arrayNhanVien.forEach(function (item, index) {
//     // item ở đây là 1 nhân viên nằm trong array arrayNhanVien nên mới chấm tới thuộc tính tài khoản
//     if (item.loaiNhanVien == loaiNhanVien) {
//       viTri = index;
//     }
//   });
//   return viTri;
// }
