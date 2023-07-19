//this grabs all the users
const BASE_URL = 'http://localhost:4343/api'

export const grabUsers = async (name) => {
    console.log(name) //ITS A PROMISE!! AAAAAAA
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token"),
                "adminName": name
            },
        });
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
        console.log(response.ok)
        return response.ok
    } catch (err) { console.error(err); }
}



export const createCat = async (catname, description, dangerous, uploader) => {
    console.log(catname, description, dangerous, uploader) //it will RECEIVE a user which is a string instead of a number for uploader

    try {
        const response = await fetch(`${BASE_URL}/createcat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                catname: catname,
                description: description,
                dangerous: dangerous,
                uploader: uploader, //it will SEND a user which is a string instead of a number for uploader
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

export const updateCat = async (id, catname, description, dangerous, uploader) => {
    console.log(id, catname, description, dangerous, uploader)

    try {
        const response = await fetch(`${BASE_URL}/updatecat`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                id: id,
                catname: catname,
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

export const deleteCatById = async (number, name) => { //currently doesnt work dont use
    console.log(number, name)
    try {
        const response = await fetch(`${BASE_URL}/deletecat`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                number: number,
                name: name,
            }),
        });
        const result = await response.json();

        return result.data;
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

export const grabFancyReviews = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/fancyreviews/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response
    } catch (error) {
        console.log(error);
    }
};

export const grabUserReviews = async (name) => {
    try {
        const response = await fetch(`${BASE_URL}/userreviews/${name}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response
    } catch (error) {
        console.log(error);
    }
};

export const createReview = async (content, score, uploader, cat_id) => { //receive content, score, uploader, cat_id
    console.log(content, score, uploader, cat_id)

    try {
        const response = await fetch(`${BASE_URL}/createreview`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                content: content,
                score: score,
                uploader: uploader,
                cat_id: cat_id
            }),
        });
        const result = await response.json();
        console.log(result)
        console.log('find error message in here!')

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const grabUserByName = async (name) => { //we are receiving a number
    try {
        console.log('we got to adapters')
        console.log(name)
        const response = await fetch(`${BASE_URL}/user/${name}`); //we are sending api/cat/50
        console.log('we got through adapters')
        return response
    } catch (error) {
        console.log(error);
    }
};

export const checkAdmin = async (name) => { //pass user, the global state
    try {
        console.log('this should be calling checkAdmin right now')
        const response = await fetch(`${BASE_URL}/checkadmin`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "adminName": name
            },
        });
        console.log('this is the checkadmin api call response. should be true or false')
        const response2 = await response.json()
        console.log(response2)
        return response2
    } catch (err) { console.error(err); }
}

export const updateReview = async (id, content, score, uploader) => {
    console.log(id, content, score, uploader)
    try {
        const response = await fetch(`${BASE_URL}/updatereview`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                id: id,
                content: content,
                score: score,
                uploader: uploader,
            }),
        });
        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const grabReviewById = async (id) => { //we are receiving a number
    try {
        console.log('we got to review by id')
        const response = await fetch(`${BASE_URL}/cat/${id}`); //TEMPORARY
        console.log('we got through review by id')
        return response
    } catch (error) {
        console.log(error);
    }
};

export const deleteReviewById = async (number, name) => {
    console.log(number, name)
    try {
        const response = await fetch(`${BASE_URL}/deletereview`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "tokenHeaderKey": localStorage.getItem("token")
            },
            body: JSON.stringify({
                number: number,
                name: name,
            }),
        });
        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
};