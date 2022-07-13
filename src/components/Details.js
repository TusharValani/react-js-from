// import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Details = ({ logout }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem("useryoutube"));
//     if (users) {
//       setUsers(users);
//       // console.log(users);
//     }
//   }, []);

//   return (
//     <>
//       {/* {" "}
//       {users.map((users) => (
//         <div className="row" style={{ background: "rgb(67, 185, 127)" }}>
//           <div
//             className="col-md-6 d-flex align-items-center "
//             style={{ background: "rgb(67, 185, 127)" }}
//           >
//             <div className="ms-4" style={{ background: "rgb(67, 185, 127)" }}>
//               <h5>Name : {users.name}</h5>
//               <h5>Email : {users.email}</h5>
//               <h5>date : {users.date}</h5>
//               <h5>password : {users.password}</h5>
//               <hr />
//             </div>
//           </div>
//         </div>
//       ))} */}
//       <li className="nav-item">
//         <Link
//           className="nav-link "
//           to="/"
//           onClick={logout}
//           style={{ background: "rgb()" }}
//         >
//           Logout{" "}
//         </Link>
//       </li>
//     </>
//   );
// };

// export default Details;

import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const history = useNavigate();

  const uesrlogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <>
      <Button onClick={uesrlogout}>Logout</Button>
    </>
  );
};

export default Details;
