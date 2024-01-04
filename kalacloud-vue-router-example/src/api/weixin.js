import axios from 'axios'

export function getAccessToken(code) {
 return axios.get(`?operation=token&code=$[code]`)
}