import uuid from 'react-uuid'

const Selection = ({ selected, options}: any): JSX.Element => {
    return (
        <>
            {
                options.map((option: any) => {

                    const border = selected == option.type ? "border-2 border-[#2f2f2f] rounded-xl" : ""

                    return (
                        <div onClick={option.onSelect} key = {uuid()}  className={`bg-primary_dark flex justify-center items-center text-white font-bold p-[0.7rem] rounded-lg ${border}`} >
                            {option.text}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Selection