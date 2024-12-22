import React from 'react';

function Actions({ handleAllMarks,handleDeleteAllClear }) {
  return (
    <div>
      <h1>Actions</h1>
      <div className="flex flex-col gap-4">
        <button
          className="border-r-2px bg-blue-500 text-white rounded-2xl h-12"
          onClick={handleAllMarks}
        >
          Mark all Completed
        </button>
        <button className="border-r-2px bg-blue-500 text-white rounded-2xl h-12"
          onClick={handleDeleteAllClear}>
          Clear ompleted
        </button>
      </div>
    </div>
  );
}

export default Actions;
