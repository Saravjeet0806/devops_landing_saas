import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef([]);
	const navigate = useNavigate();

	const { error, isLoading, verifyEmail } = useAuthStore();

	const handleChange = (index, value) => {
		const newCode = [...code];

		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

	return (
		<div className="min-h-screen flex items-center justify-center px-4 py-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-orange-500"
			>
				<div className="p-8">
					<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
						Verify Your Email
					</h2>
					<p className="text-center text-gray-300 mb-6">
						Enter the 6-digit code sent to your email address.
					</p>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="flex justify-between gap-2">
							{code.map((digit, index) => (
								<input
									key={index}
									ref={(el) => (inputRefs.current[index] = el)}
									type="text"
									maxLength="1"
									value={digit}
									onChange={(e) => handleChange(index, e.target.value)}
									onKeyDown={(e) => handleKeyDown(index, e)}
									className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none"
								/>
							))}
						</div>

						{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="submit"
							disabled={isLoading || code.some((digit) => !digit)}
							className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50"
						>
							{isLoading ? "Verifying..." : "Verify Email"}
						</motion.button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default EmailVerificationPage;
