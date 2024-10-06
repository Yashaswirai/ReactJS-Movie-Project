import axios from "axios";

const instance = axios.create({
    method: 'GET',
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjBmMTMwMWVkMDYwNmRkOWQwYjgyMThiODc4NzExYyIsIm5iZiI6MTcyODExNTU3Ny41MDI0NTUsInN1YiI6IjY3MDBmMjdiZmEzZTY5ZTBlZjdjZjBiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NRnPhY3yPvCEaHXkgfJSaBF_Na-WiJoRKLL9hom6F8w'
    }
});

export default instance;
