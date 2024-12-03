import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';

export default function AppButton() {
    const propsList = [
        {"name":"All", "type":"button"},
        {"name":"Front-end", "type":"button"},
        {"name":"Back-end", "type":"button"},
        {"name":"Mobile", "type":"button"},
        {"name":"Submit", "type":"submit"},
        {"name":"Reset", "type":"reset"},
    ];
    return (
        <>
            <div style={{display: 'flex'}}>
                <Button name="All" type="button"/>
                <Button name="Front-end" type="button"/>
                <Button name="Back-end" type="button"/>
                <Button name="Mobile" type="button"/>
                <Button name="Submit" type="submit"/>
                <Button name="Reset" type="reset"/>
            </div>
            <div style={{display: 'flex'}}>
                <ButtonList list={propsList} />
            </div>
        </>
    );
}