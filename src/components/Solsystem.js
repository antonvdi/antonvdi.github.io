import GravitationsLegeme from "./GravitationsLegeme";
import React, { useEffect, useState } from 'react';

export default function Solsystem() {
    const [bodies, setBodies] = useState([{xPos: 500, yPos: 500, radius: 25, color:"#0072b1"}]);
    const [time, setTime] = useState(0);

    const calculateNewPosition = () => {
        let newBodies = [];
        bodies.forEach(body => {
            let newBody = {radius: body.radius, color: body.color};
            newBody.xPos = body.xPos + 100 * Math.sin(time);
            newBody.yPos = body.yPos + 100 * Math.cos(time);
            newBodies.push(newBody);
            console.log(newBody);
        });
        setBodies(newBodies);
    }
    
    return (
    <div>
        {bodies.map((body) => {
            return (<GravitationsLegeme xPos={body.xPos} yPos={body.yPos} radius={body.radius} color={body.color}></GravitationsLegeme>)
        })}
        
    </div>
    );
}