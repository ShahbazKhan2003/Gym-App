export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f6a8460874msh5f546e21581a468p1710f4jsn70f8aae420e1',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f6a8460874msh5f546e21581a468p1710f4jsn70f8aae420e1',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}