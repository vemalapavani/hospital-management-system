import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (user: any) => {
    return axiosInstance.post('/users/register', user)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

const loginUser = async (credentials: { email: string; password: string }) => {
    return axiosInstance.post('/users/login', credentials)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

export {
    registerUser,
    loginUser
}