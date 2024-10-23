import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';

export default class CrearCoche extends Component {

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false
    }

    addCar = (e) => {
        e.preventDefault();

        let request = "api/Coches/InsertCoche";
        let url = Global.urlApiCoches + request;

        let id = parseInt(this.cajaId.current.value);
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let driver = this.cajaConductor.current.value;
        let img = this.cajaImagen.current.value;

        let coche = {
            id: id,
            marca: marca,
            modelo: modelo,
            conductor: driver,
            imagen: img
        }

        axios.post(url, coche).then(response => {
            console.log("Insertado");
            this.setState({
                status: true
            })
        })
    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>CrearCoche</h1>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Id Coche</label>
                            <input type="text" class="form-control" ref={this.cajaId} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Marca Coche</label>
                            <input type="text" class="form-control" ref={this.cajaMarca} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Modelo Coche</label>
                            <input type="text" class="form-control" ref={this.cajaModelo} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Conductor Coche</label>
                            <input type="text" class="form-control" ref={this.cajaConductor} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Imagen Coche</label>
                            <input type="text" class="form-control" ref={this.cajaImagen} />
                        </div>
                        <button onClick={this.addCar} className='btn btn-primary'>Añadir Coche</button>
                    </form>
                </div>
            )
        }

    }
}
