
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


const Login = () => {
    const { loginUser, signInWithGoogle } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password);
            toast.success("Login successful!");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Handle Google Login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success("Google Login successful!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl mt-10">
            <h1 className="text-4xl font-bold text-center mt-5">Login Now</h1>

            <form onSubmit={handleLogin} className="card-body">
                <fieldset className="fieldset">

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <a className="link link-hover mt-1">Forgot password?</a>

                    <button className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800">Login</button>
                </fieldset>
            </form>

            {/* Google Login */}
            <div className="px-7 pb-5">
                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full bg-white text-black border-[#e5e5e5]"
                >
                    <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <path fill="#fff" d="m0 0H512V512H0"></path>
                            <path
                                fill="#34a853"
                                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                            ></path>
                            <path
                                fill="#4285f4"
                                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                            ></path>
                            <path
                                fill="#fbbc02"
                                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                            ></path>
                            <path
                                fill="#ea4335"
                                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                            ></path>
                        </g>
                    </svg>
                    Login with Google
                </button>

                <p className="text-center mt-3">
                    Create your account{" "}
                    <Link to="/register" className="text-blue-600 font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
