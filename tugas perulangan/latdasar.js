// soal 1

// let N = prompt("Masukkan nilai N (>=1): ");
// N = parseInt(N);

// if (N >= 1) {
//   for (let i = 1; i <= N; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Nilai N harus lebih besar atau sama dengan 1.");
// }

// soal 2

// Input dari pengguna
// let batasAwal = parseInt(prompt("Masukkan batas awal (bilangan > 0):"));
// let batasAkhir = parseInt(prompt("Masukkan batas akhir (bilangan >= batas awal):"));

// // Validasi input
// if (batasAwal > 0 && batasAkhir >= batasAwal) {
//     for (let i = batasAwal; i <= batasAkhir; i++) {
//         console.log(i);
//     }
// } else {
//     console.log("Input tidak valid! Pastikan batasAwal <= batasAkhir dan batasAwal > 0.");
// }

// soal 3

// Input batas awal dan batas akhir
// let batasAwal = parseInt(prompt("Masukkan batas awal:"));
// let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));

// // Menggunakan do while loop
// do {
//     if (batasAwal % 2 !== 0) {
//         console.log(batasAwal);
//     }
//     batasAwal++;
// } while (batasAwal <= batasAkhir);

// soal 4

// let batasAwal = parseInt(prompt("Masukkan batas awal: "));
// let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));

// for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }