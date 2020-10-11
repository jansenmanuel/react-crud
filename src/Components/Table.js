import React, { Component } from 'react'
import axios from 'axios'
import ModalEdit from './ModalEdit';

export default class Table extends Component {
    state = {
        siswas: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/siswa`)
            .then(res => {
                const siswas = res.data;
                this.setState({ siswas });
            })
    }

    handleDelete = id => {
        axios.delete(`http://localhost:8080/deleteSiswa/` + id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Berhasil menghapus data siswa!');
                window.location.reload();
            })
    }

    render() {
        return (
            <div>
                <table className="table table-responsive-lg table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Tempat/Tanggal Lahir</th>
                            <th scope="col">Agama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    {this.state.siswas.length > 0 ?
                        <tbody>
                            {this.state.siswas.map((siswa, i) =>
                                <tr>
                                    <th scope="row">{siswa.id}</th>
                                    <td>{siswa.nama}</td>
                                    <td>{siswa.ttl}</td>
                                    <td>{siswa.agama}</td>
                                    <td>{siswa.alamat}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning text-light mx-1" data-toggle="modal" data-target={"#modalEdit" + siswa.id}>Edit</button>
                                        <button type="button" className="btn btn-danger mx-1" onClick={() => this.handleDelete(siswa.id)}>Delete</button>
                                        <div className="modal fade" id={"modalEdit" + siswa.id} tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
                                            <ModalEdit data={siswa} key={i} />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        :
                        <tbody>
                            <tr>
                                <td colSpan="6">
                                    <h1 className="text-center">Tidak ada data siswa!</h1>
                                    <p className="text-center">Silahkan menambahkan data siswa!</p>
                                </td>
                            </tr>
                        </tbody>
                    }
                </table>
            </div>
        )
    }
}
