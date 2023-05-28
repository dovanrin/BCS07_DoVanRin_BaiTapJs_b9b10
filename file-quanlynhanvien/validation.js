function kiemTraRong(checkInput, idThongBao) {
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Nhập dữ liệu vào";
    return false;
  }
}
function kiemTraEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var checkEmail = regexEmail.test(checkInput);
  if (checkEmail) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng Email";
    return false;
  }
}
function kiemTraDoDai(checkInput, min, max, idThongBao) {
  var doDai = checkInput.length;
  if (doDai >= min && doDai <= max) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng";
    return false;
  }
}
// Kiểm tra nhập vào.
function kiemTraSoLuong(checkInput, min, max, idThongBao) {
  var soLuong = checkInput;
  if (soLuong >= min && soLuong <= max) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idThongBao
    ).innerHTML = `Vui lòng nhập đúng số từ ${min} đến ${max}`;
    return false;
  }
}
// chỉ được nhập chữ
function kiemTraDinhDang(checkInput, idThongBao) {
  var regexTen = /^[\p{L} ]+$/u;
  var checkTen = regexTen.test(checkInput);
  if (checkTen) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng";
    return false;
  }
}
function checkPass(checkInput, idThongBao) {
  var regexpass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  var checkPassword = regexpass.test(checkInput);
  if (checkPassword) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng: có 6-10 ký tự. 1 in hoa, 1 số, và 1 ký tự đặt biệt";
    return false;
  }
}
// Kiểm tra date
function checkDate(checkInput, idThongBao) {
  var regexDate =
    /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
  var checkNgay = regexDate.test(checkInput);
  if (checkNgay) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng.";
    return false;
  }
}
