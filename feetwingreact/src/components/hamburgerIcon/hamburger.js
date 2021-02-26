import React,{useEffect} from 'react';
import './hamburger.scss';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import {connect} from 'react-redux';
import * as ActionType from '../../store/actions';
const Hamburger=(props)=>{

    const HamburgerVariant={
        hidden:{
            opacity:0,
            scale:0,
            x:-50
        },
        visible:
        {
            opacity:1,
            scale:1,
            x:0
        }
    }
    useEffect(()=>{

        // when sidedrawer is opened
        if(props.sideDrawer)
        {
            gsap.to('#Rectangle_8',{rotate:132.5,x:26});
            gsap.to('#Rectangle_11',{rotate:44,y:-13,x:6});
            document.querySelector('body').style.overflow="hidden";
            document.querySelector('body').style.height="100vh";

            document.querySelector('.Outerstroke').style.strokeDashoffset=0;
        }
        // when it is closed
        else
        {
            gsap.to('#Rectangle_8',{rotate:0,x:0});
            gsap.to('#Rectangle_11',{rotate:0,y:0,x:0});
            document.querySelector('body').style.overflow="visible";
            document.querySelector('body').style.height="auto";
            document.querySelector('.Outerstroke').style.strokeDashoffset=document.querySelector('.Outerstroke').getTotalLength();

        }

    },[props.sideDrawer])
    const toggle=()=>{
        // when sideDrawer is closed
        if(!props.sideDrawer)
        {
            gsap.to('#Rectangle_8',{rotate:132.5,x:26});
            gsap.to('#Rectangle_11',{rotate:44,y:-13,x:6});
            document.querySelector('.Outerstroke').style.strokeDashoffset=0;
        }
        // when it is open
        else
        {
            gsap.to('#Rectangle_8',{rotate:0,x:0});
            gsap.to('#Rectangle_11',{rotate:0,y:0,x:0});
            document.querySelector('.Outerstroke').style.strokeDashoffset=document.querySelector('.Outerstroke').getTotalLength();

        }
        props.setSideDrawer();
        
    }
    
    function onHover()
    {
        document.querySelector('.Outerstroke').style.strokeDashoffset=0;
    }
    function onHoverOut()
    {
        if(!props.sideDrawer)
        document.querySelector('.Outerstroke').style.strokeDashoffset=document.querySelector('.Outerstroke').getTotalLength();
    }
    return(
        <motion.div  onPointerEnter={onHover} onPointerLeave={onHoverOut} className="Hamburger"  onClick={toggle} variants={HamburgerVariant} initial="hidden" animate="visible" transition={{type:'spring',duration:0.7,stiffness:80,delay:0.2}} >
            
            
            
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  className="Outerstroke" d="M27.5 53.5C41.8594 53.5 53.5 41.8594 53.5 27.5C53.5 13.1406 41.8594 1.5 27.5 1.5C13.1406 1.5 1.5 13.1406 1.5 27.5C1.5 41.8594 13.1406 53.5 27.5 53.5Z" fill="#E8C3FF" stroke="#766AFF" strokeWidth="3"/>
<path id="Rectangle_8" d="M12.6471 22.1131C12.6471 21.1735 13.4088 20.4117 14.3485 20.4117H40.8901C41.8298 20.4117 42.5915 21.1735 42.5915 22.1131C42.5915 23.0528 41.8298 23.8145 40.8901 23.8145H14.3485C13.4088 23.8145 12.6471 23.0528 12.6471 22.1131Z" fill="#7D55EF"/>
<path id="Rectangle_11" d="M12.6471 33.4465C12.6471 32.5068 13.4088 31.7451 14.3485 31.7451H40.8901C41.8298 31.7451 42.5915 32.5068 42.5915 33.4465C42.5915 34.3861 41.8298 35.1479 40.8901 35.1479H14.3485C13.4088 35.1479 12.6471 34.3861 12.6471 33.4465Z" fill="#7D55EF"/>
</svg>
        
        




            
        </motion.div>
    );
}

const mapStateToProps=(state)=>{

    return {
        sideDrawer:state.sideDrawer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setSideDrawer:()=>{dispatch({type:ActionType.SET_SIDEDRAWER})},
        setOverlay:()=>{dispatch({type:ActionType.SET_OVERLAY})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hamburger);