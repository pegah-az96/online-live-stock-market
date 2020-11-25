import axios from 'axios'

export const getCity=()=>{
    let cities = []
    axios.get('https://hidden-shelf-13371.herokuapp.com/locations')
        //https://api.mocki.io/v1/b043df5a
        .then( response=> {
            let data= response.data;

            for (let i of data){
                cities.push({name :i.city + " " + i.county + " " + i.province,locationId:i.locationId})
                //{name :i.city + " " + i.county + " " + i.province,locationId:i.locationId}
            }
        })
        .catch(error => {
            console.log(error);
        })
    return cities
}


 export const cities= getCity()


