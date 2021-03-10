import React,{useRef,useEffect} from 'react';
import './mouse.scss';
import gsap from 'gsap';
const Mouse=(props)=>{
    const mouse=useRef(null);
    
    document.addEventListener('mousemove',(e)=>{
        gsap.to(mouse.current,{x:e.clientX,y:e.clientY});
    })
    let colors=['#8c0000','#bd2000','#fa1e0e','#ffbe0f'];
    useEffect(()=>{
        
        gsap.to(mouse.current,{color:'#8c0000'});
    },[])
    return (
        
            <div ref={mouse} className="Mouse">
                
            </div>
        
    );
}

export default Mouse;