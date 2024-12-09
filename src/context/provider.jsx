import { Data } from "./store";
import { useState } from "react";
import user from "../assets/user-1.png";
export const DataProvider = ({ children }) => {
  const [employeeLeaveDetails, setemployeeLeaveDetails] = useState([
    {
      id: 1,
      type: "Sick Leave",
      from: "2024-12-10",
      to: "2024-12-10",
      reason: "Health Issue",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual Leave",
      from: "2024-12-10",
      to: "2024-12-10",
      reason: "Family Function",
      status: "Rejected",
    },
  ]);
  const [employeeDetils, setemployeeDetails] = useState([
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
      testing: "Testing-1",
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
    {
      img: user,
      name: "Surya Chandran",
      designation: "Designer",
      department: "Quantum Pulse Technologies",
      location: "Sri eshwar college of engineering",
      email: "abc@gmai.com",
      phone: 1234567890,
    },
  ]);
  const updateLeave = (updatedLeave) => {
    setemployeeLeaveDetails((prevDetails) =>
      prevDetails.map((leave) =>
        leave.id === updatedLeave.id ? updatedLeave : leave
      )
    );
  };
  return (
    <Data.Provider
      value={{
        employeeDetils,
        setemployeeDetails,
        employeeLeaveDetails,
        setemployeeLeaveDetails,
        updateLeave,
      }}
    >
      {children}
    </Data.Provider>
  );
};
