import { BASE_URL } from '../../constants/apis.js'

const TOKEN = localStorage.getItem('accessToken')

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
})

export { TOKEN, instance }
