import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";



const Layout = ({children}) => {

    return(
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;