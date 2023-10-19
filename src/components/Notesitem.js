import React from "react";

const Notesitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-4 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {note.title} <i class="fa-solid fa-trash mx-2"></i>
              <i class="mx-2 fa-solid fa-pen-to-square"></i>
            </h5>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notesitem;
