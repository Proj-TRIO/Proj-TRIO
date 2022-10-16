import {Get, Post, Put, PostFile, PutFile} from './Requests'
const RecruiterController = (function () {
    return (module = {
        getRecruiter: async () => {
            return await Get(
                "/recruiter/profile",
            );
        },
        addRecruiter: async (body) => {
            return await Post(
                "/recruiter/add",
                body
            );
        },
        updateRecruiter: async (body) => {
            return await Put(
                "/recruiter/update",
                body
            );
        },
        getAllRecruiter: async () => {
            return await Get(
                "/recruiter/viewall",
            );
        },
        addPfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PostFile(
                "/recruiter/addpfp",
                formData
            );
        },
        updatePfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PutFile(
                "/recruiter/updatepfp",
                formData
            );
        },
        getPfp: async () => {
            return await Get(
                "/recruiter/profilepicture"
            );
        },
        getPfp2: async (body) => {
            console.log(body)
            return await Put(
                "/recruiter/profilepicture2",
                body
            );
        },
        addResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PostFile(
                "/recruiter/addresume",
                formData
            );
        },
        updateResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PutFile(
                "/recruiter/updateresume",
                formData
            );
        },
        getResume: async () => {
            return await Get(
                "/recruiter/resume"
            );
        },
    });
})();

export default RecruiterController;
