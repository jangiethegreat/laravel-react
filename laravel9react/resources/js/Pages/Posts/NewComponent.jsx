import React, {Component} from 'react';

export default class NewComponent extends Component{
    state = {
        name:'Jang',
        age:22,
        mobile:1234567890,
        skills:[
            'react',
            'javascript',
            'laravel',

        ]
    }

    handleClick=(e)=>{
        console.log("Button is clicked");
    }
    handleMouseOver=(e)=>{
        console.log(e.target, e.pageX,e.pageY);
    }
    handleCopy=(e)=>{
        console.log('Paragraph has been copied!')
    }

    handleChangeState=()=>{
        this.setState({
            name:'John',
            age:23,
            mobile:1111000000,
            skills:[    
                'php',
                'html',
                'css',
            ]
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Name',this.state.name);
        console.log('Age',this.state.age);
        console.log('Mobile',this.state.mobile);
    }
    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>

                <p> Name: {this.state.name}</p>
                <p> Age: {this.state.age}</p>
                <p> Mobile: {this.state.mobile}</p>
                <p> Skills: {this.state.skills.join(', ')}</p>

           

                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name = "name" onChange={this.handleChange}/><br/>
                    Age : <input type="text" name = "age" onChange={this.handleChange}/> <br/>
                    Mobile : <input type = "text"  name = "mobile" onChange={this.handleChange}/> <br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}