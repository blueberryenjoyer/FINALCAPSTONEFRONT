import { auth } from "./api-adapters/adapters";


const Home = ({ user }) => {


    // async function health() {
    //     try {
    //         const response = await fetch('http://localhost:4343/api')
    //         console.log(response)
    //         alert(response.statusText)

    //     } catch (err) { console.error(err); }
    // }

    // async function tellmeifauthworks() {
    //     try {
    //         const response = await auth(user)
    //         console.log(response)
    //         alert(response)

    //     } catch (err) { console.error(err); }
    // }

    //all of this actually looks silly and is not needed! the site is better from a user experience perspective this way




    return (
        <div className="Home">

            <img id="homephoto" src="https://pbs.twimg.com/media/FZcAiA4VUAIDwQ9.png" alt="stock photo" />
            <p id="homeparagraph">
                meow!meow!meow!

                hey its me the developer! known in the users menu as... developer! i made this for a
                class project. the original design was a mere "product review site", but through my
                creative vision i have transformed it into a "cat review site" so i could add the one
                and only neco arc, to power my motivation.


            </p>

            {/* <h2>logged in as: {user} </h2>

            <p onClick={() => { health() }} className='serverhealthbutton'>does the server work? click me!</p>
            <p onClick={() => { tellmeifauthworks() }} className='serverauthbutton'>am i authenticated? click me!</p> */}

        </div>

    );
}

export default Home;