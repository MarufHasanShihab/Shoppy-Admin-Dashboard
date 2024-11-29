import Header from "../../Components/Common/Header/Header";
import {motion} from "framer-motion"
import StateCard from "../../Components/Common/StateCard/StateCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

const Products = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* state */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <StateCard name="Total Sales" icon={Package} value="$12,345" color="#6366F1"/>
            <StateCard name="New Users" icon={TrendingUp} value="1,234" color="#8B5CF6"/>
            <StateCard name="Totals Products" icon={AlertTriangle} value="567" color="#EC4899"/>
            <StateCard name="Conversion Rate" icon={DollarSign} value="12.5%" color="#10B981"/>
          </motion.div>
      </main>
    </div>
  );
};

export default Products;
