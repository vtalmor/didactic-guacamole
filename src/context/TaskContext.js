import React, { useState } from "react";
import PropTypes from "prop-types";
//import { useTranslation } from "react-i18next";

const TaskContext = React.createContext();

export const TaskProvider = (props) => {
    //const { t } = useTranslation();
    const [tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {props.children}
        </TaskContext.Provider>
    );
};

TaskProvider.propTypes = {
    children: PropTypes.any
  };
  

export const TaskConsumer = TaskContext.Consumer;
export default TaskContext;
