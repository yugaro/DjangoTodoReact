import React, { useState } from 'react';
import {
  func, shape, string, bool,
} from 'prop-types';
import {
  Form, FormGroup, Modal, ModalBody, ModalHeader, Label, Input, ModalFooter, Button,
} from 'reactstrap';

export default function CustomModal(props) {
  const { toggle, onSave, activeItemData } = props;

  const [activeItem, setActiveItem] = useState(activeItemData);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    const newActiveItem = { ...activeItem, [name]: value };
    setActiveItem({ newActiveItem });
  };

  return (
    <Modal isOpen toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Todo Item
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="todo-title">Title</Label>
            <Input
              type="text"
              id="todo-title"
              name="description"
              value={activeItem.title}
              onChange={handleChange}
              placeholder="Enter Todo Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Description</Label>
            <Input
              type="text"
              id="todo-description"
              name="description"
              value={activeItem.description}
              onChange={handleChange}
              placeholder="Enter Todo description"
            />
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={activeItem.completed}
                onChange={handleChange}
              />
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => onSave(activeItem)}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
}

CustomModal.propTypes = {
  toggle: func.isRequired,
  onSave: func.isRequired,
  activeItemData: shape({
    title: string,
    description: string,
    completed: bool,
  }).isRequired,
};
