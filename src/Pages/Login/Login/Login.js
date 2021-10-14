import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
        const { signInUsingGoogle } = useAuth();
        return (
                <div className="mt-5 pt-5 text-center">
                        <h3>Please Login Here</h3>
                        <button onClick={signInUsingGoogle} className="btn btn-warning btn-lg fw-bolder mt-5">
                                <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" className="rounded-circle me-4" width="30" alt="" /> Sign In With Google</button>
                </div>
        );
};

export default Login;