import React from "react";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children: Children, ...rest }) => {        
    if (localStorage.getItem('token') ) {
      return <Children {...rest}/>
    }
    return <Navigate to="/login" />
  }

export default PrivateRoute;

// const PrivateRoute = ({ element: Component, ...rest }) => {
    
    
//     return (
//         <Routes>

//             <Route to="/friends" element={<Friendlist />} />
//             {/* {
//                 localStorage.getItem('token') ? <Route to="/friends" element={<Component />} /> : <Route to="/login" element={<Login />} />
//             } */}
//         </Routes>
//     )

//     // return (
//     //     <Routes>
//     //         {
//     //             localStorage.getItem('token') ? <Route to="/friends" element={<Component />} /> : <Route to="/login" element={<Login />} />
//     //         }
//     //     </Routes>
//     // )




//     // return <Route {...rest} render={(props) => {
//     //     if (localStorage.getItem('token')) {
//     //         return <Component {...props} />;
//     //     } else {
//     //         // navigate("/login")
//     //         return <Navigate to="/login" />
//     //     }
//     // }} />

// }


// export default PrivateRoute;