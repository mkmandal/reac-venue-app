import React from 'react';
import  Button from '@mui/material/Button';
import ticket from "../../assets/images/icons/ticket.png";

const MyButton = (props) => {
    return (
        <div>
            <Button href={props.link} varient="contained" size="small" style={{background:props.bck,color:props.color}}><img src={ticket} className="iconImage" alt="icon_button"/> {props.text}</Button>
        </div>
    );
};

export default MyButton;