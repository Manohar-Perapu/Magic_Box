// To Generate random Magic square Gride in JAVASCRIPT
//.This function is to genarate a basic grid
function MagicSquare(Matrix){
    console.log("-----------")
      for (let i=0;i<Matrix.length;i++){
          let row = Matrix[i]
          let rowString = ""
          for (let j =0;j<row.length; j++){
              rowString += (" | " + row[j] + " ")
          }
          console.log(rowString + "| ")
          if (i == (Matrix.length-1)){
              console.log("-----------")
          }
          else{
              console.log("----+---+---")
          }
      }
}
// To Generate a random arrray
 function randomArray()
 {
 function newArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

          //Interchanging the elements in an array
          let k =  array[j]
          array[j] = array[i]
          array[i] = k
    }
}
// Numbers contains in a matrix 
let arrayvalues = [1,2,3,4,5,6,7,8,9]
let magicsq=[]
for (let i = 0; i<3; i++){
    magicsq[i]=[]
    for (let j = 0; j < 3; j++) {
    magicsq[i][j] = arrayvalues[i * 3 + j]
  }
}
return magicsq
 }
 // To maintain no iteration lets add count 
 let count= 0
 // verifying the generated matrix is Magic Square or not.
 function run()
{

  while(true)
    {
    let Array1=randomArray()
    let row1=Array1[0][0] + Array1[0][1] + Array1[0][2]
    let row2=Array1[1][0] + Array1[1][1] + Array1[1][2]
    let row3=Array1[2][0] + Array1[2][1] + Array1[2][2]
    let col1=Array1[0][0] + Array1[1][0] + Array1[2][0]
    let col2=Array1[0][1] + Array1[1][1] + Array1[2][1]
    let col3=Array1[0][2] + Array1[1][2] + Array1[2][2] 
    let dia1=Array1[0][0] + Array1[1][1] + Array1[2][2]
    let dia2=Array1[0][2] + Array1[1][1] + v[2][0]
    if(col1 === col2 && col2 === col3 && row1 === row2 && row2 === row3 && dia1 === dia2)
        {
          return Array1
          break
        }
    count++                       
   }
}
MagicSquare(run())
console.log(`The magic square is generated in ${count}th time`)


