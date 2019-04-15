import React, { useContext} from "react";
import {withStyles} from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from "graphql-request";
import Context from '../../Context.js';
const ME_QUERY = `
{
  me {
    _id,
    name,
    email,
    picture
  }
}`;

const Login = ({classes}) => {
  const { dispatch } =  useContext(Context);
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient('http://localhost:4000/graphql', {
      headers: { authorization: idToken }
    })
   const data = await   client.request(ME_QUERY);
    dispatch({ type: "LOGIN_USER", payload: data.me})
    // console.log( {data} )
  };

  return <GoogleLogin
    clientId={"924711764819-50aliotmo4ohkrd76b1h737gmrgf4m0e.apps.googleusercontent.com"}
    onSuccess={onSuccess}
    isSignedIn={true}
  />;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
