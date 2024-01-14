import React, { useRef } from "react";
import Tag from "./Tag";
import { useState } from "react";

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        id: 1,
        task: "",
        status: "To do",
        tags: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const selectTag = (tag) => {
        if (taskData.tags.includes(tag)) {
            setTaskData((prev) => {
                let filterdTags = prev.tags.filter((item) => item != tag);
                return {
                    ...prev,
                    tags: filterdTags,
                };
            });
        } else {
            setTaskData((prev) => {
                return {
                    ...prev,
                    tags: [...prev.tags, tag],
                };
            });
        }
    };

    const selected = (tag) => {
        return taskData.tags.includes(tag);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks((prev) => {
            if (taskData.task != "") {
                return [...prev, taskData];
            } else return [...prev];
        });

        setTaskData((prev) => {
            if (taskData.task != "") {
                return {
                    id: Date.now(),
                    task: "",
                    status: "To do",
                    tags: [],
                };
            } else return { ...prev };
        });
    };

    return (
        <header className="app_header flex flex-col justify-center items-center">
            <form
                className="flex flex-col gap-[20px] p-[30px]"
                onSubmit={handleSubmit}
            >
                <input
                    className="text-xl text-zinc-700 font-semibold border-2 bg-zinc-100 border-zinc-300 w-[40rem] p-4 rounded-lg placeholder:text-2xl placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500"
                    type="text"
                    value={taskData.task}
                    name="task"
                    placeholder="Enter your task"
                    onChange={handleChange}
                />

                <div className="task_bottom flex justify-between items-center">
                    <div className="tags flex gap-3">
                        <Tag
                            tagName="HTML"
                            selectTag={selectTag}
                            selected={selected("HTML")}
                        />
                        <Tag
                            tagName="CSS"
                            selectTag={selectTag}
                            selected={selected("CSS")}
                        />
                        <Tag
                            tagName="Javascript"
                            selectTag={selectTag}
                            selected={selected("Javascript")}
                        />
                        <Tag
                            tagName="React"
                            selectTag={selectTag}
                            selected={selected("React")}
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            className="border-2 border-zinc-300 rounded-lg py-2 w-[100px] px-1 flex justify-between"
                            name="status"
                            value={taskData.status}
                            onChange={handleChange}
                        >
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>

                        <button
                            className="rounded-lg bg-[#5a42cfee] text-white px-4 py-2 cursor-pointer"
                            type="submit"
                        >
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>

            <div className="border-[1px] border-zinc-300 w-full "></div>
        </header>
    );
};

export default TaskForm;
