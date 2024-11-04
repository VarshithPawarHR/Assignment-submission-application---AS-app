import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Addnote } from "../component/Addnote";
import "../index.css"; // Assuming your global styles are still needed

export const Card = ({ id, title, desc, date }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = { id, title, desc };

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:9090/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    window.location.reload();
  };

  return (
    <>
      <div className="col-md-4 single-note-item all-category">
        <div className="card bg-gray-800 text-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h5 className="note-title text-truncate mb-1 font-bold text-purple-300">
              {title}
            </h5>
            <p className="note-date text-gray-400 mb-2">{date}</p>
            <div className="note-content mb-3">
              <p className="note-inner-content text-gray-300">{desc}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="m-1 text-yellow-400">
                <i className="fa fa-star favourite-note" />
              </span>
              <span
                className="m-1 text-red-600 cursor-pointer hover:text-red-400 transition-colors"
                onClick={handleDelete}
              >
                <i className="fa fa-trash remove-note" />
              </span>
              <span
                className="m-1 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={handleShow}
              >
                <i className="fa-solid fa-pen-to-square" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <Addnote
          handleClose={handleClose}
          show={show}
          data={data}
          edit={true}
        />
      )}
    </>
  );
};
