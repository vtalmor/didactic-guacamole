import { TextField, Button } from '@mui/material';
import { t } from 'i18next';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/*import TaskContext from '../context/TaskContext';
import ServiceContext from '../services/ServiceContext';*/
import ControllerContext from '../context/ControllerContext';

function FormComponent() {

    /*const {tasks, setTasks} = useContext(TaskContext);
    const {AgregarTarea} = useContext(ServiceContext);*/
    const navigate = useNavigate();
    const [newTask, setNewTask] = useState({name:"",hour:"",id:null});

    const {comprobar} = useContext(ControllerContext);

    const crearTarea = () => {

        comprobar(newTask);
        navigate("/", {replace:true});
    
      
    }

    return(
        <form>
        <TextField
        onChange={(event)=>setNewTask({...newTask, name: event.target.value})}
        label={t("name")}
        type={"text"}
        />
        <TextField
        onChange={(event)=>setNewTask({...newTask, hour: event.target.value})}
        label={t("hour")}
        defaultValue={"00:00"}
        type={"time"}
        />
        <TextField
        onChange={(event)=>setNewTask({...newTask, id: event.target.value})}
        label={t("id")}
        type={"number"}
        />
        <Button
        onClick = {crearTarea}
        >
        {t("add")}
        </Button>
        </form>
    );
}    
    
export default FormComponent;