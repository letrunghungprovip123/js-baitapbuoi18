arr = [];

function soNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

document.getElementById("btn1").onclick = function () {
  let num = document.getElementById("themPhanTu").value * 1;
  if (Number.isInteger(num)) {
    arr.push(num);
  } else {
    arr.push(0);
  }
  document.querySelector("#ketqua1").innerHTML = `arr = [${arr}]`;
};
document.getElementById("btn2").onclick = function () {
  let sum = 0;
  for (let i of arr) {
    if (i > 0) {
      sum += i;
    }
  }
  document.querySelector(
    "#ketqua2"
  ).innerHTML = `Tổng của các số dương trong mảng: ${sum}`;
};

document.getElementById("btn3").onclick = function () {
  let count = 0;
  for (let i of arr) {
    if (i > 0) count++;
  }
  document.querySelector(
    "#ketqua3"
  ).innerHTML = `Tổng số dương trong mảng là : ${count}`;
};

document.getElementById("btn4").onclick = function () {
  let arr2 = arr.slice();
  let tmp = 0;
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[0] > arr2[i]) {
      tmp = arr2[i];
      arr2[i] = arr2[0];
      arr2[0] = tmp;
    }
  }
  document.querySelector(
    "#ketqua4"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${arr2[0]}`;
};

document.getElementById("btn5").onclick = function () {
  let arr2 = arr.slice();
  let count = 0;
  for (let i of arr2) {
    if (i > 0) count++;
  }
  if (count > 0) {
    let tmp = 0;
    let i = 1;
    if (arr2[0] <= 0) {
      for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] > 0) {
          tmp = arr2[i];
          arr2[i] = arr2[0];
          arr2[0] = tmp;
        }
      }
    }
    while (i < arr2.length) {
      if (arr2[0] > arr2[i] && arr2[i] > 0) {
        tmp = arr2[i];
        arr2[i] = arr2[0];
        arr2[0] = tmp;
        i++;
      } else {
        i++;
      }
    }
    document.querySelector(
      "#ketqua5"
    ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${arr2[0]}`;
  } else {
    document.querySelector(
      "#ketqua5"
    ).innerHTML = `Không có số dương trong mảng`;
  }
};

document.getElementById("btn6").onclick = function () {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) pos = i;
  }
  if (pos != -1)
    document.querySelector(
      "#ketqua6"
    ).innerHTML = `Số chẵn cuối cùng trong mảng là : ${arr[pos]}`;
  else
    document.querySelector(
      "#ketqua6"
    ).innerHTML = `Số chẵn cuối cùng trong mảng là : ${pos}`;
};
document.getElementById("btn7").onclick = function () {
  let vt1 = document.getElementById("viTri1").value * 1;
  let vt2 = document.getElementById("viTri2").value * 1;
  document.querySelector(
    "#ketqua7"
  ).innerHTML = `Mảng trước khi đổi : ${arr} </br>`;
  let tmp = arr[vt2];
  arr[vt2] = arr[vt1];
  arr[vt1] = tmp;
  document.querySelector("#ketqua7").innerHTML += `Mảng sau khi đổi : ${arr}`;
};

document.getElementById("btn8").onclick = function () {
  document.querySelector(
    "#ketqua8"
  ).innerHTML = `Mảng trước khi sắp xếp : ${arr} </br>`;
  for (let i = 1; i < arr.length; i++) {
    let last = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
  }
  document.querySelector(
    "#ketqua8"
  ).innerHTML += `Mảng sau khi sắp xếp : ${arr}`;
};

document.getElementById("btn9").onclick = function () {
  pos = -1;
  for (i in arr) {
    if (soNguyenTo(arr[i])) {
      pos = i;
      break;
    }
  }
  if (pos == -1)
    document.querySelector(
      "#ketqua9"
    ).innerHTML = `Số nguyên tố đầu tiên là : ${pos}`;
  else
    document.querySelector(
      "#ketqua9"
    ).innerHTML = `Số nguyên tố đầu tiên là : ${arr[pos]}`;
};

arr2 = [];
document.getElementById("btn10").onclick = function () {
  let count = 0;
  let soThuc = document.getElementById("mangThuc").value * 1;
  arr2.push(soThuc);
  document.querySelector("#ketqua10").innerHTML = `arr = [${arr2}]`;
};

document.getElementById("btn11").onclick = function () {
  let count = 0;
  for (let i of arr2) {
    if (Number.isInteger(i)) count++;
  }
  document.querySelector(
    "#ketqua11"
  ).innerHTML = `Tổng số nguyên có trong mảng thực trên là : ${count}`;
};

document.getElementById("btn12").onclick = function () {
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i of arr) {
    if (i > 0) cnt1++;
    if (i < 0) cnt2++;
  }

  if (cnt1 > cnt2)
    document.querySelector("#ketqua12").innerHTML = `Số dương nhiều hơn số âm`;
  else if (cnt1 < cnt2)
    document.querySelector("#ketqua12").innerHTML = `Số âm nhiều hơn số dương`;
  else document.querySelector("#ketqua12").innerHTML = `Số Dương bằng số âm`;
};
