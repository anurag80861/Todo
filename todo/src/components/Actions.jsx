import React from 'react';

function Actions({ handleAllMarks,handleDeleteAllClear }) {
  return (
    <div className=''>
      <h1 className='font-bold mb-4'>Actions</h1>
      <div className="flex flex-col gap-4">
        <button
          className="border-r-2px bg-blue-500 text-white rounded-2xl h-12 w-28"
          onClick={handleAllMarks}
        >
          Mark all Completed
        </button>
        <button className="border-r-2px bg-blue-500 text-white rounded-2xl h-12 w-28"
          onClick={handleDeleteAllClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default Actions;
