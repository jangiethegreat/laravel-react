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
    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>

                <p> Name: {this.state.name}</p>
                <p> Age: {this.state.age}</p>
                <p> Mobile: {this.state.mobile}</p>
                <p> Skills: {this.state.skills.join(', ')}</p>
            </div>
        )
    }
}