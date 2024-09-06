import { Suspense, useRef, useState } from 'react';
import Banana from './Banana';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { useThree } from '@react-three/fiber';

function Experience({ count, depth, fov }) {
	const { camera, gl } = useThree();
	return (
		<Suspense fallback={null}>
			{/* <orbitControls args={[camera, gl.domElement]} /> */}
			{Array.from({ length: count }, (_, i) => (
				<Banana
					key={i}
					scale={1}
					z={-((i / count) * depth) - 20}
				/>
			))}

			{/* PostProcessing */}
			<EffectComposer>
				<DepthOfField
					target={[0, 0, depth / 2]}
					focalLength={0.1}
					bokehScale={5}
					height={800}
				/>
			</EffectComposer>
		</Suspense>
	);
}

export default Experience;
