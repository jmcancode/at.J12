import { render } from 'node-sass';
import React from 'react';
import Sidebar from 'react-sidebar';

import Navbar from 'react-bootstrap/Navbar';


class mobileNav extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        sidebarOpen: true
    }
}