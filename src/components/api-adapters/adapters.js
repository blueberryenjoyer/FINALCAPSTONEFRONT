//this grabs all the users
const BASE_URL = 'http://localhost:4343/api'

export const grabUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        return response
    } catch (error) {
        console.log(error);
    }
};

export const grabCats = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cats`);
        return response
    } catch (error) {
        console.log(error);
    }
};

export const grabReviews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`);
        return response
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (name, password, email) => {
    console.log(name, password, email)

    try {
        const response = await fetch(`${BASE_URL}/register`, { //if you send invalid queries the server crashes. fix this later.
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email,
            }),
        });
        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
};


export const loginUser = async (name, password) => {
    console.log(`logging in as ${name}`)

    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const auth = async (name) => {
    try {
        let token = localStorage.getItem("token");
        console.log(name)
        console.log(token)
        const response = await fetch(`${BASE_URL}/authenticatetoken`, {
            method: "POST", //get cant have body. its a hack. a workaround.
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": token
            },
            body: JSON.stringify({
                name: name
            })
        });
        console.log(response)
        alert(response.statusText)
    } catch (err) { console.error(err); }
}



export const createCat = async (name, description, dangerous, uploader) => {
    console.log(name, description, dangerous, uploader)

    try {
        const response = await fetch(`${BASE_URL}/createcat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                dangerous: dangerous,
                uploader: uploader,
            }),
        });
        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const grabCatById = async (id) => { //we are receiving a number
    try {
        console.log('we got to adapters')
        console.log(id)
        const response = await fetch(`${BASE_URL}/cat/${id}`); //we are sending api/cat/50
        console.log('we got through adapters')
        return response
    } catch (error) {
        console.log(error);
    }
};