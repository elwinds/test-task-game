import * as React from 'react';
import classes from "./EditBtn.module.scss";
import { useNavigate } from "react-router-dom";
import Button from '../../UI/btn/Button';


const EditBtn = () => {
    const navigate = useNavigate();

    const openEditPage = () => {
      navigate('/edit');
    };

    return ( 
        <div className={classes.container}>
            <Button text={'Редактировать'} handler={openEditPage}/>
        </div>
    );
}
 
export default EditBtn;