
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // Password Validation
    const validatePassword = (pass) => {
        if (pass.length < 6) return "Password must be at least 6 characters long.";
        if (!/[A-Z]/.test(pass)) return "Password must contain an uppercase letter.";
        if (!/[a-z]/.test(pass)) return "Password must contain a lowercase letter.";
        return null;
    };

    // Handle Register
    const handleRegister = async (e) => {
        e.preventDefault();

        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            toast.error(passwordError);
            return;
        }

        try {
            const result = await createUser(email, password);

            // Update Firebase profile
            await updateUserProfile(name, photo);

            // Save user to database
            const newUser = {
                name,
                email,
                image: photo,
            };

            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newUser),
            });

            toast.success("Registration successful!");
            navigate("/");

        } catch (err) {
            toast.error(err.message);
            setError(err.message);
        }
    };

    // Google Login
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL,
                };

                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newUser),
                });

                toast.success("Google Login successful!");
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl mt-10">
            <h1 className="text-4xl font-bold text-center mt-5">Register Now</h1>

            <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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

                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
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

                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800">Register</button>
                </fieldset>
            </form>

            {/* Google Login */}
            <div className="px-7 pb-5">
                <button
                    onClick={handleGoogleSignIn}
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
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
