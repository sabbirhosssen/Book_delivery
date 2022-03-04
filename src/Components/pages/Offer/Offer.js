import React from 'react';
import { Row } from 'react-bootstrap';
import OfferData from './OfferData';

const Offer = () => {
    // const [offers,setOffers]=useState([])
    // useEffect(()=>{
    //     fetch('./BookOffer.json')
    //     .then(res=>res.json())
    //     .then(data=>setOffers(data))
    // },[])
    // console.log(offers)
    return (
        <div>
            <h1 className='text-white m-5' >OFFERS </h1>
            <h1 className='text-danger m-5' >Discount 25%  </h1>
            <Row xs={1} md={4} className=" w-100 p-5  m-0">
    
            <OfferData
             key="1"
             img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgmLvrpFogaLn587_tcKDqMYSTTldT_gxrAag9R-PCpXEUNrfDXQho31Wv1MfTHGMRZw&usqp=CAU"
             title ="The Way Of the Nameless"
             price= "549"
             chanel= "GRAHAM DOUGLESS"
            />
            <OfferData
              key= "2"
              img= "https://assets.teenvogue.com/photos/5cd4384fac4d9e712fe2ebb0/2:3/w_1852,h_2778,c_limit/The%20Gravity%20of%20Us_.jpg"
              title="The Gravity Of Us"
              price= "340"
              chanel= "PHIL STAMPER"
            />
            <OfferData
            key="3"
            img= "https://media.illustrationx.com/images/artist/RohanEason/106234/watermark/1300/the-hollow-woods.jpg"
            title="The Hellow Woods"
            price= "340"
            chanel= "ROHAN EASON"
            />
            <OfferData
           key= "4"
           img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0CFi-HE0eEF0iT-iPUE82_XUz5ZyF9c6boEgHZY7CtaKVy3d1s15_6jdleCqoLxBJyg&usqp=CAU"
           title="All This Time"
           price= "740"
           chanel= "RACHAD LIPISOCORT"
            />
    
</Row>
        </div>
    );
};

export default Offer;