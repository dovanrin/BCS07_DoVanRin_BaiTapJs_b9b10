// Đối tượng, Thuộc tính nhân viên
function NhanVienVP(
  _taiKhoan,
  _hoTen,
  _eMail,
  _matKhau,
  _soNgayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.eMail = _eMail;
  this.matKhau = _matKhau;
  this.soNgayLam = _soNgayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tinhTongLuong = function () {
    if (this.chucVu == "Giám Đốc") {
      return this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng Phòng") {
      return this.luongCoBan * 2;
    } else if (this.chucVu == "Nhân Viên") {
      return this.luongCoBan;
    }
    return tinhTongLuong();
  };
  this.loaiNhanVien = function () {
    var gioLamNhanVien = this.gioLam;
    if (gioLamNhanVien < 160) {
      return "Nhân Viên Trung Bình";
    } else if (gioLamNhanVien < 176) {
      return "Nhân Viên Khá";
    } else if (gioLamNhanVien < 192) {
      return "Nhân Viên Giỏi";
    } else if (gioLamNhanVien >= 192) {
      return "Nhân Viên Xuất Sắc";
    }
  };
}
