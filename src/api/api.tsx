import axios from 'axios';

const apiClient = axios.create ({
    baseURL: API_BASE_URL,
    headers: {
        Authorization : `Bearer ${import.meta.env.VITE_CLASH_ROYALE_API_KEY}`,
    },
});

export const getPlayerData = async (playerTag: string) => {
    try {
        const response = await apiClient.get(`/players/%23${playerTag}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player data:', error);
        throw error;
    }
};