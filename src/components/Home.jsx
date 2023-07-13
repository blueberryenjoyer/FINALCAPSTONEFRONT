const Home = () => {


    async function health() {
        try {
            const response = await fetch('http://localhost:4343/api')
            console.log(response)
            alert(response.statusText)

        } catch (err) { console.error(err); }
    }
    async function auth() {
        try {
            let token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:4343/api/authenticateToken`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "tokenHeaderKey": token
                },
            });
            console.log(response)
            alert(response.statusText)
        } catch (err) { console.error(err); }
    }





    return (
        <div className="Home">
            <img id="homephoto" src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png" alt="stock photo" />
            home page!

            <p onClick={() => { health() }} className='serverhealthbutton'>does the server work? click me!</p>
            <p onClick={() => { auth() }} className='serverauthbutton'>am i authenticated? click me!</p>

        </div>

    );
}

export default Home;