import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function calculateOneForceOnMe(myPlanet, otherPlanet) {
    let dx = otherPlanet.xPos - myPlanet.xPos;
    let dy = otherPlanet.yPos - myPlanet.yPos;
    let distance =  Math.sqrt((dx*dx)+(dy*dy));
    if (distance === 0) {
        return {fx: 0, fy: 0};
    }
    f = 0.0001 * myPlanet.mass * otherPlanet.mass / (distance*distance);
}

function calculateForceOnMe(myPlanet, allPlanets) {

};

export default function GravitationsLegeme({ initialData: { id, color, xPos, zPos, size, speed, offset }, currentPlanetData, setCurrentPlanetData }) {
    const planetRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        const x = xPos * Math.sin(t);
        const z = xPos * Math.cos(t);
        planetRef.current.position.x = x;
        planetRef.current.position.z = z;
      });

    return (
    <mesh ref={planetRef} >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
    </mesh>
    );
}