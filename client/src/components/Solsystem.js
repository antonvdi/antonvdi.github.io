import GravitationsLegeme from "./GravitationsLegeme";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { PlaneGeometry } from "three";


const planetData = [];
const totalPlanets = 7;

const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () => `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

for (let i = 0; i < totalPlanets; i++) {
    if (i === 0) {
        planetData.push({
            id: i,
            color: "#E1DC59",
            xPos: 0,
            zPos: 0,
            size: 2,
            speed: 0,
            offset: 0,
            mass: 10000
          });
    } else {
        planetData.push({
            id: i,
            color: randomColor(),
            xPos: (i + 1.5) * 4,
            zPos: (i + 1.5) * 2,
            size: random(0.5, 1),
            speed: random(0.5, 0.2),
            offset: random(0, Math.PI * 2),
            mass: random(50, 100),
          });
    };
}

export default function Solsystem() {
    const [currentPlanetData, setCurrentPlanetData] = useState(planetData);

    return (
    <Canvas camera={{ position: [0, 50, 50], fov: 75 }}>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <OrbitControls />
        {planetData.map((planet) => (
            <GravitationsLegeme initialData={planet} key={planet.id} currentPlanetData={currentPlanetData} setCurrentPlanetData={setCurrentPlanetData} />
        ))}
    </Canvas>
    );
}