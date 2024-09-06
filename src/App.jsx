import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Experience from './Experience';
import { Environment } from '@react-three/drei';

extend({ OrbitControls });

function App() {
	return (
		<>
			<Canvas
				gl={{ alpha: false }}
				camera={{
					near: 0.01,
					far: 110,
				}}
			>
				<color
					attach={'background'}
					args={['#f0d03b']}
				/>
				<spotLight
					position={[10, 5, 10]}
					intensity={1}
				/>

				<Experience
					count={100}
					depth={80}
					fov={30}
				/>
				<Environment preset="sunset" />
				{/* <ambientLight intensity={0.5} /> */}
			</Canvas>
		</>
	);
}

export default App;
