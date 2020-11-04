// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import {useSelector} from "react-redux-firebase";
// import Home from "../pages/Admin";
// import { connect } from "react-redux";

// const PrivateRoute = (props) =>  {
//   const {auth} = useSelector(state => state.firebase.auth);
//   console.log(props)

//   return (
//     <Route
//       render={props => {
//         return auth ? <Home {...props} /> : <Redirect to="/login" />
//       }}
//     ></Route>
//   )
// }


// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   }
// }
// export default connect(mapStateToProps)(PrivateRoute)

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;