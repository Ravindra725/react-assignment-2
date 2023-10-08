import React, { Component } from 'react'
import './Form.css';

class FormClass extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            dept: '',
            rating: '',
            subData:[]
        }

    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=()=>{
        const tempobj={
            name:this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
        }
        this.state.subData.push(tempobj)
        this.setState({subData: this.state.subData})
    }

    render(){
        return(
            <>
            <div className='Formcompo'>
                <label className='name'>Name</label>
                <input type='text' name='name' placeholder='enter name' onChange={this.handleChange} /> <br/>
                <label className='name'>Department</label>
                <input type='text' name='dept' placeholder='enter department' onChange={this.handleChange} /> <br/>
                <label className='name'>Rating</label>
                <input type='text' name='rating' placeholder='enter rating' onChange={this.handleChange} /> <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            
            <div className='form'>
                {this.state.subData.map((item,index)=>{
                    console.log(item);
                    return(
                        <div className='content' key={index}>
                           <span>name:{item.name}</span> || 
                           <span>dept:{item.dept}</span> || 
                           <span>rating:{item.rating}</span>
                        </div>
                    )
                })}
            </div>
            
            
            </>
        )
    }

   
}
export default FormClass
