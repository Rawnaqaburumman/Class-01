import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            numvotes: 0
        }
    }


    increasing = () => {
        
        this.setState({
            numvotes: this.state.numvotes + 1
        });
      ;
    }

showing = () => {
    
 this.props.showingmdel(this.props.title, this.props.description, this.props.image_url)
}


render() {
    //console.log(this.props);
    return(
<div style = {{width:'19%' , height:'25%' , backgroundColor:'red'}}>



<Card style={{ width: '18rem' }} onClick={this.showing}>

<Card.Img variant="top" src={this.props.image_url} />
<Card.Body>
  <Card.Title> {this.props.title}</Card.Title>
  <Card.Text>
  {this.props.description}
  </Card.Text>
  <Card.Text>
  {this.props.keyword}
  </Card.Text>
  <Card.Text>
  {this.props.horns}
  </Card.Text>
  <Card.Text>
  {this.state.numvotes} ❤️ 
  </Card.Text>
  <Button onClick={this.increasing}  >Add to your favorite </Button>
</Card.Body>
</Card>
{/* <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.imageUrl} alt="" style = {{width:'25%' , height:'25%' , backgroundColor:'red'}}/>
        <button onClick={this.counter}  style = {{backgroundColor:'red'}}>My Favorite</button>
<p> ❤️  {this.state.numvotes}</p>  */}

        </div>
    );
}
}
/*  {/* Bootstrap */


export default HornedBeast;

