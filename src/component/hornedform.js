import React from 'react';
import data from '../assest/data.json';
import Form from 'react-bootstrap/Form';


class HornedForm extends React.Component {


    horn = (element) => {
        let num = parseInt(element.target.value);
        let thedata = data;
        if (num) {
          let i=(element)=>{
           return element.horns === num;
          }
            thedata = data.filter(i);
            
        }
        
        this.props.new(thedata);
    }

    render() {
        return (
            <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns you want?</Form.Label>
            <Form.Control as="select" onChange={this.new}>
            
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="3">five</option>
            </Form.Control>
          </Form.Group>
        </Form>
        );
    }
}
export default HornedForm;