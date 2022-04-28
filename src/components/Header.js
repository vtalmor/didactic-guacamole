//import { Link } from "react-router-dom";

import { t } from "i18next";

function Header() {
  	return (
    	<div className="Header">
      		<h1>{t('pie')}</h1>
			{/*<nav>
				<Link to="/list">List</Link> |{" "}
				<Link to="/form">Form</Link>
			</nav>*/}
		</div>
  	);
}

export default Header;