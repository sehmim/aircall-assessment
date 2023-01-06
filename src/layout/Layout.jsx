import React from 'react'
import { useAppContext } from '../Provider'
import Header from './Header';
import { Footer } from './Footer';

export default function Layout({children}) {

    const conext = useAppContext();

    console.log("Context -->", conext);

    return (
        <div>
            <Header />
                <div className='body-conatiner'>
                    {children}
                </div>
            <Footer />
        </div>
    )
}