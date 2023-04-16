import React, { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import './overview-model.styles.scss';
import { useState } from 'react';
import { t } from 'i18next';

function Model(props) {
  const { scene } = useGLTF('/model.glb');

  return <primitive object={scene} />;
}

function Control() {
  return (
    <OrbitControls enableZoom={false} minPolarAngle={1.2} maxPolarAngle={1.2} />
  );
}

export default function OverviewModel() {
  const [overlayDisplay, setOverlayDisplay] = useState('');

  const handleOverlay = () => {
    setOverlayDisplay('none');
  };

  return (
    <>
      <div
        className='overview-model-overlay'
        style={{ display: overlayDisplay }}
        onMouseDown={() => handleOverlay()}
      >
        <div className='overlay'></div>
        <span>{t('overview.model.lbl')}</span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          camera={{ position: [0, 2, 5] }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} />
          <rectAreaLight />
          <Model />
          <Control />
        </Canvas>
      </Suspense>
    </>
  );
}

useGLTF.preload('/model.glb');
