// A simple fetch example using GitHub API
const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;

async function displayUser(username) {
    console.log("loading...");

    // Create promise, receive JSON, transform JSON into object, then print data 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

    console.log(data);
    console.log(data.public_repos);
}

function handleError(err) {
    console.log("Error");
    console.log(err);
}

displayUser("notgrowthnotvalue").catch(handleError)
