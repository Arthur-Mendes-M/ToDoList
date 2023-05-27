import React from "react";
import { useNavigate } from "react-router-dom";

// import '../../../../styles/components/alterDataButton.scss'
import { Button } from "./style";

const AlterData = (props) => {
    const navigate = useNavigate()

    return (
        // link={`/toDo/${item.id}`}
        <Button type="button" className="clearButton form" onClick={() => navigate(`/toDo/${props.toDoId}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
        </Button>
    )
}

export { AlterData }