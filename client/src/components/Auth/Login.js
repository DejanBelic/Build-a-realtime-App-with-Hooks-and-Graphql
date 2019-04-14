import React from "react";
import {withStyles} from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import {GoogleLogin} from "react-google-login";

const Login = ({classes}) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse()
      .id_token;
    console.log(idToken)
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
