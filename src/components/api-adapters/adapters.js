//this grabs all the users
export const grabUsers = async () => {
    try {
        const response = await fetch(`http://localhost:4343/api/users`);
        return response
        // const translatedData = await response.json();
        // return translatedData.data.posts;
    } catch (error) {
        console.log(error);
    }
};

export const grabCats = async () => {
    try {
        const response = await fetch(`http://localhost:4343/api/cats`);
        return response
        // const translatedData = await response.json();
        // return translatedData.data.posts;
    } catch (error) {
        console.log(error);
    }
};