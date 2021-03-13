import { Canvas } from 'react-three-fiber';

export default function Profile() {
	return (
		<div
			id="head"
			className="w-48 h-48 dark:border-gray-50 border-gray-900 border-solid border-2 rounded-full mb-4 overflow-hidden"
		>
			<Canvas>
				<ambientLight intensity={0.1} />
				<directionalLight position={[40, 10, 5]} intensity={0.2} />
			</Canvas>
		</div>
	);
}
