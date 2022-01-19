import React from 'react';
import {
  arrayOf, bool, number, shape, string, func,
} from 'prop-types';
import axios from 'axios';

export default function RenderItems(props) {
  const {
    viewCompleted, todoList, setTodoList, setActiveItemData, setModalState,
  } = props;

  const newItems = todoList.filter(
    (item) => item.completed === viewCompleted,
  );

  const handleDelete = (item) => {
    alert('Are you sure you want to delete this task?');
    axios
      .delete(`/api/todos/${item.id}/`)
      .then(() => axios
        .get('/api/todos/')
        .then((res) => setTodoList(res.data))
        .catch((err) => alert(err)));
  };

  return (
    <ul className="list-group list-group-flush border-top-0">
      {newItems.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2 ${
              viewCompleted ? 'completed-todo' : ''
            }`}
            title={item.description}
          >
            {item.title}
          </span>
          <div>
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={() => {
                setActiveItemData(item);
                setModalState(true);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

RenderItems.propTypes = {
  viewCompleted: bool.isRequired,
  todoList: arrayOf(shape({
    id: number,
    title: string,
    description: string,
    completed: bool,
  })).isRequired,
  setTodoList: func.isRequired,
  setActiveItemData: func.isRequired,
  setModalState: func.isRequired,
};
