import React from "react";
// Components
import Button from "../../../../UI/Button/Button";

// SVG
import icon from '../../../../assets/images/more.svg';

// Interfaces
interface Props {
    className?: string;
    updateShow: () => void;
}

const Expand = ({className, updateShow}: Props) => (
    <Button className={className} onClick={updateShow}>
        <img src={icon} alt='Mark task as finished.'/>
    </Button>);

export default Expand;