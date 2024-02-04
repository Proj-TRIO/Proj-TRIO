const baseUrl = "https://test-8ypz.onrender.com";

const Get = async (path) => {
    try {
        let response = null;
        response = await fetch(baseUrl + path, {
            method: 'GET',
            credentials: 'include',
        });
        response = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

const GetVideos = async (path) => {
    try {
        let response = null;
        response = await fetch(path, {
            method: 'GET',
            headers: {
                "Accept": "Accept: application/json;pk=BCpkADawqM0U-1PMKODQJ8iEA4GfRjA9YdRjcgzkt0YoZ9vjpdyz2yb4RpFGxR581IzfRHdk4V-dTkDjC3B1TBy5LCn-UVZXpRryyb8YjU8jlfsXfKv27CXhyt_ZtE12m4EeqjGaL99pzkJ5"
            },
        });

        response = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

const GetVideo = async (path) => {
    try {
        let response = null;
        response = await fetch(path, {
            method: 'GET'
        });

        // const blob = response.body.blob()
        const newBlob = new Blob([response.body])
        const blobUrl = window.URL.createObjectURL(newBlob)
        console.log(blobUrl)
        // const link = document.createElement('a');
        // link.href = blobUrl;
        // link.setAttribute('download', "rando.mp4");
        // document.body.appendChild(link);
        // link.click();
        console.log(response);
        // response = await response.json();
        return blobUrl;
    } catch (err) {
        console.log(err);
    }
};
const Post = async (path, data) => {
    try {
        let response = null;
        response = await fetch(baseUrl + path, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;

    } catch (err) {
        console.log(err);
    }
};
const PostFile = async (path, data) => {
    try {
        let response = null;
        response = await fetch(baseUrl + path, {
            method: 'POST',
            credentials: 'include',
            body: data,
        });
        return response;

    } catch (err) {
        console.log(err);
    }
};
const PutFile = async (path, data) => {
    try {
        let response = null;
        response = await fetch(baseUrl + path, {
            method: 'PUT',
            credentials: 'include',
            body: data,
        });
        return response;

    } catch (err) {
        console.log(err);
    }
};
const Put = async (path, data) => {
    try {
        let response = null;
        response = await fetch(baseUrl + path, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        response = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

export { Get, Post, Put, PostFile, PutFile, GetVideos, GetVideo };