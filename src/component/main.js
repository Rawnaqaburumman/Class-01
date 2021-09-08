import React from 'react';
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
    image_url= {array.image_url}
    keyword ={array.keyword}
    horns = {array.horns}
   handleClose ={this.props.handleClose}
   showingmdel={this.props.showingmdel}
    />
  

)
})}

</div>
    );
}}

export default Main;