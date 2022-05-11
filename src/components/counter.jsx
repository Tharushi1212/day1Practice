import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
    state = { 
        value:this.props.value,
        tags:[
            "tag1",
            "tag2",
            "tag3"
        ]
     } ;

     incrementHandle=()=>{
        this.setState({value: this.state.value+1})
     };

    render() { 
        return (
        <div>
            <span className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button  onClick={this.incrementHandle} className='btn btn-seconday btn-sm'>Increment</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            <ul>
                {this.state.tags.map(tag=>
                    <li key={tag.id}>{tag}</li>)}
                   
            </ul>
        </div>);
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" :value;
    }
}
 
export default Counter;
