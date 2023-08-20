import Steps from "@components/Steps";
import { Database, Globe } from "lucide-react";
import Button from "@components/Button";

const Landing = (): JSX.Element => {
    return (
        <div className="gradient-2 p-[5rem] flex flex-col gap-[5rem]">
            <div className="flex flex-col items-center">
                <span className="text-7xl font-bold gradient-1-text tracking-tighter" >codelabs</span>
                <span className="text-m font-bold" >Create • Share • Teach • Study</span>
            </div>
            <div className="flex flex-col items-center gap-[3rem]">
                <div className="justify-center items-center flex flex-row gap-[5rem] ">
                    <div className="flex flex-col items-center gap-[3rem] bg-secondary_dark border-2 border-[#2f2f2f] rounded-xl w-[30rem] p-[2rem]  h-[40rem]"> 

                        <div className="flex flex-col items-center gap-[1rem]">   
                            <span className="text-4xl font-bold gradient-1-text tracking-tighter" >Large Database</span>
                            <span className="text-xl font-bold text-center" >
                                Enjoy a wide pool of code problems to solve and improve your solving skills
                                using code problems and solutions created by computer science teachers
                            </span>
                        </div>
                        <div className="w-full flex flex-col items-center gap-[1rem] justify-center">
                            <div className="flex flex-row gap-[1rem] ">
                                <Database />
                                <span className="text-xl">Over 1000+ problems and solutions with tests and explanations</span>
                            </div>
                            <div className="flex flex-row gap-[1rem] ">
                                <Globe />
                                <span className="text-xl">Trusted by hundreds of teachers around the globe</span>
                            </div>

                        </div>
                    </div>
                    <Steps/>
                </div>

                <Button>Sign up</Button>




            </div>
            
        </div>
    )
}




export default Landing;
