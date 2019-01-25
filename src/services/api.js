import Axios from 'axios';

export async function requestLogin(){
	return Axios.post("/api/login");
}