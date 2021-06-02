import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";

const AddUser = props => {

    const userSubmitHandler = event => {

        event.preventDefault();
    };

    return (
        <Card className={style.input}>
            <form onSubmit={userSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="username" id="username"/>
                <label htmlFor="age">Age <small>(Years)</small></label>
                <input type="number" id="age"/>
                <Button>Add User</Button>
            </form>
        </Card>
    );
};


export default AddUser;