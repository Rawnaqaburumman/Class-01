import React from 'react';
import data from './assests/data.json';
import HornedBeast from './HornedBeast';

class Datalist extends React.Component{
render() {
    return (
        <div >
{data.map((datadetail)=>{
return (
    <HornedBeast title = {datadetail.title} 
    description = {datadetail.description}
    imageUrl = {datadetail.image_url}
    keyword ={datadetail.keyword}
    horns = {datadetail.horns}
    />
    
)
})}

</div>
    );
}}

export default Datalist;

