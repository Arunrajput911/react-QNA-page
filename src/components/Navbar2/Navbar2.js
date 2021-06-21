import React,{useState}  from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
// import './Navbar2.css';

export const Navbar2 = () => {

    var active={
        backgound:'rgb(255, 166, 0)',
        fontWeight:'700',
        color:'#000',
        boxShadow:'1px 1px 5px #aaa'
    }

    var inActive={
        backgound:'',
        fontWeight:'',
        color:'',
        boxShadow:''
    }
    


    const [liveCss, setliveCss] = useState(active);
    const [upcomingCss, setupcomingCss] = useState(inActive);
    const [closedCss, setclosedCss] = useState(inActive)

    

    const addLiveCss = ()=>{
        setliveCss(active);
        setupcomingCss(inActive);
        setclosedCss(inActive);

    }

    const addUpcomingCss = ()=>{
        setliveCss(inActive);
        setupcomingCss(active);
        setclosedCss(inActive);

    }

    const addClosedCss = ()=>{
        setliveCss(inActive);
        setupcomingCss(inActive);
        setclosedCss(active);

    }


    

     
    return (
        <div id="tabs">
        <span id="live" class = "tab" style={{background:liveCss.backgound,fontWeight:liveCss.fontWeight,color:liveCss.color,boxShadow:liveCss.boxShadow}} onClick={addLiveCss}>
            Explore
        </span>
        <span id="upcoming" class="tab" style={{background:upcomingCss.backgound,fontWeight:upcomingCss.fontWeight,color:upcomingCss.color,boxShadow:upcomingCss.boxShadow}} onClick={addUpcomingCss} >
            Recent
        </span>
        <span id="closed" class="tab" style={{background:closedCss.backgound,fontWeight:closedCss.fontWeight,color:closedCss.color,boxShadow:closedCss.boxShadow}} onClick={addClosedCss} >
            Help Others
        </span>
    </div>
    )
}