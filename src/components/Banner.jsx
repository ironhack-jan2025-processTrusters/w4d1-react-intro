
function Banner() {

    const title = "Welcome"

    const user = {
        firstName: "alice",
        surname: "smith"
    }

    const renderSubtitle = () => {
        return <h2>this is the subtitle...</h2>
    }

    const divStyle = {
        color: "orange",
        border: "1px solid orange"
    }


    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            
            {renderSubtitle()}

            {/* this is a comment */}

            <div style={divStyle}>
                <p>{user.firstName}</p>
                <p>{user.surname}</p>
            </div>
        </>
    )
}

export default Banner;