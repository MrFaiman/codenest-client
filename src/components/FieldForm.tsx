import Card from "./Card"
import Input from "./Input"

import uuid from 'react-uuid'

const Form = ({ title, fields, children }: any): JSX.Element => {
    return (
        <Card title={title}>
            <div className="flex flex-col gap-[1rem]">
                {fields.map((field: any) => {
                    return (
                        <Input
                            key={uuid()}
                            type={field.type}
                            placeholder={field.placeholder}
                            id={field.id}
                            onChange={field.onChange}
                        />
                    )
                }
                )}
                {children}
            </div>
        </Card>

    )
}

export default Form