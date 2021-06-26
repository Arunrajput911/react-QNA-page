import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import { AskDoubt } from './askDoubt';

// import './DiscussCard.css'
export const DiscussCard = () => {
    return (
        
    <div className="scrollableContainer mt-20">
        <Redirect to="/" />          
    
       <AskDoubt />

      
    </div>   

    )
}
