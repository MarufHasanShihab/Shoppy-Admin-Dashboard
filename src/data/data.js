import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

// sidebar items
export const sidebarItems = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#EC4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10B981",
    path: "sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#F59E0B",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    path: "/settings",
  },
];

// salesData
export const salesData = [
	{ name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
];

// category data
export const categoryData = [
	{ name: "Electronics", value: 4500 },
	{ name: "Clothing", value: 3200 },
	{ name: "Home & Garden", value: 2800 },
	{ name: "Books", value: 2100 },
	{ name: "Sports & Outdoors", value: 1900 },
];

// cales channel data
export const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];