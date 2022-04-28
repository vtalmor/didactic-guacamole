import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AlertContext = React.createContext();

export const AlertProvider = (props) => {

    const alertSeverities = {
        error: "error",
        warning: "warning",
        info: "info",
        success: "success"
    };     
    
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackSeverity, setSnackSeverity] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");  

    useEffect(() => {

        return () => {};
    }, []);

    const showAlert =(text, severity) => {
        setSnackBarMsg(text);
        setSnackSeverity(severity);
        setOpenSnackBar(true);
    }  
    
    const handleOnCloseSnackBar = () => setOpenSnackBar(false);

    return (
        <AlertContext.Provider value={{showAlert, handleOnCloseSnackBar, openSnackBar, snackSeverity, snackBarMsg, alertSeverities}}>
            {props.children}
        </AlertContext.Provider>
    );
};

AlertProvider.propTypes = {
    children: PropTypes.any
  };
  

export const AlertConsumer = AlertContext.Consumer;
export default AlertContext;