const Home = () => {


    async function auth() {
        try {
            const response = await fetch('http://localhost:4343/api')
            console.log(response)
            // const result = await response.json();
            // console.log(result.statusTest)
            alert(response.statusText)

        } catch (err) { console.error(err); }
    }





    return (
        <div className="Home">
            <img id="homephoto" src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png" alt="stock photo" />
            home page!

            <p onClick={() => { auth() }} className='serverhealthbutton'>does the server work?</p>


        </div>

    );
}

export default Home;