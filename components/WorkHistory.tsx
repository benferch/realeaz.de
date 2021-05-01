import Title from ':components/Title';
import Text from ':components/Text';
import Bold from ':components/Bold';
import Box from ':components/Box';
import Muted from ':components/Muted';

export const history = {
	current: {
		name: 'Effective Bytes',
		period: '2018 - now',
		description:
			'Effective Bytes is a family-owned company that provides \
      web backend development solutions. \
      My tasks consist of website creation with Drupal and \
      WordPress as well as server administration and deployment.',
	},
	previous: [],
};

export default function WorkHistory({
	current,
	previous,
}: {
	current: { name: string; period: string; description: string };
	previous: Array<any>;
}) {
	return (
		<Box className="text-black h-auto p-8 space-y-3">
			<div className="flex">
				<div className="w-auto mr-2 flex flex-col items-center">
					<div className="w-8 h-8 border-8 border-black rounded-full" />
					<div className="h-[30%] w-4 bg-black rounded-b-full mt-7 absolute" />
				</div>
				<div className="w-full">
					<div className="flex items-baseline justify-between">
						<Bold>
							<Title>{current.name}</Title>
						</Bold>
						<Muted>
							<Text>{current.period}</Text>
						</Muted>
					</div>
					<Text>{current.description}</Text>
				</div>
			</div>
			{previous.map((el) => {
				return (
					<div className="flex">
						<div className="w-auto mr-2 flex flex-col items-center">
							<div className="w-8 h-8 bg-black rounded-full" />
							<div className="h-[calc(30%+20px)] lg:h-[30%] w-4 bg-black rounded-b-full -mt-2 absolute" />
						</div>
						<div className="w-full">
							<div className="flex items-baseline justify-between">
								<Bold>
									<Title>{el[0]}</Title>
								</Bold>
								<Muted>
									<Text>{el[1]}</Text>
								</Muted>
							</div>
							<Text>{el[2]}</Text>
						</div>
					</div>
				);
			})}
		</Box>
	);
}
