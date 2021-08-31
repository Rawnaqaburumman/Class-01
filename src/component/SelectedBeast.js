import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button' 
import data from '../component/assests/data';
class SelectedBeast extends React.Component{
     
render (){
console.log(this.props);
return (
    <Modal show={this.props.show} onHide={this.props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{this.props.data.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{this.props.data.description}{this.props.image_url}</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" >
        Close
      </Button> 
      <Button variant="primary" >
        Save Changes
      </Button> 
    </Modal.Footer>
  </Modal>

)

}


}
export default SelectedBeast ;