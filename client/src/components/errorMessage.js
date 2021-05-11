import React from "react";

function ErrorMessage({errorMessage}){
    return(
        <p className="error-message" style={errorMessage.show ? {display: "block"} : {display: "none"}}>{errorMessage.message}</p>
    );
}

export default ErrorMessage;