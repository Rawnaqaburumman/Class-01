import React from 'react';
import data from './assests/data.json';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  
render() {
    console.log(this.props)
    return (
        <div >


{this.props.thedata.map((array)=> {
return (
    <HornedBeast title = {array.title} 
    description = {array.description}
    imageUrl = {array.image_url}
    keyword ={array.keyword}
    horns = {array.horns}
   handleClose ={this.props.handleClose}
    />
  

)
})}

</div>
    );
}}

export default Main;