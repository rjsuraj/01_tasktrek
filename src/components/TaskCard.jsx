import React from "react";
import { IoTrashBin } from "react-icons/io5";
import Tag from "./Tag";

const TaskCard = ({ task, tags, setTasks, id }) => {
    const handleDelete = () => {
        setTasks((prev) => {
            let filteredTasks = prev.filter((task) => task.id != id);
            return filteredTasks;
        });
    };

    return (
        <div className="task_card border-2 border-zinc-300 space-y-4 rounded-lg px-4 py-4">
            <h3 className="text-[20px] font-medium text-zinc-800">{task}</h3>

            <div className="flex justify-between items-center">
                <div className="tags flex flex-wrap items-center gap-2">
                    {tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected={true} />
                    ))}
                </div>

                <div
                    className="delete_icon opacity-70 hover:opacity-[1] cursor-pointer bg-zinc-300 text-xl p-2 rounded-full transition-all duration-[0.5]"
                    onClick={handleDelete}
                >
                    <IoTrashBin />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
