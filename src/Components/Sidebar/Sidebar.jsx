import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { sidebarItems } from "./../../data/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ with: isSidebarOpen ? 256 : 80 }} >
      <div className="h-full bg-gray-800 bg-opacity-50 border-r border-gray-700 backdrop-blur-md p-4 flex flex-col">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {sidebarItems?.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm rounded-lg hover:bg-gray-700 transition-colors mb-4">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}>
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
