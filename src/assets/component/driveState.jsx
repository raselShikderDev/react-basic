// import { useState } from "react";
// import styled from "styled-components";

// export default function driveState() {
//   const [users, setUsers] = useState([
//     { username: "Alice", age: 25 },
//     { username: "Bob", age: 30 },
//     { username: "Charlie", age: 35 },
//     { username: "Angles", age: 45 },
//   ]);

//     const countUser = users.length;
    
//     const userAvarage = users.reduce((accm, currElm) => accm + currElm.age, 0) 
//                         // users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

//     const MyLi = styled.li({
//     listStyle: "none",
//   });

//   return (
//     <>
//       <h1>User List</h1>
//       <div>
//         <ul>
//           {users.map((currElm, index) => {
//             return (
//               <MyLi key={index}>
//                 Name: {currElm.username}, Age: {currElm.age} Years old
//               </MyLi>
//             );
//           })}
//         </ul>
//               <p>Total User: {countUser}</p>
//               <p>Avarage: {userAvarage}</p>
//       </div>
//     </>
//   );
// }
