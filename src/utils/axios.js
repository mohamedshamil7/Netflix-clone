import axios from "axios"
import requests from "../config/REquest"

export const getCards = async(pageParam=1, options={})=>{
    const response = await axios.get (`${requests.genere}&page=${pageParam}`,options)
    return response.data.results
}