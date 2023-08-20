import Steps from "@components/Steps";
import { Database, Globe } from "lucide-react";
import Button from "@components/Button";
import { Card } from "@components";

const Landing = (): JSX.Element => {
	return (
		<div className="gradient-2 p-[5rem] flex flex-col gap-[5rem] h-screen">
			<div className="flex flex-col items-center">
				<span className="text-7xl font-bold gradient-1-text tracking-tighter">
					CodeNest
				</span>
				<span className="text-m font-bold whitespace-nowrap">
					Create • Share • Teach • Study
				</span>
				{/* Space */}
				<div className="h-[3rem]"></div>
				{/* <Button>Sign up</Button> */}
				<button className="bg-primary_dark flex justify-center items-center text-white gradient-1 font-bold p-[0.7rem] rounded-lg scale-125 w-5 ease-in-out duration-300 hover:scale-150">
					Sign up
				</button>
			</div>
			{/* <div className="flex flex-col items-center gap-[3rem]"> */}
			<div className="flex flex-row flex-wrap justify-center items-center gap-[5rem] ">
				<Card
					title={"Large Database"}
					subtitle={
						"Enjoy a wide pool of code problems to solve and improve your solving skills using code problems and solutions created by community of teachers and students"
					}
				>
					<div className="w-full flex flex-col items-center gap-[1rem] justify-center">
						<div className="flex flex-row gap-[1rem] ">
							<Database />
							<span className="text-xl">
								Over 1000+ problems and solutions with tests and
								explanations
							</span>
						</div>
						<div className="flex flex-row gap-[1rem] ">
							<Globe />
							<span className="text-xl">
								Trusted by hundreds of teachers around the globe
							</span>
						</div>
					</div>
				</Card>
				<Steps />
			</div>
			{/* </div> */}
		</div>
	);
};

export default Landing;
