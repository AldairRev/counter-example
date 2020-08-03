import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                    <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
                        {this.props.totalCounters}
                    </span>
                    Items
                </div>
            </nav>
        )
    }
}
