//import { Link } from "react-router-dom";

import { t } from "i18next";

function Footer() {
    return (
        <div className="Footer">
            {/*<nav>
            <Link to="/list">List</Link> |{" "}
            <Link to="/form">Form</Link>
            </nav>*/}
            <h6>{t('pie')}</h6>
        </div>
    );
}
  
export default Footer;