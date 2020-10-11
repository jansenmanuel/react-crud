import React, { Component } from 'react'
import ModalAdd from './ModalAdd'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <a className="navbar-brand text-light" href="/">CRUD Sederhana</a>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalAdd">Add</button>
                </nav>
                <div className="modal fade" id="modalAdd" tabindex="-1" aria-labelledby="modalAddLabel" aria-hidden="true">
                    <ModalAdd />
                </div>
            </div>
        )
    }
}
