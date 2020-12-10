import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DoneListContainer from '../../containers/DoneListContainer';

class DoneListGrid extends Component {
    render() {
        return (
            <div className="panel">
                <Row>
                    <Col
                        span={24}
                    >
                        <DoneListContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DoneListGrid;