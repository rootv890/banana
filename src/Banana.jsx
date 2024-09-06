/* eslint-disable react/prop-types */
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export default function Banana({ z, scale }) {
	const { nodes, materials } = useGLTF('/banana.glb');
	const { viewport, camera } = useThree();
	const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
	let data = {
		x: THREE.MathUtils.randFloatSpread(2),
		y: THREE.MathUtils.randFloatSpread(height),
		rX: Math.random() * Math.PI,
		rY: Math.random() * Math.PI,
		rZ: Math.random() * Math.PI,
	};
	const ref = useRef();
	useFrame(() => {
		ref.current.rotation.set(
			(data.rX += 0.001),
			(data.rY += 0.0001),
			(data.rZ += 0.001),
		);
		ref.current.position.set(data.x * width, (data.y += 0.01), z);
		if (data.y > width) {
			data.y = -width;
		}
	});

	return (
		<mesh
			scale={scale * 6}
			ref={ref}
			dispose={null}
			castShadow
			receiveShadow
			rotation-y={-Math.PI}
			geometry={nodes.banana.geometry}
			material={materials.banana_material}
		/>
	);
}

useGLTF.preload('/banana.glb');
