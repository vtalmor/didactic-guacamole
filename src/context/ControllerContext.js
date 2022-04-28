import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import TaskContext from "./TaskContext";
import ServiceContext from "../services/ServiceContext";
//import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ControllerContext = React.createContext();


export const ControllerProvider = (props) => {
    const { t, i18n } = useTranslation();
    
    const {tasks, setTasks} = useContext(TaskContext);
    const {AgregarTarea} = useContext(ServiceContext);

    const comprobar = async(newTask) => {
        

        await AgregarTarea(newTask).then(res => {
            let filtro = tasks.filter(task => task.id == newTask.id);
            if(filtro.length==0){

                let auxTasks = [...tasks,newTask].map(element => element={name:element.name,hour:element.hour,id:element.id});
                console.log(auxTasks);
                setTasks(auxTasks);
                //setTasks([...tasks, newTask]);
            }

        }).catch( e => {
                
            console.log(e);
        });
        
    }
    

    return (
        <ControllerContext.Provider value={{ comprobar, t }}>
            {props.children}
        </ControllerContext.Provider>
    );
};

ControllerProvider.propTypes = {
    children: PropTypes.any
  };
  

export const ControllerConsumer = ControllerContext.Consumer;
export default ControllerContext;
