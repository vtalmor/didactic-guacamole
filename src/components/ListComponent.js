import { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import Card from './Card';
import TaskContext from '../context/TaskContext';
import ServiceContext from '../services/ServiceContext';
import List from '@mui/material/List';
import { t } from 'i18next';
import Button from './Button';


    

function ListComponent() {

    const {RecuperarTareas} = useContext(ServiceContext);

    useEffect(() => { 
        if(tasks.length==0) {
            RecuperarTareas();
        }
        return () => [];
    },[]);

    const {tasks} = useContext(TaskContext);

    return(
        <div className='lista'>
            <h2>{t("tasks")}</h2>
            <List>
            {tasks.map(task => (
                <Card key={task.id}
                    name={task.name}
                    hour={task.hour}
                    id={task.id}
                />
            ))}
            </List>
            <Button />
        </div>
    );
}    

ListComponent.propType = {
    name: PropTypes.string,
    hour: PropTypes.string,
    id: PropTypes.number
}
    
export default ListComponent;