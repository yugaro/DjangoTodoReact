import React, { useState } from 'react';

import RenderItems from '../components/RenderItems';
import RenderTabList from '../components/RenderTabList';
import CustomModal from '../components/CustomModal';

const todoItems = [
  {
    id: 1,
    title: 'Go to Market',
    description: 'Buy ingredients to prepare dinner',
    completed: true,
  },
  {
    id: 2,
    title: 'Study',
    description: 'Read Algebra and History textbook for the upcoming test',
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: 'Article',
    description: 'Write article on how to use Django with React',
    completed: false,
  },
];

export default function EditScreen() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [activeItemData, setActiveItemData] = useState({
    title: '',
    description: '',
    completed: false,
  });

  const createItem = () => {
    const item = {
      title: '',
      description: '',
      completed: false,
    };
    setActiveItemData(item);
    setModalState(true);
  };

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={createItem}
              >
                Add task
              </button>
            </div>
            <RenderTabList
              viewCompleted={viewCompleted}
              setViewCompleted={setViewCompleted}
            />
            <RenderItems
              viewCompleted={viewCompleted}
              todoItems={todoItems}
              setActiveItemData={setActiveItemData}
              setModalState={setModalState}
            />
          </div>
        </div>
      </div>
      {modalState ? (
        <CustomModal
          activeItemData={activeItemData}
          toggle={() => setModalState(false)}
          onSave={(item) => {
            setModalState(false);
            alert(`save${JSON.stringify(item)}`);
          }}
        />
      ) : null}
    </main>
  );
}
