import React, { useContext } from "react";
import PropTypes from "prop-types";
//import { useTranslation } from "react-i18next";
import axios from "axios";
import TaskContext from "../context/TaskContext";

const ServiceContext = React.createContext();

export const ServiceProvider = (props) => {
    //const { t } = useTranslation();
    const url = "https://test-task-manager-b.free.beeceptor.com/tasks";
    const {tasks, setTasks} = useContext(TaskContext);

    const AgregarTarea = (nuevaTarea) => {
        return axios
        .post(
        url
        , nuevaTarea)
        /*.then( res => {
        setTasks([...tasks, nuevaTarea]);
        //console.log(res);
        })
        .catch( e => {
        console.log(e);
        });*/
    };
    
    const RecuperarTareas = () => {
        axios
        .get(
        url
        )
        .then(res => {
        //console.log(res.data.tasks)
        let auxTasks = [...res.data.tasks, ...tasks].map(element => element={name:element.name,hour:element.hour,id:element.id});
        setTasks(auxTasks);
        })
        .catch(e => {
        console.log(e);
        });
    };

    return (
        <ServiceContext.Provider value={{ RecuperarTareas, AgregarTarea }}>
            {props.children}
        </ServiceContext.Provider>
    );
};

ServiceProvider.propTypes = {
    children: PropTypes.any
  };
  

export const ServiceConsumer = ServiceContext.Consumer;
export default ServiceContext;








/*
axios
.post(
url
, nuevaTarea)
.then( res => {
serviceContext.setServices([...serviceContext.services, nuevaTarea]);
})
.catch( e => {
console.log(e);
});




axios
.get(
url
)
.then(res => {
serviceContext.setServices([...res.data.services, ...serviceContext.services]);
})
.catch(e => {
console.log(e);
});*/