import React, { Component } from 'react'
import axios from 'axios'

export default class ModalAdd extends Component {
    state = {
        nama: "",
        ttl: "",
        agama: "",
        alamat: "",
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const tambahSiswa = {
            nama: this.state.nama,
            ttl: this.state.ttl,
            agama: this.state.agama,
            alamat: this.state.alamat,
        };

        axios.post(`http://localhost:8080/addSiswa`, tambahSiswa)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Berhasil menambah data siswa!');
                window.location.reload();
            })
        console.log(tambahSiswa);
    }

    render() {
        return (
            <div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalAddLabel">Modal Add Siswa</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" className="form-control" placeholder="Masukkan nama siswa" name="nama" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tempat/Tanggal Lahir</label>
                                    <input type="text" className="form-control" placeholder="Masukkan tempat/tanggal lahir siswa" name="ttl" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Agama</label>
                                    <input type="text" className="form-control" placeholder="Masukkan agama siswa" name="agama" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Alamat</label>
                                    <input type="text" className="form-control" placeholder="Masukkan alamat siswa" name="alamat" onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
