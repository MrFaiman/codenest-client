const Card = ({ title, subtitle, children }: any): JSX.Element => {
	return (
		<div className="flex flex-col items-center gap-[3rem] bg-secondary_dark border-2 border-[#2f2f2f] rounded-xl w-[30rem] p-[2rem]  min-h-[30rem]">
			<div className="flex flex-col gap-[1rem] justify-center items-center w-full text-center font-extrabold">
				<div className="flex flex-col items-center gap-[1rem]">
					<span className="text-4xl font-bold gradient-1-text tracking-tighter">
						{title}
					</span>
					<span className="text-xl font-bold text-center">
						{subtitle}
					</span>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Card;
