// import axios from 'axios'
//
// class Test extends Component {
//     cities = []
//     constructor() {
//         super();
//         axios.get('https://hidden-shelf-13371.herokuapp.com/locations')
//         //         //https://api.mocki.io/v1/b043df5a
//                 .then( response=> {
//                     let data= response.data;
//
//                     for (let i of data){
//                         this.cities.push(i.city +" " +  i.county + " " + i.province)
//                     }
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 })
//     }
//     getLocations=()=>{
//         return this.cities
//     }
//     render() {
//         console.log(this.getLocations())
//         return (
//             <div>
//                 c
//             </div>
//         );
//     }
// }
//
// export default Test;
// let myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'}]
// let foo=myArray.find(x => x.id === '45').foo;
// console.log(foo)
import React, {Component} from 'react';

class Test extends Component {
    render() {
        let myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'pegi'}]
        let foo=myArray.find(x => x.id === '45').foo;
        console.log(foo)
        return (
            <div>

            </div>
        );
    }
}

export default Test;