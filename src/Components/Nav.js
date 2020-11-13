import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Nav extends Component {
    render() {
        return (
            <div>
                <button><Link to="/dashboard"></Link></button>
                <button><Link to="/new"></Link></button>
                <button><Link to="/"></Link></button>
                <div>
                    
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Nav);