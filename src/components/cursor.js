import React, { useState, useEffect } from 'react'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.pageX, y: e.pageY });
    };

    return <div className="cursor"
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`
        }} />
}

export default Cursor;



/*
const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    const onMouseMove = event => {
        const {pageX: x, pageY: y} = event
        setMousePosition({x,y})
    }

    useEffect(()=>{
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])
*/