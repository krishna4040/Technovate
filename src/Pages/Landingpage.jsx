import React from 'react'
import Herobanner from '../Components/Herobanner'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { herobanner } from '../Utils/Backgroundtype';
import HackInfo from './HackInfo';
import Theme from './Theme';
import EligibilityCriteria from './EligibilityCriteria';

function Landingpage() {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const herobanneroption = useMemo(
    () => (
      herobanner
    ),
    []
  );

  return (
    <>

    {init && (
      <>
      <div className="relative w-screen h-screen">
        <Particles id="tsparticles" options={herobanneroption} className="absolute inset-0">
        </Particles>
        <div className="absolute w-screen h-auto flex flex-col items-center justify-center">
        <Herobanner />
        <HackInfo />
        <Theme />
        <EligibilityCriteria />
        </div>
      </div>
      
      </>
    )}
    </>
  )
}

export default Landingpage