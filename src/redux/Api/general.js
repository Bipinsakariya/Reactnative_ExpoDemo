import Axios from "axios";

export const login = (email, password) => {
    let formdata = new FormData;
    formdata.append('sign_in[login]', email);
    formdata.append('sign_in[password]', password);
	const respones = Axios.post("https://zsenie.systems/api/v2/users/login", formdata)
	return respones
}