import { bool, func } from 'prop-types';
import React from 'react';

export default function RenderTabList(props) {
  const { viewCompleted, setViewCompleted } = props;
  return (
    <div className="nav nav-tabs">
      <button
        type="button"
        className={viewCompleted ? 'nav-link active' : 'nav-link'}
        onClick={() => setViewCompleted(true)}
      >
        Complete
      </button>
      <button
        type="button"
        className={viewCompleted ? 'nav-link' : 'nav-link active'}
        onClick={() => setViewCompleted(false)}
      >
        Incomplete
      </button>
    </div>
  );
}

RenderTabList.propTypes = {
  viewCompleted: bool.isRequired,
  setViewCompleted: func.isRequired,
};
