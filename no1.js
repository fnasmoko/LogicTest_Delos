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

function fine (d1,m1,y1,d2,m2,y2){

    let output = 0
    
    if (1>d1 || d1>31 
      || 1>m1 || m1>12 
      || 1>y1 || y1>4000 
      || 1>d2 || d2>31 
      || 1>m2 || m2>12 
      || 1>y2 || y2>4000) return 'input incorrect'
    
    if (y2<y1 || (y2<y1 && m2<=m1)) return output
    if (y2>y1) {
      output = (y2-y1)*1200
      return output
    }
    if (m2>m1) {
      output = (m2-m1)*500
      return output
    }
    if (d2>d1) {
      output = (d2-d1)*15
      return output
    }
    return output
    }
    console.log(fine(7,6,2022,7,6,2020))
    console.log(fine(7,6,2022,7,6,2022))     // perbedaan tahun
    console.log(fine(7,6,2022,7,6,2024))
    
    console.log(fine(7,6,2022,3,6,2022))
    console.log(fine(7,6,2022,7,6,2022))      // perbedaan bulan
    console.log(fine(7,6,2022,10,6,2022))
    
    console.log(fine(7,6,2022,7,1,2022))
    console.log(fine(7,6,2022,7,6,2022))      // perbedaan tanggal
    console.log(fine(7,6,2022,7,10,2022))
    // =======================================================