//newsapi.js

export const fetchBreakingNews = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/breaking-news");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching breaking news:", error);
        return [];
    }
};

export const fetchLiveFeed = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/live-feed");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching live feed:", error);
        return [];
    }
};
