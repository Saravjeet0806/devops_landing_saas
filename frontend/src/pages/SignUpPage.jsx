import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center  px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='max-w-md w-full  bg-opacity-60 backdrop-filter backdrop-blur-xl 
				rounded-2xl shadow-xl overflow-hidden'
			>
				<div className='p-8 text-center'>
					<h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text'>
						Register Now
					</h2>

					<form onSubmit={handleSignUp} className="flex flex-col items-center">
						<Input
							icon={User}
							type='text'
							placeholder='Full Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							icon={Mail}
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							icon={Lock}
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

						<PasswordStrengthMeter password={password} />

						<motion.button
							className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white 
							font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-800 focus:outline-none 
							focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type='submit'
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className='animate-spin mx-auto' size={24} />
							) : (
								"Sign Up"
							)}
						</motion.button>
					</form>
				</div>
				<div className='px-8 py-4 bg-gray-800 bg-opacity-50 flex justify-center'>
					<p className='text-sm text-gray-400'>
						Already have an account?{" "}
						<Link to='/login' className='text-orange-400 hover:underline'>
							Login
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SignUpPage;
