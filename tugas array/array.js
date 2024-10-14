// soal 1

// function rataRata(arr) {
//     if (arr.length === 0) return 0; // Cek jika array kosong

//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }

//     return total / arr.length;
// }


// let angka = [2.5, 3.3, 4.7, 4.2];
// console.log(rataRata(angka));

// soal 2

// function sortArray(arr) {
//     // Menggunakan metode sort() dan membandingkan elemen dengan fungsi komparator
//     return arr.slice().sort((a, b) => a - b);
//   }
  
//   // Contoh penggunaan
//   let numbers = [3.5, 1.2, 4.8, 2.9, 0.5];
//   let sortedNumbers = sortArray(numbers);
  
//   console.log(sortedNumbers); //

// soal nomer 3

// function findMax(arr) {
//     return Math.max(...arr);
//   }
  
  
//   let numbers = [5.9, 1.2, 4.8, 2.9, 0.5];
//   let maxNumber = findMax(numbers);
  
//   console.log(maxNumber);

// soal nomer 4
// function fibonacciSeries(n) {
//     let fib = [0, 1]; 
    
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2]; 
//     }
  
//     return fib.slice(0, n); 
//   }
  
//   let n = 10;
//   let fibonacci = fibonacciSeries(n);
  
//   console.log(fibonacci);