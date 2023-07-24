import React, { useState } from "react";
import "./Tasks.css";
import MyButton from "../button/MyButton";
import { customPost } from "../../utilities/custom-fetch";

export default function ViewTasks({ close, item }) {
  console.log(item);
  const [title, setTitle] = useState(item[0].title);
  const [description, setDescription] = useState(item[0].description);
  const [dueDate, setDueDate] = useState(item[0].dueDate);
  const [status, setStatus] = useState(item[0].status);

  return (
    <div className="tasks">
      <div className="add-tasks">
        <div className="close" onClick={() => close()}>
          Close
        </div>
        <form action="/" className="task-form">
          <div className="input">
            <div>Title</div>
            <h2>{title}</h2>
          </div>
          <div className="description1">
            <div>Description</div>
            <p>{description}</p>
          </div>
          <div className="input">
            <div>Due Date:</div>
            {dueDate}
          </div>
          <div className="input">
            <div>Status:</div>
            {status}
          </div>
          {/* <div className="input" onClick={editTask}>
            <MyButton lable="EDIT" />
          </div> */}
        </form>
      </div>
    </div>
  );
}
