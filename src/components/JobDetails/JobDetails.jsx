import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()

    const handleApplyJob = ()=>{
        saveJobApplication(id)
        toast("Applied Successfully")
    }

    

    // const idInt = parseInt(id)
    const job = jobs.find(job=>job.id == id)
    const {job_description, job_responsibility,educational_requirements, experiences, salary, job_title, phone, email, address} = job
    console.log(job);
    // console.log(id, jobs);
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5 pl-4">Job details of : {id}</h2>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="border md:col-span-3 p-4">
                    <h3 className="mb-4"><span className="text-xl font-semibold">Job Description :</span> {job_description}</h3>

                    <h3 className="mb-4"><span className="text-xl font-semibold mb-2">Job Responsibility :</span> {job_responsibility}</h3>

                    <h3 className="text-xl font-semibold mb-2">Educational Requirement :</h3>
                    <p>{educational_requirements}</p>

                    <h3 className="text-xl font-semibold mt-4">Experience :</h3>
                    <p>{experiences}</p>
                </div>
                <div className="border">
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;