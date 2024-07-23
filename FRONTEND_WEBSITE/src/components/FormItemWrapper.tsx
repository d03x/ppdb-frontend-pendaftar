/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd"

export type FormTypeProps = {
    label: string, name: string, rules: any[],children : React.ReactNode,
}

export const FormItemWrapper = ({label, name, rules,children} : FormTypeProps) => {
    return <>
        <div className="form-item-wrapper">
            <label className="text-xs mb-1.5 block whitespace-nowrap">{ label }</label>
            <Form.Item
                hasFeedback
                name={name}
                rules={rules}
            >
                {children}
            </Form.Item>
        </div>
    </>
}