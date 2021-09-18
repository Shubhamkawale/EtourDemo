import Image from 'react-bootstrap/Image'



import React, { Component } from 'react'

export class AboutUs extends Component {
    render() {
        return (
            <div>
              <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/travel.jpg"
                            />
                            <br/>
                            <p class=" text-center fs-2 ">“Travel is the only thing you buy that makes you richer” </p>
                            
                            
                            <div class="container">
                                <p class="text-justify fs-5">
                             We, at ‘E-tour’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. 
                             We have been moving excellent encounters for a considerable length of time through our cutting edge planned occasion 
                             bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with 
                             extraordinary travel encounters. We aspire to sell beautiful expirences through our state-of-the-art designed holiday packages 
                             and other essential travel services. We inspire our customers to live a rich life, full of unforgettable travel experiences.</p>
                             <br/>
                             <p class="text-justify fs-5">
                            Our mission is not just to be a travel agency which helps you book a holiday; we want to be your travel partner who would go an
                            extra mile to help you choose an ideal destination and learn more about the place you have been dreaming to visit. 
                            Since holidays are more about personal choices and interests, we bring to you customizable tour packages as well. We give you the 
                            prerogative to pick and choose anything that matches your interest. No matter how many travel experiences we sell every day,
                            we ensure that you are the protagonist of your own travel story.

                            </p>
                            <br/>
                            <p class="text-justify fs-5">
                            It’s not the bragging game but we truly are the all-rounders of holidays and we can vouch for that. Travel anywhere in the world, 
                            your flight, hotel booking, sightseeing and most importantly your comfort is our responsibility. Our tour packages in India will 
                            acquaint you with serene backwaters of Kerala, mystic hills of Ladakh, the grandeur of Manipur, untouched beauty of North East and 
                            carefree vibes of Kashmir. Along with tailor-made packages for all the renowned destinations in India, we have tour packages for intrepid 
                            travellers who love walking the offbeat paths. With us, you can explore the lush green and refreshing beauty of Konkan and the scenic hills
                            and valleys of West Bengal. It goes without saying that these are just a few pearls in our holiday treasure box.
                            </p>
                            </div>
                            <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default AboutUs
