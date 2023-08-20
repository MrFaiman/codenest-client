
const Steps = (): JSX.Element => {

    return (
        <section className="w-[30rem] h-[40rem] flex flex-col items-center bg-secondary_dark p-[2rem] gap-[5rem] border-2 border-[#2f2f2f] rounded-xl">
          <div className="flex flex-col gap-[1rem]  justify-center items-center w-full text-center font-extrabold">
            <div className="flex flex-col items-center gap-[1rem]">
              <span className="text-4xl font-bold gradient-1-text tracking-tighter" >How does it work</span>
              <span className="text-xl font-bold text-center" >
                All you need to do is to choose one of the existing coding challenges or create one of your own!
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-[1rem] justify-center">
            <div className="flex flex-row gap-[5rem] items-center justify-center">
                <StepNumerical number={1} text={"Sign up for free"} />
                <StepNumerical number={2} text={"Build your class"} />
                <StepNumerical number={3} text={"Start coding!"} />
            </div>
          </div>
      </section>
  
    )
}

const StepNumerical = ({ number, text }: { number: number; text: string }) => {
    return (
        <div className="flex flex-col items-center gap-[1.5rem] max-w-[6rem] step relative z-10">
          <div className="w-[2rem] h-[2rem] font-extrabold flex justify-center items-center rounded-full">{number}</div>
          <span className="font-bold text-center">{text}</span>
        </div>
      );
    }

export default Steps;
