import React, { useState, useEffect } from "react";

export default function Tasklist({ item, openView, openEdit }) {
  const [dueDate, setDuedate] = useState();
  const [pending, setPending] = useState();
  useEffect(() => {
    let d = new Date(item.dueDate);
    setDuedate(d.toLocaleDateString());
  }, []);
  useEffect(() => {
    let d = new Date(item.dueDate);
    let n = new Date();
    const p = d.getTime() - n.getTime();

    setPending(Math.round(p / 86400000));
  }, []);

  return (
    <div className="task-list">
      <table className="table">
        <tbody className="thead">
          <tr className="headings">
            <td className="title">{item.title}</td>
            <td className="description">{item.description}</td>
            <td className="due">{dueDate}</td>
            <td className="date">{pending} days</td>
            <td className="status">{item.status}</td>
            <td className="todo">
              <i
                className="fa fa-eye todo-icon"
                onClick={() => openView(item._id)}
              ></i>
              <i
                className="fa fa-edit todo-icon"
                onClick={() => openEdit(item._id)}
              ></i>
              <i className="fa fa-trash-o todo-icon"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
