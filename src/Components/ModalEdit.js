import React, { Component } from 'react'
import axios from 'axios'

export default class ModalEdit extends Component {
    state = {
        id: this.props.data.id,
        nama: this.props.data.nama,
        ttl: this.props.data.ttl,
        agama: this.props.data.agama,
        alamat: this.props.data.alamat,
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const tambahSiswa = {
            id: this.state.id,
            nama: this.state.nama,
            ttl: this.state.ttl,
            agama: this.state.agama,
            alamat: this.state.alamat,
        };

        axios.put(`http://localhost:8080/updateSiswa/` + this.state.id, tambahSiswa)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Berhasil mengubah data siswa!');
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
                            <h5 className="modal-title" id="modalEditLabel">Modal Edit Siswa</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" className="form-control" placeholder="Masukkan nama siswa" name="nama" defaultValue={this.props.data.nama} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tempat/Tanggal Lahir</label>
                                    <input type="text" className="form-control" placeholder="Masukkan tempat/tanggal lahir siswa" name="ttl" defaultValue={this.props.data.ttl} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Agama</label>
                                    <input type="text" className="form-control" placeholder="Masukkan agama siswa" name="agama" defaultValue={this.props.data.agama} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Alamat</label>
                                    <input type="text" className="form-control" placeholder="Masukkan alamat siswa" name="alamat" defaultValue={this.props.data.alamat} onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="sumbit" className="btn btn-warning text-light" onClick={this.handleSubmit}>Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
