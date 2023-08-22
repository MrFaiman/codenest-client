import FieldForm from "@components/FieldForm"
import Button from "@components/Button";
import Selection from "@components/Selection";

import Confetti from "react-confetti"; 
import { useState } from "react";

const Authentication = (): JSX.Element => {


    const [type, setType] = useState("teacher");
    const [confetti, setConfetti] = useState(false);



    return (
        <div className="gradient-2 p-[5rem] flex justify-center itmes-center h-screen">
            <Confetti 
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                run = {confetti}
                numberOfPieces={1000}
            />
            <FieldForm title = "Sign up" fields = {[
                {
                    type: "email",
                    placeholder: "Email",
                    id: "email",
                    onChange: () => {}
                },
                {
                    type: "password",
                    placeholder: "Password",
                    id: "password",
                    onChange: () => {}
                }
            ]} >
                <div className="w-full flex flex-row gap-[1rem] justify-center">
                    <Selection selected = {type} options = {[
                        {
                            type: "teacher",
                            onSelect: () => setType("teacher"),
                            text: "I am a teacher"
                        },
                        {
                            type: "student",
                            onSelect: () => setType("student"),
                            text: "I am a student"
                        }
                    ]}/>
                </div>
                <Button onClick = {() => {
                    setConfetti(true)
                }}>Sign up</Button>
                
            </FieldForm>
        </div>
    )
} 

export default Authentication