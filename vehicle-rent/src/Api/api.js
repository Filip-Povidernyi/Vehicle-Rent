import axios from 'axios';

axios.defaults.baseURL = 'https://66408369a7500fcf1a9df7c6.mockapi.io';


export const fetchVehicleData = async () => {
    try {
        const response = await axios.get('/adverts');

        return response.data;
    } catch (error) {
        return console.log(error.message);
    }
}
