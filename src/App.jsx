import React, { useState, useEffect } from "react";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import { LuListTodo } from "react-icons/lu";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

let storedTasks = JSON.parse(localStorage.getItem("tasks"));

const App = () => {
    const [Tasks, setTasks] = useState(storedTasks || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(Tasks));
    }, [Tasks]);

    return (
        <div className="app grid grid-rows-[180px_auto]">
            <TaskForm setTasks={setTasks} />

            <main className="app_main flex justify-evenly pb-5">
                <TaskColumn
                    title="To do"
                    icon={<LuListTodo />}
                    tasks={Tasks}
                    setTasks={setTasks}
                />
                <TaskColumn
                    title="Doing"
                    icon={<MdOutlinePendingActions />}
                    tasks={Tasks}
                    setTasks={setTasks}
                />
                <TaskColumn
                    title="Done"
                    icon={<IoCheckmarkDoneCircleSharp />}
                    tasks={Tasks}
                    setTasks={setTasks}
                />
            </main>
        </div>
    );
};

export default App;
