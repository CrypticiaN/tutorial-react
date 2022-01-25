import React, { Component } from 'react';

class Tabla extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Clark</td>
                    <td>Kent</td>
                </tr>
                <tr>
                    <td>Bruce</td>
                    <td>Wayne</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>Parker</td>
                </tr>
                <tr>
                    <td>Selina</td>
                    <td>Kyle</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Tabla;