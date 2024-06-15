import React from 'react';
import { OrbitControls } from '@react-three/drei';

const Example = () => {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxGeometry args={[0.1,0.5,0.5]} />
				<meshNormalMaterial />
			</mesh>
		</>
	);
};

export default Example;
