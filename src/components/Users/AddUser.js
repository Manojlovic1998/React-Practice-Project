
const AddUser = props => {

    const userSubmitHandler = event => {

        event.preventDefault();
    };

    return (
        <form onSubmit={userSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input type="username" id="username"/>
            <label htmlFor="age">Age <small>(Years)</small></label>
            <input type="number" id="age"/>
            <button type="submit">Add User</button>
        </form>
    );
};


export default AddUser;