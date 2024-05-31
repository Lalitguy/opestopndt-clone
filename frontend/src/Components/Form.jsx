import { useState } from "react"
import axios from 'axios';
import Toastr from "toastr";

function Form() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [org, setOrg] = useState("")
    const [contact, setContact] = useState("")
    const [errors, setErrors] = useState({});

    const validate = (paramter) => {
        const newErrors = {};
        if (paramter == "name") {
            if (!name || name.length < 3) newErrors.name = "Name is required ( 3- 15 characters) ";
        }
        if (paramter == "email") {
            if (!email) {
                newErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                newErrors.email = "Email format is Invalid";
            }
        }
        if (paramter == "message") {
            if (!message || message.length < 20) newErrors.message = "Enter a message between 20 - 100 characters";
        }
        if (paramter == "contact") {
            if (isNaN(contact) || !contact || contact.length !== 9) newErrors.contact = "Contact Number is required of 10 digits";
        }
        if (paramter == "org") {
            if (!org || org.length < 3) newErrors.org = "Organization name is required";
        }
        return newErrors;
    };

    const handleValidation = (parameter) => {
        setErrors({})
        const formErrors = validate(parameter);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const newEntry = {
                name: name,
                email: email,
                message: message,
                organizationName: org,
                contact: parseInt(contact),
                date: new Date()
            }


            try {
                await axios.post('http://localhost:3001/', newEntry)

                Toastr.success("Successfully Submitted ", "", {
                    timeOut: 5000,
                    progressBar: true,
                    positionClass: "toast-bottom-center",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut"
                })
                setName('');
                setEmail('');
                setMessage('');
                setOrg('');
                setContact('');
            }
            catch (err) {
                alert(err)
            }

       

    }

    return (
        <div className="flex justify-center items-center max-lg:w-full ">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-10/12 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] my-16 ">


                <div className="flex flex-col h-auto lg:w-1/3 lg:pl-2 lg:my-12 lg:items-end  lg:mr-8">
                    <div className=" max-lg:mx-8">
                        <p className=" lg:text-4xl text-2xl font-bold font-mont text-gray-600 my-6 lg:my-4">Got any questions?</p>
                        <p className=" lg:text-xl text-xl text-gray-600">Let's discuss it over a cup of coffee.</p>

                    </div>
                </div>



                <div className="lg:w-2/3 lg:px-6 lg:text-xl">
                    <div className=" h-auto w-full flex items-center flex-col mt-8 lg:flex-row lg:pr-8 ">
                        <div className="flex flex-col lg:w-1/2 w-full items-center">


                            <input type="text"
                                placeholder="Name"
                                className=" border-b-2 border-0 border-gray-300 w-10/12 mb-8 lg:mb-12"
                                value={name}
                                required
                                onChange={(e) => {
                                    setName(e.target.value)
                                    handleValidation("name")
                                }} />
                            {errors.name && <p className=" text-red-500 -mt-8 mx-6 lg:-mt-12 lg:mx-0">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col lg:w-1/2 w-full items-center">

                            <input type="text"
                                placeholder="Organization Name"
                                className=" border-b-2 border-0 border-gray-300 w-10/12 mb-8  lg:mb-12"
                                value={org}

                                required
                                onChange={(e) => {
                                    setOrg(e.target.value)
                                    handleValidation("org")
                                }} />
                            {errors.org && <p className="text-red-500 -mt-8 mx-8 lg:-mt-12 lg:mx-0">{errors.org}</p>}
                        </div>

                    </div>




                    <div className=" h-auto w-full flex items-center flex-col lg:flex-row lg:pr-8">
                        <div className="flex flex-col lg:w-1/2 w-full items-center">
                            <input type="email"
                                placeholder="Email Id"
                                className=" border-b-2 border-0 border-gray-300 w-10/12 mb-8  lg:mb-12"
                                value={email}
                                required
                                onChange={(e) => {

                                    setEmail(e.target.value)
                                    handleValidation("email")
                                }} />
                            {errors.email && <p className="text-red-500 -mt-8 mx-8 lg:-mt-12 lg:mx-0">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col lg:w-1/2 w-full items-center ">

                            <input type="text"
                                placeholder="Contact Number"
                                className=" border-b-2 border-0 border-gray-300 w-10/12 mb-8  lg:mb-12"
                                value={contact}
                                maxLength="10"
                                required
                                onChange={(e) => {
                                    setContact(e.target.value)
                                    handleValidation("contact")
                                }} />
                            {errors.contact && <p className="text-red-500 -mt-8 mx-8 lg:-mt-12 lg:mx-0">{errors.contact}</p>}
                        </div>
                    </div>



                    <div className="  h-auto w-full flex items-center flex-col lg:relative lg:flex-row lg:pr-8 ">
                        <div className="flex flex-col lg:w-1/2 w-full items-center">
                            <textarea rows={4}
                                placeholder="Message"
                                className=" border-b-2 border-0 border-gray-300 w-10/12 mb-8 lg:mb-12"
                                value={message}
                                minLength={20}
                                maxLength={100}
                                required
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                    handleValidation("message")
                                }}></textarea>
                            {errors.message && <p className="text-red-500 -mt-8 mx-8 lg:-mt-12 lg:mx-0">{errors.message}</p>}
                        </div>

                        <button type="submit" className=" bg-btnBlue font-mont text-white lg:text-lg lg:px-10 lg:py-3 rounded-full lg:absolute lg:right-10 lg:bottom-10 lg:hover:scale-105 transition duration-200 sm:max-lg:w-5/12 mb-12 py-3 mt-6 lg:mb-0 px-16">Submit &#x27F6; </button>

                    </div>
                </div>

            </form >
        </div >
    )
}

export default Form