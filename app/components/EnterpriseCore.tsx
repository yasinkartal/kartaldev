
"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProgressRef = React.MutableRefObject<number>;

function clampRange(value: number, min: number, max: number) {
  return Math.max(0, Math.min(1, (value - min) / (max - min)));
}

// 01. DATA LAYER
function DataLayer({ progress }: { progress: ProgressRef }) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const count = 90;

  const { initialPositions, targetPositions, currentPositions } =
    useMemo(() => {
      const initial = new Float32Array(count * 3);
      const target = new Float32Array(count * 3);
      const current = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const index = i * 3;

        initial[index] = (Math.random() - 0.5) * 8;
        initial[index + 1] = (Math.random() - 0.5) * 8;
        initial[index + 2] = (Math.random() - 0.5) * 8;

        const radius = 1.6;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        target[index] = radius * Math.sin(phi) * Math.cos(theta);
        target[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
        target[index + 2] = radius * Math.cos(phi);
      }

      current.set(initial);

      return {
        initialPositions: initial,
        targetPositions: target,
        currentPositions: current,
      };
    }, []);

  const lastStage = useRef(-1);
  const lastOpacity = useRef(-1);

  useFrame(() => {
    const points = pointsRef.current;
    const material = materialRef.current;

    if (!points || !material) return;

    const p = progress.current;
    const stage = clampRange(p, 0, 0.22);

    // Konumlar yalnızca aşama değiştiğinde güncellenir.
    if (Math.abs(stage - lastStage.current) > 0.0001) {
      for (let i = 0; i < count * 3; i++) {
        currentPositions[i] = THREE.MathUtils.lerp(
          initialPositions[i],
          targetPositions[i],
          stage
        );
      }

      points.geometry.attributes.position.needsUpdate = true;
      lastStage.current = stage;
    }

    const opacity =
      p < 0.28 ? 1 - clampRange(p, 0.2, 0.28) : 0;

    if (Math.abs(opacity - lastOpacity.current) > 0.0001) {
      material.opacity = opacity;
      lastOpacity.current = opacity;
    }

    points.visible = opacity > 0.001;
  });

  return (
    <Points
      ref={pointsRef}
      positions={currentPositions}
      stride={3}
    >
      <PointMaterial
        ref={materialRef}
        transparent
        color="#64748b"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

// 02 -> 04 NETWORK & INTELLIGENCE LAYER
function NetworkLayer({ progress }: { progress: ProgressRef }) {
  const groupRef = useRef<THREE.Group>(null);
  const lastVisibility = useRef(-1);

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

  const materials = useMemo(
    () => ({
      wireframe: new THREE.MeshBasicMaterial({
        color: "#00f0ff",
        wireframe: true,
        transparent: true,
        opacity: 0,
      }),
      cyan: new THREE.MeshBasicMaterial({
        color: "#38bdf8",
        transparent: true,
        opacity: 0,
      }),
      purple: new THREE.MeshBasicMaterial({
        color: "#a855f7",
        transparent: true,
        opacity: 0,
      }),
    }),
    []
  );

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const p = progress.current;

    const visibility =
      clampRange(p, 0.18, 0.28) *
      (1 - clampRange(p, 0.8, 0.88));

    // Görünürlük yalnızca değiştiğinde güncellenir.
    if (Math.abs(visibility - lastVisibility.current) > 0.0001) {
      materials.wireframe.opacity = visibility;
      materials.cyan.opacity = visibility;
      materials.purple.opacity = visibility;

      lastVisibility.current = visibility;
    }

    group.visible = visibility > 0.001;

    if (!group.visible) return;

    const t = state.clock.getElapsedTime();

    group.scale.setScalar(
      THREE.MathUtils.lerp(
        0.5,
        1.2,
        clampRange(p, 0.2, 0.75)
      )
    );

    const speed = THREE.MathUtils.lerp(
      0.05,
      0.35,
      clampRange(p, 0.55, 0.8)
    );

    group.rotation.y = t * speed;
    group.rotation.x = Math.sin(t * 0.1) * 0.2;

    const { x, y } = state.pointer;

    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      x * 0.4,
      0.05
    );

    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      y * 0.4,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1.2}
      >
        <mesh material={materials.wireframe}>
          <sphereGeometry args={[1, 32, 32]} />
        </mesh>
      </Float>

      {nodes.map((pos, idx) => (
        <group key={idx}>
          <mesh
            position={pos}
            material={
              idx % 2 === 0
                ? materials.cyan
                : materials.purple
            }
          >
            <sphereGeometry args={[0.07, 16, 16]} />
          </mesh>

          <Line
            points={[
              [0, 0, 0],
              [pos.x, pos.y, pos.z],
            ]}
            color={
              idx % 2 === 0 ? "#00f0ff" : "#a855f7"
            }
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
function LabLayer({ progress }: { progress: ProgressRef }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    const material = materialRef.current;

    if (!mesh || !material) return;

    const stage = clampRange(progress.current, 0.8, 1);

    mesh.visible = stage > 0.001;

    if (!mesh.visible) return;

    mesh.scale.setScalar(
      THREE.MathUtils.lerp(0, 2.2, stage)
    );

    mesh.rotation.z =
      state.clock.getElapsedTime() * 0.05;

    material.opacity = stage * 0.6;
  });

  return (
    <mesh ref={meshRef} visible={false}>
      <torusGeometry args={[2.5, 0.01, 16, 100]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#10b981"
        transparent
        wireframe
      />
    </mesh>
  );
}

// MAIN 3D COMPONENT
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
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          color="#00f0ff"
        />

        <DataLayer progress={progress} />
        <NetworkLayer progress={progress} />
        <LabLayer progress={progress} />
      </Canvas>
    </div>
  );
}
