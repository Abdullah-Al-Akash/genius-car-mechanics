import React from 'react';

const Expert = (props) => {
        const { name, img, expertize } = props.expert;
        return (
                <div>
                        <div className="col">
                                <div className="card h-100">
                                        <img src={img} className="img-fluid rounded-circle mx-auto mt-3 border border-dark border-3" width="210" alt="..." />
                                        <div className="card-body text-center">
                                                <h5 className="card-title" style={{ height: '50px' }}>{name}</h5>
                                                <h4 className="text-danger">{expertize}</h4>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Expert;