import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, setTasks }) => {
    return (
        <section className="task_column w-[23%] min-h-[500px] mt-6">
            <div className="heading py-2 flex items-center gap-3">
                <div className="icon text-3xl">{icon}</div>
                <h2 className="text-2xl font-bold text-zinc-800">{title}</h2>
            </div>

            <div className="tasks flex flex-col gap-5 mt-5">
                {tasks
                    .filter((task) => title === task.status)
                    .map((taskData, index) => (
                        <TaskCard
                            key={index}
                            task={taskData.task}
                            tags={taskData.tags}
                            setTasks={setTasks}
                            id={taskData.id}
                        />
                    ))}
            </div>
        </section>
    );
};

export default TaskColumn;
