function User(props){
    return (
        <>
            <h3>Name: {props.userName}</h3>
            <p>Age: {props.age}</p>
        </>
    );
}

export default User;