import React from "react";

const Tag = ({ tagName, selectTag = null, selected = null }) => {
    const tagStyle = {
        HTML: "bg-[#fda821] border-[#fda821]",
        CSS: "bg-[#15d4c8] border-[#15d4c8]",
        Javascript: "bg-[#ffd12c] border-[#ffd12c]",
        React: "bg-[#4cdafc] border-[#4cdafc]",
        default: "bg-zinc-100",
    };

    return (
        <div
            className={`tag border-2 ${
                selected ? tagStyle[tagName] : tagStyle["default"]
            } border-zinc-300 rounded-lg py-[2px] px-4 cursor-pointer`}
            onClick={() => selectTag && selectTag(tagName)}
        >
            {tagName}
        </div>
    );
};

export default Tag;
