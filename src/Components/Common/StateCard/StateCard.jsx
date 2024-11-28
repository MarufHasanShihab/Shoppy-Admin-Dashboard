import {motion} from "framer-motion"

const StateCard = ({name,icon:Icon,value,color}) => {
    return (
        <motion.div whileHover={{boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)"}} className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700">
            <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-gray-400">
                    <Icon size={20} className="mr-4" style={{color}}/>
                    {name}
                </span>
                <p className="mt-1 text-3xl font-semibold  text-gray-100">{value}</p>
            </div>
        </motion.div>
    );
};

export default StateCard;