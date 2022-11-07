import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


const CreateNote = ({setNotes}) => {
    const [form, setForm] = useState({title: '' , text: ''})

    function handleChange(event){
    const {value, name} = event.target 
    setForm({...form, [name]: value})
    console.log(form)
    }

    function createNote(){
        setNotes(note=> [...note, form])
        setForm({ title: '', text: ''});
        console.log(form)
    }

  return (
    <div>Create Note
    
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note Title</Form.Label>
            <Form.Control onChange={handleChange} value={form.title} name='title' type="title" placeholder="Enter Title" />
            <Form.Text className="text-muted">
              Enter the title of your note 
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Note:</Form.Label>
            <Form.Control onChange={handleChange} value={form.text} name='text' type="text" placeholder="What are your thoughts?" />
          </Form.Group>

            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Select category
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-2">Personal</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Work</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
         
          <Button onClick={createNote}variant="primary" type="submit">
            Create Note
          </Button>
        </Form>
    </div>
  )
}

export default CreateNote