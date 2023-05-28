// tạo mảng nhân viên
function themNhanVienRong() {
  ganGiaTriChoInput("", "", "", "", "", "", "", "", "");

  // document.querySelector(".sp-thongbao").style.display = "none";
  document.getElementById("tknv").readOnly = false;
  // taoGiaoDien();
}
var arrayNhanVien = [];
getStorrage();
taoGiaoDien();
function taoGiaoDien() {
  var content = "";
  for (var i = 0; i < arrayNhanVien.length; i++) {
    var nhanVien = new NhanVienVP();
    var nhanVienItem = arrayNhanVien[i];
    Object.assign(nhanVien, nhanVienItem);
    var tongLuong = nhanVien.tinhTongLuong();

    var xepLoai = nhanVien.loaiNhanVien();
    content += `
  <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.eMail}</td>
            <td>${nhanVien.soNgayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${tongLuong}</td>
            <td>${xepLoai}</td>
            <td>
              <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-danger ">
              <i class="fa-solid fa-trash-can"></i>
              </button>
              <button class="btn btn-success mx-1" data-toggle="modal"
              data-target="#myModal" onclick="nutCapNhatNhanVien('${nhanVien.taiKhoan}')">
              <i class="fa-solid fa-pen"></i>
              </button>
            
              </td>
            
          </tr>
  `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// Thêm nhân viên
function themNhanVien() {
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrayNhanVien.push(nhanVien);
    saveStorage(arrayNhanVien);
    taoGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  }
}

// Xóa nhân viên.
function xoaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);

  if (index != -1) {
    arrayNhanVien.splice(index, 1);
    saveStorage(arrayNhanVien);
    taoGiaoDien();
  }
}
// cập nhật lại, chỉnh sữa nhân viên nhân viên
function nutCapNhatNhanVien(taiKhoan) {
  // document.getElementById("btnCapNhatSV").style.display = "inline-block";
  // gán index bằng vị trí muốn tìm tới.
  var index = timViTriNhanVien(taiKhoan);

  var nhanVien = arrayNhanVien[index];
  // Hiển thị thông tin lên input khi bấm nút cập nhật nhỏ để chỉnh sửa:
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.eMail,
    nhanVien.matKhau,
    nhanVien.soNgayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
  document.getElementById("tknv").readOnly = true;
}
// hành động để vào chỉnh sửa
function capNhatThongTinNV() {
  var nhanVienChinhSua = layGiaTriInput();
  var index = timViTriNhanVien(nhanVienChinhSua.taiKhoan);
  // sau khi tìm đc vị trí index đang cần chỉnh sửa trong mảng, chúng ta sẽ thay giá trị đó bằng giá trị mới vừa được chỉnh sửa
  arrayNhanVien[index] = nhanVienChinhSua;
  saveStorage(arrayNhanVien);
  taoGiaoDien();
}
//  Tìm nhân viên theo xếp loại
var arrayNhanVienXepLoai = [];

function timKiemNhanVien() {
  var buttonTimKiem = document.getElementById("searchName").value;

  for (var i = 0; i <= arrayNhanVien.length; i++) {
    var nhanVien = new NhanVienVP();
    var nhanVienItem = arrayNhanVien[i];
    Object.assign(nhanVien, nhanVienItem);
    var xepLoai = nhanVien.loaiNhanVien();
    if (xepLoai == buttonTimKiem) {
      arrayNhanVienXepLoai.push(nhanVien);
    }
    // return arrayNhanVienXepLoai;
  }
  taoGiaoDienXepLoai();
}
function taoGiaoDienXepLoai() {
  var content = "";
  for (var i = 0; i < arrayNhanVienXepLoai.length; i++) {
    var nhanVien = new NhanVienVP();
    var nhanVienItem = arrayNhanVienXepLoai[i];
    Object.assign(nhanVien, nhanVienItem);
    var tongLuong = nhanVien.tinhTongLuong();

    var xepLoai = nhanVien.loaiNhanVien();
    content += `
  <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.eMail}</td>
            <td>${nhanVien.soNgayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${tongLuong}</td>
            <td>${xepLoai}</td>
            <td>
              <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-danger ">
              <i class="fa-solid fa-trash-can"></i>
              </button>
              <button class="btn btn-success mx-1" data-toggle="modal"
              data-target="#myModal" onclick="nutCapNhatNhanVien('${nhanVien.taiKhoan}')">
              <i class="fa-solid fa-pen"></i>
              </button>
            
              </td>
            
          </tr>
  `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
