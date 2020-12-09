import React, { Component } from 'react';
import ToDoItemGeneratorContainer from '../containers/ToDoItemGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoGroupContainer';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoGroupContainer />
                <ToDoItemGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;