let hasil;
function tambah(a,b){
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`);
}
function kurang(a,b){
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`);
}
function kali(a,b){
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil}`);
}
function bagi(a,b){
    hasil = a / b;
    alert(`${a} / ${b} = ${hasil}`);
}


    let operator = prompt("pilih operator (+,-,*,/):"); 
    let angka1 = parseFloat(prompt("masukkan angka pertama:"));
    let angka2 = parseFloat(prompt("masukkan angka kedua:"));

    if (operator == "+") {
        tambah(angka1,angka2);
    } 
    else if (operator == "-") {
        kurang(angka1,angka2);
    } 
    else if (operator == "*") {
        kali(angka1,angka2);
    } 
    else if (operator == "/") {
        bagi(angka1,angka2);
    } 
    else{
        alert('eror!!!');
    }