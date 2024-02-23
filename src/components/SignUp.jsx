import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPhoneNumber,
    updateProfile,
} from "firebase/auth";

import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import book from '../book.png'
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",

    });
    const { name, email, password } = formData;
    const [mobile, setMobile] = useState('');
    const [isValidMobile, setIsValidMobile] = useState(true);
    const navigate = useNavigate();
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const onChangeMobile = (e) => {
        const value = e.target.value;
        setMobile(value);
        setIsValidMobile(validateMobile(value));
    };

    const validateMobile = (mobile) => {
        // Regular expression for a valid mobile number format
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            updateProfile(auth.currentUser, {
                displayName: name,
            });
            const user = userCredential.user;
            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid), formDataCopy);
            // toast.success("Sign up was successful");
            // navigate("/");
        } catch (error) {
            toast.error("Something went wrong with the registration");
        }

        try {
            const auth = getAuth();
            await signInWithPhoneNumber(auth, mobile);
            // Handle success or navigate to verification screen
        } catch (error) {
            // Handle error
            console.error(error);
            toast.error("Something went wrong with the registration");
        }
    }
    return (
        <section>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        src={book}
                        alt="key"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form onSubmit={onSubmit}>
                        <span>Full Name</span>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="What is your Name?"
                            className="mb-6 w-full px-4 py-2 border font-inter  bg-white  rounded transition ease-in-out"
                        />
                        <span>Email ID</span>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email address"
                            className="mb-6 w-full px-4 py-2 border  bg-white rounded transition ease-in-out"
                        />
                        <div className="relative mb-6">
                            <span>Password</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                                className="w-full px-4 py-2  border  bg-white border-gray-300 rounded transition ease-in-out"
                            />
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            ) : (
                                <AiFillEye
                                    className="absolute right-3 top-9 cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            )}

                        </div>
                        <span className="">Mobile Number</span>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={onChangeMobile}
                            placeholder="Mobile"
                            className={` mb-6 mt-1 w-full px-4 py-2  border  bg-white   ${isValidMobile ? 'border-gray-300' : 'border-red-500'} rounded transition ease-in-out`}
                        />
                        {!isValidMobile && <p className="text-red-500">Please enter a valid mobile number.</p>}
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-6">
                                Have a account?
                                <Link
                                    to="/sign-in"
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                                >
                                    Sign in
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/forgot-password"
                                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                                >
                                    Forgot password?
                                </Link>
                            </p>
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                            type="submit"
                        >
                            Registration
                        </button>
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
                <div className="fixed left-0 bottom-0 blur-xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-500 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

                </div>

            </div>
        </section>
    );
}
