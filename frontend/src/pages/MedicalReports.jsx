import "./MedicalReports.css";
import { FileText, Download } from "lucide-react";

const reports = [
  {
    id: 1,
    reportName: "Blood Test Report",
    doctor: "Dr. John Smith",
    date: "15 June 2026",
  },
  {
    id: 2,
    reportName: "X-Ray Report",
    doctor: "Dr. Emma",
    date: "10 June 2026",
  },
  {
    id: 3,
    reportName: "ECG Report",
    doctor: "Dr. Michael",
    date: "05 June 2026",
  },
];

const MedicalReports = () => {
  return (
    <div className="reports-container">
      <h1>Medical Reports</h1>

      <div className="reports-grid">
        {reports.map((report) => (
          <div className="report-card" key={report.id}>
            <FileText size={50} />

            <h3>{report.reportName}</h3>

            <p>
              <strong>Doctor:</strong> {report.doctor}
            </p>

            <p>
              <strong>Date:</strong> {report.date}
            </p>

            <button>
              <Download size={18} />
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalReports;