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

// tìm kiếm tiếng việt không dấu
// function xoa_dau(str) {
//   if (str === nul || str === undefined) {
//     return str;
//   }
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//   str = str.replace(/đ/g, "d");
//   str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
//   str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
//   str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
//   str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
//   str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
//   str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
//   str = str.replace(/Đ/g, "D");
//   return str;
// }
