import React from 'react';
import RenderTabList from '../components/RenderTabList';
import RenderItems from '../components/RenderItems';

export default function EditScreen() {
  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button type="button" className="btn btn-primary">
                Add task
              </button>
            </div>
            <RenderTabList />
            <RenderItems />
          </div>
        </div>
      </div>
    </main>
  );
}
