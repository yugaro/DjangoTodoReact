import React from 'react';
import { bool } from 'prop-types';

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

export default function RenderItems(props) {
  const { viewCompleted } = props;
  // const [todoList, setTodoList] = useState(todoItems);
  const newItems = todoItems.filter(
    (item) => item.completed === viewCompleted,
  );

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
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
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
  viewCompleted: bool,
};

RenderItems.defaultProps = {
  viewCompleted: false,
};
