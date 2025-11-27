import axiosInstance from "../Interceptor/AxiosInterceptor";

const getPatientProfile = async (patientId: string) => {
    return axiosInstance.get(`/profile/patient/get/${patientId}`)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

const updatePatientProfile = async (patientId: string, profileData: any) => {
    return axiosInstance.put(`/profile/patient/update/${patientId}`, profileData)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

export {
    getPatientProfile,
    updatePatientProfile
}