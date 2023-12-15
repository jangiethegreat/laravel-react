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
                'javascript',
                'laravel',
                'react',
            ]
        })
    }
    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>

                <p> Name: {this.state.name}</p>
                <p> Age: {this.state.age}</p>
                <p> Mobile: {this.state.mobile}</p>
                <p> Skills: {this.state.skills.join(', ')}</p>

                <button type='button' onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click Here</button>
                <p onCopy={this.handleCopy}>
                    This is a Test paragraph
                </p>

                <button type='button' onClick={this.handleChangeState}>
                    Change State
                </button>
            </div>
        )
    }
}