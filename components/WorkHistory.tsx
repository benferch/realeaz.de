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

/* 
	Test Data:
		[
			'Google LLC',
			'2020 - now',
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		],
		[
			'Google LLC',
			'2020 - now',
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		], 
*/

export default function WorkHistory({
	current,
	previous,
}: {
	current: { name: string; period: string; description: string };
	previous: Array<any>;
}) {
	return (
		<Box className="text-black p-8 space-y-3 mt-8">
			<Bold>
				<Title level={2}>WORK</Title>
			</Bold>
			<div className="flex">
				<div className="w-auto mr-2 flex flex-col items-center">
					<div className="w-5 h-5 border-[5px] border-black rounded-full" />
					<div className="h-[17%] md:h-[10%] w-2 bg-black rounded-b-full mt-4 absolute" />
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
					<div className="flex" key={el[0]}>
						<div className="w-auto mr-2 flex flex-col items-center">
							<div className="w-5 h-5 bg-black rounded-full" />
							<div className="h-[17%] md:h-[15%] w-2 bg-black rounded-b-full -mt-2 absolute" />
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
