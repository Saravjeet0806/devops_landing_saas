import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900 flex items-center justify-center relative overflow-hidden'>
			{/* Modern Loading Spinner with Orange theme */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-orange-500 border-orange-200 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;
