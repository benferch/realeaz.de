import CustomImage from './Image';

export default function Profile() {
	return (
		<div
			id="head"
			className="w-48 h-48 mb-4 overflow-hidden dark:border-gray-50 border-gray-900 border-solid border-2 rounded-full"
		>
			<CustomImage
				source={'/assets/images/head.png'}
				height={192}
				width={192}
				className="object-cover transform scale-125 translate-y-6 translate-x-2"
				alt="Image of a head"
			/>
		</div>
	);
}
