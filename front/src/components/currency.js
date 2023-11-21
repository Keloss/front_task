import axios from 'axios'

export const Currency = {
    async getAll() {
        const response = await axios.get('https://www.cbr-xml-daily.ru/latest.js')
        return response.data
    }
}