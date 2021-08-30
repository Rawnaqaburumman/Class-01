import React from 'react';
import Header from './component/header';
import Main from './component/main';

import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class App extends React.Component{
render() {
    return (
        <div className = 'App'>
<Header/>
<Main/>

<Footer/>

</div>
    );
}}

export default App;



