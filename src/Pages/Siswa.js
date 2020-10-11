import React, { Component } from 'react'
import Table from '../Components/Table'
import Navbar from '../Components/Navbar'

export default class Siswa extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Table />
            </div>
        )
    }
}
