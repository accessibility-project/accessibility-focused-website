// sportsApi.js

export const fetchSportsNews = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/sports');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching sports news:", error);
        return [];
    }
};

export const fetchDirectSports = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/direct-sports');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching direct sports:", error);
        return [];
    }
};
