import Header from "../../Components/Common/Header/Header";
import { motion } from "framer-motion";
import StateCard from "../../Components/Common/StateCard/StateCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../../Components/Common/Overview/SalesOverviewChart/SalesOverviewChart";
import CategoryDistributionChart from "../../Components/Common/Overview/CategoryDistributionChart/CategoryDistributionChart";
import SalesChannelChart from "../../Components/Common/Overview/SalesChannelChart/SalesChannelChart";

const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      {/* main */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* state */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <StateCard name="Total Sales" icon={Zap} value="$12,345" color="#6366F1"/>
            <StateCard name="New Users" icon={Users} value="1,234" color="#8B5CF6"/>
            <StateCard name="Totals Products" icon={ShoppingBag} value="567" color="#EC4899"/>
            <StateCard name="Conversion Rate" icon={BarChart2} value="12.5%" color="#10B981"/>
          </motion.div>
          {/* Charts */}
          <div className="grid grid-cols1 lg:grid-cols-2 gap-8">
            <SalesOverviewChart/>
            <CategoryDistributionChart/>
            <SalesChannelChart/>
          </div>
      </main>
    </div>
  );
};

export default Overview;
