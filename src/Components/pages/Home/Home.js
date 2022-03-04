import React from 'react';
import Bannar from '../Bannar/Bannar';
import Books from '../Books/Books';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Books/>
            <Offer/>
        </div>
    );
};

export default Home;