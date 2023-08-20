import Card from "./Card";

const Steps = (): JSX.Element => {
	return (
		<Card
			title={"How does it work"}
			subtitle={
				"All you need to do is to choose one of the existing coding challenges or create one of your own!"
			}
		>
			<div className="w-full flex flex-col items-center gap-[1rem] justify-center">
				<div className="flex flex-row gap-[5rem] items-center justify-center">
					<StepNumerical number={1} text={"Sign up for free"} />
					<StepNumerical number={2} text={"Build your class"} />
					<StepNumerical number={3} text={"Start coding!"} />
				</div>
			</div>
		</Card>
	);
};

const StepNumerical = ({ number, text }: { number: number; text: string }) => {
	return (
		<div className="flex flex-col items-center gap-[1.5rem] max-w-[6rem] step relative z-10">
			<div className="w-[2rem] h-[2rem] font-extrabold flex justify-center items-center rounded-full">
				{number}
			</div>
			<span className="font-bold text-center">{text}</span>
		</div>
	);
};

export default Steps;
