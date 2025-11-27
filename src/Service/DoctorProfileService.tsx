import axiosInstance from "../Interceptor/AxiosInterceptor";

const getDoctorProfile = async (patientId: string) => {
    return axiosInstance.get(`/profile/doctor/get/${patientId}`)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

const updateDoctorProfile = async (patientId: string, DoctorData: any) => {
    return axiosInstance.put(`/profile/doctor/update/${patientId}`, DoctorData)
        .then(response => response.data)
        .catch(error => {
            throw error.response ? error.response.data : error.message;
        });
}

export {
    getDoctorProfile,
    updateDoctorProfile
}