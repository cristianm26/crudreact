import React, { useState } from 'react'
import Axios from 'axios'
const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [salario, setSalario] = useState('');

    const registrar = async (e) => {
        e.preventDefault();
        const nuevoEmpleado = { nombre, apellido, salario };
        const respuesta = await Axios.post('http://localhost:4000/api', nuevoEmpleado);
        const mensaje = respuesta.data.mensaje;
        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="container col-md-3 mt-4">

            <form onSubmit={registrar}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Nombre</label>
                    <input type="text" required className="form-control" id="exampleInputEmail1" placeholder="Ingrese su  Nombre" onChange={(e) => setNombre(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Apellido</label>
                    <input type="text" required className="form-control" id="exampleInputPassword1" placeholder="Ingrese su Apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputSalario" className="form-label">Salario</label>
                    <input type="text" required className="form-control" id="exampleInputSalario" placeholder="Ingrese el Salario" onChange={(e) => setSalario(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Formulario
