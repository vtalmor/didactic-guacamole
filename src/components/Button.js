import { React } from "react";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function Button() {
    let navigate = useNavigate();
    function handleClick() {
        //console.log("toForm");
        navigate("/form", { replace: true });
    }  
    return (
        <Fab onClick={handleClick} color="primary">
            <AddIcon/>
        </Fab>
    );
}



export default Button;