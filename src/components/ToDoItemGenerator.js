import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class toDoItemGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input : ""
        };
    }

    onInputValueChange = (event) => {
        this.setState({
            input : event.target.value
        });
    }

    addToDo = () => {
        if(this.state.input.length > 0) {
            var toDo = {
                id : uuidv4(),
                message : this.state.input,
                done : false
            }

            this.props.addToDo(toDo);
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Input a new todo here." onChange={this.onInputValueChange}/>
                <button style={{width : 40, height : 30}} onClick={this.addToDo}>add</button>
            </div>
        );
    }
}

export default toDoItemGenerator;