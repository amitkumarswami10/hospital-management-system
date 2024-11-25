import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement, // Import PointElement
} from "chart.js";

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement // Register PointElement
);

function Analytics() {
    // Mock data for the charts
    const barData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Patient Visits",
                data: [20, 30, 40, 35, 50, 55, 60],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Monthly Revenue (in $)",
                data: [5000, 7000, 8000, 6000, 9000, 10000, 11000],
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false,
            },
        ],
    };

    return (
        <div className="analytics">
            <h2>Analytics Dashboard</h2>
            <div className="row">
                {/* Data Cards */}
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Total Patients</h5>
                            <h3>1,230</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Appointments Today</h5>
                            <h3>45</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Revenue This Month</h5>
                            <h3>$25,000</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Active Staff</h5>
                            <h3>85</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                {/* Bar Chart */}
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Weekly Patient Visits</h5>
                            <Bar data={barData} />
                        </div>
                    </div>
                </div>

                {/* Line Chart */}
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Monthly Revenue Trend</h5>
                            <Line data={lineData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
