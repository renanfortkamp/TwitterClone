import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '..//Context//Context.js';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [context,setContext] = useContext(Context);
    const [userFound, setUserFound] = useState(true);
    const navigate = useNavigate();
    
    const Login = (e) => {
        e.preventDefault();
        fetch("http://localhost:5066/api/Users")
            .then(e => e.json())
            .then(data => {
                data.forEach(user => {
                    if (user.email === email && user.password === password) {
                        setUserFound(true);
                        console.log(user);
                        setContext(user);
                        navigate('/feed');
                        
                    }else{
                        setUserFound(false);
                    }
                })
            });

    }

    return (

        <div className='login' style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", border: "solid 1px red" }}>
            <h1>Login</h1>
            
            <form onSubmit={(e) => { Login(e) }}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {userFound ? <p>Usuário encontrado</p> : <p>Usuário não encontrado</p>}
            <Link to="/register">Register</Link>
            

        </div>
    );
}