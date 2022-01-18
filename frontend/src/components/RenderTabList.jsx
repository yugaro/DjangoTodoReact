import React, { useState } from 'react';

export default function RenderTabList() {
  const [viewCompleted, setViewCompleted] = useState(false);

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
