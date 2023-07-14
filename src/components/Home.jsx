import { auth } from "./api-adapters/adapters";


const Home = ({ user }) => {


    async function health() {
        try {
            const response = await fetch('http://localhost:4343/api')
            console.log(response)
            alert(response.statusText)

        } catch (err) { console.error(err); }
    }





    return (
        <div className="Home">
            <img id="homephoto" src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png" alt="stock photo" />
            home page!

            <p onClick={() => { health() }} className='serverhealthbutton'>does the server work? click me!</p>
            <p onClick={() => { auth(user) }} className='serverauthbutton'>am i authenticated? click me!</p>

        </div>

    );
}

export default Home;