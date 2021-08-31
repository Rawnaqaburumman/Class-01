import React from 'react';
import Header from './component/header';
import Main from './component/main';
import data from './component/assests/data.json';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import HornedBeast from './component/HornedBeast';
import SelectedBeast from './component/SelectedBeast'



class App extends React.Component{


    constructor(props) {
        super(props);
        {
          this.state = {
        show: false,
         title:'',
         description:'',
         imageUrl:'',

          }
        }
      };
    
      handleClose = (title ,description,imageUrl) => {
        this.setState ({ show:true},
       {title:this.title},
       {description:this.description}
       ) 
      }
    
render() {




    return (
        <div className = 'App'>
<Header/>
<Main thedata={data} 
handleClose ={this.handleClose}
/>
<SelectedBeast

handleClose={this.handleClose}
show={this.state.show}
data={data}
title={this.state.title}
description={this.state.description}
image_url={this.state.image_url}/>



<Footer/>

</div>
    );
}}

export default App;



