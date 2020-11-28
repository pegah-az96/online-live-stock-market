import axios from 'axios'
//import fs from 'fs'

export const getCity=()=>{
    let cities = []
    // fs.readFile('../public/db.json')
    axios.get('https://calm-garden-76853.herokuapp.com/locations')
        //https://hidden-shelf-13371.herokuapp.com/locations
        //https://calm-garden-76853.herokuapp.com/locations
        .then( response=> {
            let data= response.data;

            for (let i of data){
                cities.push({name :i.city + " " + i.county + " " + i.province,locationId:i.locationId})
            }
        })
        .catch(error => {
            console.log(error);
        })
    return cities
}


 export const cities= getCity()


