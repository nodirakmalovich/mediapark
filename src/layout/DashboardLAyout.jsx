import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

export default function DashboardLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}