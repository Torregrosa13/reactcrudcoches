import React, { Component } from 'react'
import Global from "./Global"
import axios from "axios"
import loading from "./../assets/images/loading.jpg"

export default class HomeCoches extends Component {

    cajaBuscar = React.createRef();

    state = {
        coches: [],
        status: false
    }

    loadCoches = () => {
        let request = "api/coches";
        let url = Global.urlApiCoches + request
        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    findCoche = (e) =>{
        e.preventDefault();
        let id = this.cajaBuscar.current.value;
        let request = "api/Coches/FindCoche/" + id;
        

    }

    render() {
        if (this.state.status == false) {
            return (<img src={loading}></img>)
        } else {

            return (
                <div>
                    <h1>HomeCoches</h1>
                    <div>
                        <label>Buscar por id</label>
                        <input type='text' ref={this.cajaBuscar}></input>
                        <button className='btn btn-dark'>Buscar</button>
                    </div>
                    <table className='table table-light table-hover align-middle'>
                        <thead className='table table-dark'>
                            <tr>
                                <td>Marca</td>
                                <td>Modelo</td>
                                <td>Conductor</td>
                                <td>Imagen</td>
                                <td>Modificar</td>
                                <td>Eliminar</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img src={coche.imagen} style={{ width: "250px", height: "150px" }}></img></td>
                                    <td><button className='btn btn-primary'>Modificar</button></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
