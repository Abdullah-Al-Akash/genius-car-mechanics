import React from 'react';

const Service = (props) => {
        const { name, img, price, description } = props.service;
        return (
                <div>
                        <div className="col">
                                <div className="card h-100">
                                        <img src={img} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{description}</p>
                                                <h4 className="text-success">Price: ${price}</h4>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Service;