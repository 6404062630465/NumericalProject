// import React, { useState } from "react"
// import { Table } from "react-bootstrap"

// import math from "mathjs"
// import { create, all } from 'mathjs'

// const G3 = () =>{
//     const [N, setN] = useState([])
//     const [B, setB] = useState([])
//     const [Ismatrix, setIsmatrix] = useState([])
//     const [Ismatrix2, setIsmatrix2] = useState([])
//     const [ans, setAns] = useState(0)

//     let creatMatrix = (event) => {
//         setN(event.target.value)
//         var array = [[]]
//         for (let i = 0; i < Number(event.target.value); i++) {
//             array[i] = []
//             for (let j = 0; j < Number(event.target.value)+1; j++) {
//                 array[i][j] = `${i}${j}`
//             }
//             setIsmatrix(array)
//         }
//     }
//     let creatMatrix2 = (event) => {
//         setB(event.target.value)
//         var array = [[]]
//         for (let i = 0; i < Number(event.target.value); i++) {
//             array[i] = []
//             for (let j = 0; j < 1; j++) {
//                 array[i][j] = `${i}${j}`
//             }
//             setIsmatrix2(array)
//         }
//     }
//     const Recordvarmatrix = (Isrow, Iscol, event) => {
//         Ismatrix[Isrow][Iscol] = Number(event.target.value)
//     }
//     const Recordvarmatrix2 = (Isrow2, Iscol2, event) => {
//         Ismatrix2[Isrow2][Iscol2] = Number(event.target.value)
//     }
//     let calcarmerCal = () => { //เก็บinput
//         var array = [[]] //ใช้เก็บค่าที่inputเข้ามา
//         for (let i = 0; i < Number(N); i++) { //ให้iรันตามจำนวนตัวเลขที่inputเข้ามา
//             array[i] = [] //เก็บค่าiใส่Array
//             for (let j = 0; j < Number(N) + 1; j++) {
//                 array[i][j] = Number(document.getElementById("" + i + j).value) //เก็บค่าตัวแปรที่inputเข้ามา
//                 // console.log(array[i][j])
//             }
//         }
//         let i = 0, j = 0  //คำนวณตามสูตร
//         let x = []
//         let k = 0
//         for (k = 0; k < Number(N); k++) { //0 1 2
//             for (i = k + 1; i < Number(N); i++) { //1 2
//                 for (j = k + 1; j <= Number(N); j++) { //11 22 33
//                     array[i][j] = array[i][j] * array[k][j] // 11 = temp*01 = 2* = 1
//                 }
//             }
//         }
//         for (i = Number(N) - 1; i >= 0; i--) { //2 1 0 //คำนวณตามสูตร
//             x[i] = array[i][Number(N)] //x[2] = 
//             for (j = i + 1; j < Number(N); j++) {
//                 x[i] = x[i] - array[i][j] * x[j]
//             }
//             x[i] = x[i] / array[i][i]
//         }
//         let ans = [] //คำตอบ
//         for (i = 2; i < Number(N); i++) {
//             ans.push(<div>x={x[i].toFixed(6)}</div>) //ส่งคำตอบไปหน้าเว็บ
//         }
//         setAns(ans) //ดึงค่าคำตอบออกมา
//         var Ainv =[]
//         var X = []
//         Ainv = math.inv(A);
//         X = math.multiply(Ainv,B)
//         var print = ''
//         var ppp = ''
//         for(let i=0; i<size; i++)
//         {
//             print += "X"+i+"= " + X[i]+'<br>'
//             ppp = "A"+"*"+"X"+"=" + math.multiply(A,X)
//         }
//         document.getElementById("X").innerHTML = print;
//         document.getElementById("Z").innerHTML = ppp;
//     }
//     return(
//         <div>
//             <label>Input Number Matrix A</label>
//                 <input type="text" class="form-control w-50" value={N} onChange={creatMatrix}></input>
//                     <div class="mt-3">
//                         <Table>
//                             {Ismatrix.map((row, Isrow) => (
//                                 <tr>
//                                     {row.map((col, Iscol) => (
//                                         <td>
//                                             <input type="text" class="form-control w-50 mt-3" id={"" + Isrow + Iscol} onChange={(event) => Recordvarmatrix(Isrow, Iscol, event)}></input>
//                                         </td>

//                                     )
//                                     )
//                                     }
//                                 </tr>
//                             )
//                             )}
//                         </Table>
//                         <label>Input Number Matrix B</label>
//                             <input type="text" class="form-control w-50" value={B} onChange={creatMatrix2}></input>
//                             <div class="mt-3">
//                                 <Table>
//                                     {Ismatrix2.map((row, Isrow2) => (
//                                     <tr>
//                                         {row.map((col, Iscol2) => (
//                                         <td>
//                                             <input type="text" class="form-control w-50 mt-3" id2={"" + Isrow2 + Iscol2} onChange={(event) => Recordvarmatrix2(Isrow2, Iscol2, event)}></input>
//                                         </td>
//                                         )
//                                         )
//                                     }
//                                     </tr>
//                                     )
//                                     )}
//                                 </Table>
//                           <div class="col-auto">
//                              <button type="submit" class="btn rounded-4 btn-warning" onClick={calcarmerCal}>Calculate</button>
//                              <h3>{ans}</h3>
//                           </div>
//                   </div>
//           </div>
//           <div id="X"></div>
//           <div id="Z"></div>
//         </div>
//     )
// }

// export default G3;