import {useState} from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = props => {
    const [isValidName, setIsValidName] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const userSubmitHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0) {
            setIsValidName(false);
            return;
        }
        if (enteredAge.trim().length === 0) {
            setIsValidAge(false);
            return;
        }
    };

    const userAgeChangeHandler = event => {
        if (enteredAge.trim().length > 0) {
            setIsValidAge(true);
        }
        setEnteredAge(event.target.value);
    };

    const usernameChangeHanlder = event => {
        if (enteredUsername.trim().length) {
            setIsValidName(true);
        }
        setEnteredUsername(event.target.value);
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={userSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input className={!isValidName ? styles.incorrect : ''} value={enteredUsername}
                       onChange={usernameChangeHanlder} type="username" id="username"/>
                <label htmlFor="age">Age <small>(Years)</small></label>
                <input className={!isValidAge ? styles.incorrect : ''} value={enteredAge}
                       onChange={userAgeChangeHandler} type="number" id="age"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};


export default AddUser;