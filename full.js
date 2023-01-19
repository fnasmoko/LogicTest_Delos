// =============================================================
// SOAL NO 1
// expected return => d1, m1, y1 = 15,8,2022
// book return => d2, m2, y2 = 22,8,2022

// If the book is returned on or before due time, then no fine (0)
// If the book is returned after the expected return day but still on the same month and year 
      // then the fine will be 15 for each day it is late. (if 3 days then will be 45 because 3 * 15)
// If the book is returned after the return month but still in the same year then the fine will be 
      // 500 for each month it is late.
// If the book is returned after expected year then there will be a fixed fine of 12000

// fine late 
// 15/day
// 500/month
// 1200/year

// function fine (d1,m1,y1,d2,m2,y2){

// let output = 0

// if (1>d1 || d1>31 
//   || 1>m1 || m1>12 
//   || 1>y1 || y1>4000 
//   || 1>d2 || d2>31 
//   || 1>m2 || m2>12 
//   || 1>y2 || y2>4000) return 'input incorrect'

// if (y2<y1 || (y2<y1 && m2<=m1)) return output
// if (y2>y1) {
//   output = (y2-y1)*1200
//   return output
// }
// if (m2>m1) {
//   output = (m2-m1)*500
//   return output
// }
// if (d2>d1) {
//   output = (d2-d1)*15
//   return output
// }
// return output
// }
// console.log(fine(7,6,2022,7,6,2020))
// console.log(fine(7,6,2022,7,6,2022))     // perbedaan tahun
// console.log(fine(7,6,2022,7,6,2024))

// console.log(fine(7,6,2022,3,6,2022))
// console.log(fine(7,6,2022,7,6,2022))      // perbedaan bulan
// console.log(fine(7,6,2022,10,6,2022))

// console.log(fine(7,6,2022,7,1,2022))
// console.log(fine(7,6,2022,7,6,2022))      // perbedaan tanggal
// console.log(fine(7,6,2022,7,10,2022))
// =======================================================

// ======================================================
// SOAL NO 2

// function sourCandy (student, candies, firstStudent){

// if (1>student|| student>10**9 
//   || 1>candies || candies>10**9 
//   || 1>firstStudent || firstStudent>student
// ) return 'input incorrect'

// let output = 0

// while (student < candies) {
//   candies = candies - student
// }

// output = candies+firstStudent-1

// if (output>student) output = output - student

// return output

// }

// console.log(sourCandy(3,5,2))
// console.log(sourCandy(5,3,1))
// console.log(sourCandy(352926151,380324688,94730870))

// ==================================================================

// ==================================================================
// SOAL NO 3
// arr = [1, 3, 5, 4]
// 5 is between subarrays that sum to 4
// [1, 3, 5, 4] left: 1+3 and right: 4
// If the array can find the element that meets the criteria then returns YES, if no then return NO.


// function sameSum (arrLength, arr){

//       let output = "NO"

//       if (1>arrLength || arrLength>10**5) return 'input incorrect'
//       for (let m=0; m<arr.length; m++){
//             if (arr[m] > 10**4) return 'input incorrect'
//       }

//       let batas = 1

//       for (let k=0; k<arrLength-2; k++){

//             let kiri = 0
//             for (let i=0; i<batas; i++){
//                   kiri = kiri + arr[i]
//             }
//             let kanan = 0
//             for (let j=batas+1; j<arr.length; j++){
//                   kanan = kanan + arr[j]
//             }

//             if (kiri == kanan) output = "YES"
//             batas = batas + 1
            
//       }
//       return output
// }

// console.log(sameSum(5,[1,5,7,2,4]))
// console.log(sameSum(4,[1,3,4,9]))
// console.log(sameSum(5,[1,1,4,1,1]))
// console.log(sameSum(4,[2,0,0,0]))
// console.log(sameSum(4,[0,0,2,0]))
// ======================================================================