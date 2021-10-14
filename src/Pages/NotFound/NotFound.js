import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
        const history = useHistory();
        const backToHome = () => {
                history.push('/home');
        }
        return (
                <div className="text-center">
                        <img src="https://i.pinimg.com/originals/25/d9/90/25d990dc7872181f5f2841533bce52d2.gif" className="img-fluid" alt="" />
                        <div className="text-center">
                                <button onClick={backToHome} className="btn btn-success btn-lg">Back To Home</button>
                        </div>
                </div>
        );
};

export default NotFound;