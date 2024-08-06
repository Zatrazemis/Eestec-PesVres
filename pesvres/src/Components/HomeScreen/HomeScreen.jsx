import React from 'react';
import ReactDOM from 'react-dom/client';
import './HomeScreen.css';
//import logo from './pesvres/src/logo.svg';
//'../../../logo.svg';
export default function(){
    return(
        <div className="home">

            

            <nav>
                <button className='buttons'>
                    Παίξε!
                </button>

                <button className='buttons'>
                    Ρυθμίσεις
                </button>

                <button className='buttons'>
                    Κανόνες
                </button>
            </nav>

            <footer>
                <button className='footerButtons'>
                        Instagram
                </button>

                <button className='footerButtons'>
                        Facebook
                </button>

                <button className='footerButtons'>
                        Youtube
                </button>
            </footer>

        </div>
    )
}