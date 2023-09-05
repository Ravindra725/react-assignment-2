import { Component } from 'react';
import './Form.css'


class FormClass extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            department : '',
            FmData : []
        }
    }


    handleChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = () => {
        const tempObj = {
            name : this.state.name,
            department : this.state.department
        }
        this.state.FmData.push(tempObj)
        this.setState({
            FmData : this.state.FmData
        })
    }

    render(){
        return(
            <>
            <form className='form'>
                <label htmlFor='name'>Name </label>
                <input type='text' name='name' id='name' onChange={this.handleChange}/> <br/>
                <br/>
                <label htmlFor='depart'>Department </label>
                <input type='text' name='department' id='depart' onChange={this.handleChange}/> <br/> <br/>
                <label htmlFor='rating'>Rating </label>
                <input type='text' name='rating' id='rating' onChange={this.handleChange}/> <br/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
            {this.state.FmData.map((item, index)=> {
                console.log(item);
                return(
                    <div key={index}>
                        <p>Index : {index}</p>
                        <h2>{item.name}</h2>
                        <h2>{item.department}</h2>
                    </div>
                )
            })}
            </>
        )
    }
}
export default FormClass