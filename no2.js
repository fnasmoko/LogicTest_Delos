// ======================================================
// SOAL NO 2

// student = 3
// candies = 5
// first student = 2
// The distribution of candies starts from student 2 and the students will be arranged from 1 to 3. 
// So the candy distribution will be 2,3,1,2,3. The student who will get the sour candy is student 3.

function sourCandy (student, candies, firstStudent){

if (1>student|| student>10**9 
  || 1>candies || candies>10**9 
  || 1>firstStudent || firstStudent>student
) return 'input incorrect'

let output = 0

while (student < candies) {
  candies = candies - student
}

output = candies+firstStudent-1

if (output>student) output = output - student

return output

}

console.log(sourCandy(3,5,2))
console.log(sourCandy(5,3,1))
console.log(sourCandy(352926151,380324688,94730870))

// ==================================================================
