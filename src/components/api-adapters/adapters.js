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