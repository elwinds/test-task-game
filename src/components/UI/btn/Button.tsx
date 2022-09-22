import * as React from 'react';
import classes from './Button.module.scss'

type Props = {
  text: string;
  handler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
};

const Button:React.FC<Props> = (props) => {
    const { text, handler} = props;

    return ( 
        <button className={classes.btn} onClick={(e) => handler(e)}>{text}</button>
     );
};
 
export default Button;