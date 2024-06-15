import { useState } from 'react';
import './App.css';
import Example from './components/Example';
import { Test } from './components/Test';
import { Canvas } from '@react-three/fiber';

function App() {
	return (
		<>
			<Canvas dpr={[1, 10]} camera={{ position: [0, 0, 5], fov: 75 }}>
				{/* <Example /> */}
				<Test />
			</Canvas>
		</>
	);
}

export default App;
