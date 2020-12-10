import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';

class Navigation extends Component {
    render() {
        return (
            <Menu 
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['home']}
            >
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="done-list">
                    <Link to="/done-list">Done List</Link>
                </Menu.Item>
          </Menu>
        );
    }
}

export default Navigation;