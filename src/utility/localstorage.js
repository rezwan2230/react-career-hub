import { json } from "react-router-dom"


const getStoredJobApplication =()=>{
    const storedJobApplications = localStorage.getItem("job-applications")
    if(storedJobApplications){
        return JSON.parse(storedJobApplications)
    }
    return []
}

const saveJobApplication = id=>{
    const storedJobApplications = getStoredJobApplication()
    const exist = storedJobApplications.find(applicationId=> applicationId ==id)
    if(!exist){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export {saveJobApplication, getStoredJobApplication}