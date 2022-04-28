import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SpinnerContext = React.createContext();

export const SpinnerProvider = (props) => {
    
    const [openSpinner, setOpenSpinner] = useState(false);

    useEffect(() => {

        return () => {};
    }, []);

    const showSpinner =() => setOpenSpinner(true);

    
    const handleOnCloseSpinner = () => setOpenSpinner(false);

    return (
        <SpinnerContext.Provider value={{showSpinner, handleOnCloseSpinner, openSpinner}}>
            {props.children}
        </SpinnerContext.Provider>
    );
};

SpinnerProvider.propTypes = {
    children: PropTypes.any
  };
  

export const SpinnerConsumer = SpinnerContext.Consumer;
export default SpinnerContext;