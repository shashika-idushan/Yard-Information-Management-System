import React, { useEffect, useRef, useState } from "react";
import '../styles/common.css'

function CustomerPage() {
    return (
        <div className="row col-lg-12 customer" style={{ height: '100%', margin: '0', padding: '0' }}>
            <div className="col-lg-6  d-flex flex-column justify-content-center align-items-center">
                <div className="p-3" style={{ width: '80%' }}>
                    <h1 className="page-title">Customer</h1>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" className='form-control' />
                    </div>

                    <div className="row d-flex  justify-content-center align-items-center">
                        <button className="btn m-3">Clear</button>
                        <button className="btn m-3">Add Row</button>
                        <button className="btn m-3">Next</button>
                    </div>
                </div>

            </div>

            <div className="col-lg-6  d-flex flex-column  justify-content-center align-items-center">
                <table class="table table-light mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Customer ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default CustomerPage;