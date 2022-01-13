import axios from 'axios'

export async function get_all_competition() {
    return await axios.get('https://api.football-data.org/v2/competitions/', 
    { headers: { 'X-Auth-Token': process.env.REACT_APP_API_TOKEN } })
}

export async function get_competition_matches(id) {
    return await axios.get('https://api.football-data.org/v2/competitions/' + id + '/matches', 
    { headers: { 'X-Auth-Token': process.env.REACT_APP_API_TOKEN } })
}