import React from 'react';
import {
  func, shape, string, bool,
} from 'prop-types';
import {
  Form, FormGroup, Modal, ModalBody, ModalHeader, Label, Input, ModalFooter, Button,
} from 'reactstrap';

export default function CustomModal(props) {
  const {
    toggle, onSave, activeItemData, setActiveItemData,
  } = props;

  // const [activeItem, setActiveItem] = useState(activeItemData);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    const newActiveItem = { ...activeItemData, [name]: value };
    setActiveItemData({ newActiveItem });
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
              value={activeItemData.title}
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
              value={activeItemData.description}
              onChange={handleChange}
              placeholder="Enter Todo description"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={activeItemData.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => onSave(activeItemData)}
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
  setActiveItemData: func.isRequired,
};
