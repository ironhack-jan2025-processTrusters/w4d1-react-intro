function WelcomeMessage(props){

    let message;

    if(props.isLoggedIn === true) {
        message = "Welcome";
    } else {
        message = "Sorry buddy, you need to login"
    }

    return (
        <h1>{message}</h1>
    );

}

export default WelcomeMessage;