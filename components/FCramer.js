// import React, { useState } from "react"
// // import { Table } from "react-bootstrap"
// export default function Cramer() {
//     const [N, setN] = useState([]) //ต้องกำหนดusestateเป็น[]เพราะค่าที่รับเข้ามาเป็นArray
//     const [Ismatrix, setIsmatrix] = useState([])
//     // const [ans, setAns] = useState(0)
//     let creatMatrix = (event) => { //การกำหนดช่องmatrixตามจำนวนตัวเลขที่inputเข้ามา
//         setN(event.target.value)
//         var array = [[]]
//         for (let i = 0; i < Number(event.target.value); i++) {
//             array[i] = []
//             for (let j = 0; j < Number(event.target.value) + 1; j++) {
//                 array[i][j] = `${i}${j}` //สร้างช่อง
//             }
//             setIsmatrix(array)
//         }
//     }
//     const Recordvarmatrix = (Isrow, Iscol, event) => {
//         Ismatrix[Isrow][Iscol] = Number(event.target.value) //เก็บช่องmatrixไว้ในตัวแปรIsmatrix
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
//         let ans = 0;
//         let i = 0, j = 0  //คำนวณตามสูตร
//         let x = []
//         let k = 0
//         for (k = 0; k < Number(N); k++) { //0 1 2
//             for (i = k + 1; i < Number(N); i++) { //1 2
//                 for (j = k + 1; j <= Number(N); j++) { //11 22 33
//                     array[i][j] = array[i][j] * array[k][j] 
//                     let ans = array[i][j]// 11 = temp*01 = 2* = 1
//                 }
//                 return ans;
//             }
//         }
//         // for (i = Number(N) - 1; i >= 0; i--) { //2 1 0 //คำนวณตามสูตร
//         //     x[i] = array[i][Number(N)] //x[2] = 
//         //     for (j = i + 1; j < Number(N); j++) {
//         //         x[i] = x[i] - array[i][j] * x[j]
//         //     }
//         //     x[i] = x[i] / array[i][i]
//         // }
//         // let ans = [] //คำตอบ
//         // for (i = 0; i < Number(N); i++) {
//         //     ans.push(<div>x={x[i=1].toFixed(6)}</div>) //ส่งคำตอบไปหน้าเว็บ
//         // }
//         // setAns(ans) //ดึงค่าคำตอบออกมา
//     }
//     let reload = () => {
//         window.location.reload()
//     }
//     return (
//         <div>
//             <div className="FCramer">
//                 <div className="containerc">
//                     <form>
//                         <div class="mt-3">
//                             <label>Input Number</label>
//                             <input type="text" class="form-control w-50" value={N} onChange={creatMatrix}></input>
//                             <div class="mt-3">
//                             {Ismatrix.map((row, Isrow) => ( //เอาช่องมาmapลงหน้าเว็บ ตามตัวแปรที่เก็บไว้ในฟังก์ชันRecordvarmatrix
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
//                             </div>
//                         </div>
//                     </form>
//                     {/* <div class="col-auto"> */}
//                     <div class="mt-3 row g-3">
//                         <div class="col-auto">
//                             <button type="submit" class="btn rounded-4 btn-warning" onClick={calcarmerCal}>Calculate</button>
//                         </div>

//                         <div class="col-auto">
//                             <button type="Button" class="btn rounded-4 btn-warning" onClick={reload}>Reload</button>
//                         </div>
//                         <div class="mt-3">
//                             <h6 class="fw-bold">The Result is : </h6>
//                             <div>{ans}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // export default Cramer