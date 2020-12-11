import React, { Component } from 'react';
import ToDoCreatorContainer from '../../containers/ToDoCreatorContainer';
import ToDoListContainer from '../../containers/ToDoListContainer';
import { Row, Col } from 'antd';

class ToDoListGrid extends Component {
    render() {
        return (
            <div className="panel">
                <Row>
                    <Col
                        span={24}
                    >
                        <ToDoListContainer />
                    </Col>
                </Row>
                <Row>
                    <Col
                        span={24}
                    >
                        <ToDoCreatorContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ToDoListGrid;