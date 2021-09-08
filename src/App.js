import React from 'react';
import Header from './component/header';
import Main from './component/main';
import data from './component/assests/data.json';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast'
import HornedForm from './component/hornedform';


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: '',
      description: '',
      image_url:'',
      newimage:'',
      parametersArray:''
    }

    this.setState({
      newimage: parametersArray[0],
      title: title
    })

  };

 showingmdel = (title, description, image_url) => {
   console.log(title, description, image_url);
    this.setState( {show: true ,
      title:title ,
       description: description ,
       image_url:image_url
     } )
  }

  
  handleClose= () =>{
    this.setState({show:false})
  }

 

  new = (parametersArray) => {
    console.log(parametersArray);
    this.setState({
      parametersArray:this.state.parametersArray
    });
  }
  render() {




    return (
      <div className='App'>
        <Header />
        <HornedForm new={this.new} />
        <Main thedata={data}
          handleClose={this.handleClose}
          showingmdel={this.showingmdel}
        />


        <SelectedBeast

          handleClose={this.handleClose}
          show={this.state.show}
          data={data}
          title={this.state.title}
          description={this.state.description}
          imageUrl={this.state.image_url} />
          newimage={this.state.newimage}


        <Footer />

      </div>
    );
  }
}

export default App;



