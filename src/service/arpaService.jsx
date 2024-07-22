import axios from "axios";

const BASE_URL = "http://localhost:3000";

function postCadastro(body){
    const promisse = axios.post(`${BASE_URL}/cadastro`,body);
    return promisse;
}

function getCadastro(){
    const promisse = axios.post(`${BASE_URL}/cadastro`);
    return promisse;
}

export {postCadastro, getCadastro}