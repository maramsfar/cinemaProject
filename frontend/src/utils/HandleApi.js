import axios from 'axios' ;

const baseUrl = "http://localhost:5000" ;
const getAllFilm = (setFilm)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data -->' , data);
        setFilm(data)
    })
}


export {getAllFilm}