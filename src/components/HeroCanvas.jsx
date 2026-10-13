import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/* ------------------------------------------------------------------ */
/*  Lightweight floating pastel shapes with subtle mouse parallax.     */
/*  Cheap by design: simple primitives only, no textures or models,    */
/*  pastel meshStandardMaterial, capped DPR via the Canvas props.      */
/* ------------------------------------------------------------------ */

const PASTELS = {
  pink: '#f8c3d7',
  lavender: '#c9bcf7',
  sky: '#aed0f7',
  peach: '#f7d3ae',
  mint: '#bfe6c8',
};

function useFinePointer() {
  // Render only on fine-pointer devices; avoids creating a WebGL context
  // on touch screens where the canvas is hidden anyway.
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

function FloatingShapes({ reducedMotion }) {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || reducedMotion) return;
    const t = state.clock.elapsedTime;
    // Gentle drift toward the cursor (lerped so it feels floaty, not glued)
    g.position.x += (target.current.x * 0.55 - g.position.x) * Math.min(1, delta * 2.2);
    g.position.y += (target.current.y * 0.35 - g.position.y) * Math.min(1, delta * 2.2);
    // Slow individual tumble + bob per child
    g.children.forEach((child, i) => {
      child.rotation.x += delta * (0.12 + i * 0.03);
      child.rotation.y += delta * (0.16 - i * 0.02);
      if (child.userData.baseY === undefined) child.userData.baseY = child.position.y;
      child.position.y = child.userData.baseY + Math.sin(t * 0.7 + i * 1.7) * 0.16;
    });
  });

  const mat = (color) => (
    <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} flatShading />
  );

  return (
    <group ref={group}>
      {/* Hero piece: soft pink torus knot, off to the left behind the mockup */}
      <mesh position={[-3.6, 0.55, -1.2]}>
        <torusKnotGeometry args={[0.85, 0.26, 110, 14]} />
        {mat(PASTELS.pink)}
      </mesh>
      {/* Scattered pastel icosahedrons */}
      <mesh position={[3.7, 1.15, -0.6]}>
        <icosahedronGeometry args={[0.52, 0]} />
        {mat(PASTELS.lavender)}
      </mesh>
      <mesh position={[3.1, -1.35, -1.4]}>
        <icosahedronGeometry args={[0.38, 0]} />
        {mat(PASTELS.sky)}
      </mesh>
      <mesh position={[-2.6, -1.45, -1.8]}>
        <icosahedronGeometry args={[0.44, 0]} />
        {mat(PASTELS.peach)}
      </mesh>
      <mesh position={[0.4, 1.85, -2.2]}>
        <icosahedronGeometry args={[0.3, 0]} />
        {mat(PASTELS.mint)}
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  const finePointer = useFinePointer();
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No fine pointer (touch) -> skip the canvas entirely (also hidden via CSS).
  if (!finePointer) return null;

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 9], fov: 42 }}
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Soft studio lighting, tuned for the bright aesthetic */}
      <ambientLight intensity={0.85} />
      <hemisphereLight args={['#ffffff', '#e6edfb', 0.55]} />
      <directionalLight position={[5, 8, 6]} intensity={1.15} />
      <directionalLight position={[-6, 3, 4]} intensity={0.35} color="#e9d8ff" />
      <FloatingShapes reducedMotion={reducedMotion} />
    </Canvas>
  );
}
