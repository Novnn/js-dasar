function findlargestnumber() {
    let x = parseFloat(prompt('bilanganX'));
    let y = parseFloat(prompt('bilanganY'));

    if (x > y) {
        alert("Bilangan terbesar adalah x: " + x);
    } else if (y > x) {
        alert("Bilangan terbesar adalah y: " + y);
    } else {
        alert( "Kedua bilangan sama besar.");
    }
}

findlargestnumber();