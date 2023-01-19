// ==================================================================
// SOAL NO 3
// arr = [1, 3, 5, 4]
// 5 is between subarrays that sum to 4
// [1, 3, 5, 4] left: 1+3 and right: 4
// If the array can find the element that meets the criteria then returns YES, if no then return NO.


function sameSum (arrLength, arr){

      let output = "NO"

      if (1>arrLength || arrLength>10**5) return 'input incorrect'
      for (let m=0; m<arr.length; m++){
            if (arr[m] > 10**4) return 'input incorrect'
      }

      let batas = 1

      for (let k=0; k<arrLength-2; k++){

            let kiri = 0
            for (let i=0; i<batas; i++){
                  kiri = kiri + arr[i]
            }
            let kanan = 0
            for (let j=batas+1; j<arr.length; j++){
                  kanan = kanan + arr[j]
            }

            if (kiri == kanan) output = "YES"
            batas = batas + 1
            
      }
      return output
}

console.log(sameSum(5,[1,5,7,2,4]))
console.log(sameSum(4,[1,3,4,9]))
console.log(sameSum(5,[1,1,4,1,1]))
console.log(sameSum(4,[2,0,0,0]))
console.log(sameSum(4,[0,0,2,0]))
// ======================================================================