import React, { useContext } from 'react';
import { userContext } from '../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(userContext)
    console.log(user)
    return (
        <div>
            <h3>This is Home page {}</h3>
        </div>
    );
};

export default Home;