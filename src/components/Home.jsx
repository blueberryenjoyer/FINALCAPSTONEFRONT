import { auth } from "./api-adapters/adapters";


const Home = ({ user }) => {


    async function health() {
        try {
            const response = await fetch('http://localhost:4343/api')
            console.log(response)
            alert(response.statusText)

        } catch (err) { console.error(err); }
    }

    async function tellmeifauthworks() {
        try {
            const response = await auth(user)
            console.log(response)
            alert(response)

        } catch (err) { console.error(err); }
    }




    return (
        <div className="Home">
            <img id="homephoto" src="https://pbs.twimg.com/media/FZcAiA4VUAIDwQ9.png" alt="stock photo" />
            home page!
            <h2>logged in as: {user} </h2>

            <p onClick={() => { health() }} className='serverhealthbutton'>does the server work? click me!</p>
            <p onClick={() => { tellmeifauthworks() }} className='serverauthbutton'>am i authenticated? click me!</p>

        </div>

    );
}

export default Home;