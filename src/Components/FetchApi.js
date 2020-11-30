import {data} from "../db";

export const getCity=()=>{
    let cities = []
    for (let i of data){
        cities.push({name :i.city_name + " " + i.county_name + " " + i.province_name,locationId:i.id})
    }
    return cities
}

 export const cities= getCity()


