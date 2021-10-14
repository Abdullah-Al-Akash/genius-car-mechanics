import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = (props) => {
        const { id, name, img, price, description } = props.service;
        const history = useHistory();
        const booking = () => {
                history.push(`/booking/${id}`);
        }
        return (
                <div>
                        <div className="col">
                                <div className="card h-100">
                                        <img src={img} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{description}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                        <h4 className="text-success">Price: ${price}</h4>
                                                        <button onClick={booking} className="btn btn-warning fw-bolder btn-lg">Book Now</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Service;