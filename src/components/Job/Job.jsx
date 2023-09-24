import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    // console.log(job);
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-20" src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-left">{company_name}</p>
                <div className="text-left flex gap-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-5">
                    <div>
                        <h2 className="flex items-center gap-2"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    </div>
                    <div>
                        <h2 className="flex items-center gap-2"><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</h2>
                    </div>

                </div>
                <div className="card-actions">
                   <Link to={`/job/${id}`}> <button className="btn btn-primary">view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;