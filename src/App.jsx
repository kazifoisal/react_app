// import React, { useState } from "react";
// import "./App.css"
// const App = () => {
//   const [list, setList] = useState([]);
//   const [items, setitems] = useState("");

//   const addToDO = () => {
//     list.push(items);
//     setList([...list]);
//     console.log(list);
//   };

//   const removeToDo=(index)=>{
//      list.splice(index,1);
//      setList([...list])

//      console.log(index);
//   }

//   return (
//     <div className="whole_project">
//      <div className="initial_part">
//      <input
//         onChange={(e) => setitems(e.target.value)}
//         type="text"
//         placeholder="Lists"
//       />
//       <button onClick={addToDO}>Add To Do</button>
//      </div>

//      <table>
//       <tbody>
//           {list.length !== 0 ? (
//             list.map((element, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{element}</td>
//                   <td>
//                     <button onClick={()=>removeToDo(index)}>Remove</button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr><td>Empty</td></tr>
//           )}
//       </tbody>
//      </table>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [list, setList] = useState([]);
  const [items, setItems] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const create = () => {
    list.push(items);
    setList([...list]);
  };

  return (
    <div className="whole_project">
      <div className="form">
        <div className="fullName">
          <input
            onChange={(e) =>
              setItems((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            type="text"
            placeholder="firstName"
            className="firstName"
          />
          <input
            onChange={(e) =>
              setItems((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            type="text"
            placeholder="lastName"
            className="lastName"
          />
        </div>
        <input
          onChange={(e) =>
            setItems((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          type="email"
          placeholder="e-mail"
        />
        <input
          onChange={(e) =>
            setItems((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          type="password"
          placeholder="password"
        />
        <div className="btn">
          <button onClick={create}>Create Account</button>
        </div>
      </div>

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element,index) => {
              return(
               <tr key={index}>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
                <td>{element.password}</td>
              </tr>
              )
            })
          ) : (
            <tr><td>Empty</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
