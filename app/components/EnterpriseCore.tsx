"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function clampRange(value: number, min: number, max: number) {
  return Math.max(0, Math.min(1, (value - min) / (max - min)));
}

// 01. DATA LAYER (Dağınık Veri Parçacıkları)
function DataLayer({ progress }: { progress: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const count = 90;

  const { initialPositions, targetPositions } = useMemo(() => {
    const init = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      init[i * 3] = (Math.random() - 0.5) * 8;
      init[i * 3 + 1] = (Math.random() - 0.5) * 8;
      init[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const radius = 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      target[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      target[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      target[i * 3 + 2] = radius * Math.cos(phi);
    }
    return { initialPositions: init, targetPositions: target };
  }, []);

  const currentPositions = useMemo(() => new Float32Array(count * 3), []);

  useFrame(() => {
    if (!groupRef.current) return;
    const p = progress.current;
    const stage = clampRange(p, 0.0, 0.22);

    for (let i = 0; i < count * 3; i++) {
      currentPositions[i] = THREE.MathUtils.lerp(
        initialPositions[i],
        targetPositions[i],
        stage
      );
    }

    const geo = groupRef.current.children[0] as THREE.Points;
    if (geo && geo.geometry) {
      geo.geometry.attributes.position.needsUpdate = true;
    }

    const opacity = p < 0.28 ? 1 - clampRange(p, 0.2, 0.28) : 0;
    if (geo && geo.material) {
      (geo.material as THREE.Material).opacity = opacity;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={currentPositions} stride={3}>
        <PointMaterial transparent color="#64748b" size={0.06} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

// 02 -> 04 NETWORK & INTELLIGENCE LAYER
function NetworkLayer({ progress }: { progress: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(
    () => [
      new THREE.Vector3(1.8, 0.6, 0.5),
      new THREE.Vector3(-1.6, 1.2, -0.4),
      new THREE.Vector3(1.2, -1.4, 0.8),
      new THREE.Vector3(-1.5, -0.9, -0.6),
      new THREE.Vector3(0, 1.8, -0.2),
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const p = progress.current;
    const t = state.clock.getElapsedTime();

    const visibility = clampRange(p, 0.18, 0.28) * (1 - clampRange(p, 0.8, 0.88));
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1.2, clampRange(p, 0.2, 0.75)));

    const speed = THREE.MathUtils.lerp(0.05, 0.35, clampRange(p, 0.55, 0.8));
    groupRef.current.rotation.y = t * speed;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;

    const { x, y } = state.pointer;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x * 0.4, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y * 0.4, 0.05);

    groupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).material) {
        const mat = (child as THREE.Mesh).material as THREE.Material;
        mat.transparent = true;
        mat.opacity = visibility;
      }
    });
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent />
        </mesh>
      </Float>

      {nodes.map((pos, idx) => (
        <group key={idx}>
          <mesh position={pos}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={idx % 2 === 0 ? "#38bdf8" : "#a855f7"} />
          </mesh>
          <Line
            points={[[0, 0, 0], [pos.x, pos.y, pos.z]]}
            color={idx % 2 === 0 ? "#00f0ff" : "#a855f7"}
            lineWidth={1}
            transparent
            opacity={0.4}
          />
        </group>
      ))}
    </group>
  );
}

// 05. OBSERVATION / LAB LAYER
function LabLayer({ progress }: { progress: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    const p = progress.current;
    const labStage = clampRange(p, 0.8, 1.0);

    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(0.0, 2.2, labStage));
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;

    if (meshRef.current.material) {
      (meshRef.current.material as THREE.Material).opacity = labStage * 0.6;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2.5, 0.01, 16, 100]} />
      <meshBasicMaterial color="#10b981" transparent wireframe />
    </mesh>
  );
}

export default function EnterpriseCore() {
  const progress = useRef(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          progress.current = self.progress;
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <DataLayer progress={progress} />
        <NetworkLayer progress={progress} />
        <LabLayer progress={progress} />
      </Canvas>
    </div>
  );
}