import React, { useContext, useState } from "react";
import eye from "../assets/eye-icon-new.svg";
import LeaveDetailsModal from "./LeaveDetailsModal"; // Import the modal component
import EditLeave from "./EditLeave";
import { Data } from "../context/store";

const LeaveListTable = ({ leaves, setShowTint,  handleDeleteLeave, filterStatus }) => {
  const { employeeLeaveDetails, setemployeeLeaveDetails } = useContext(Data);
  function handleOpenTint() {
    setShowTint(true);
  }
  const [selectedLeave, setSelectedLeave] = useState(null); // State to store the selected leave
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const filteredLeaves = filterStatus
    ? employeeLeaveDetails.filter((leave) => leave.status === filterStatus)
    : employeeLeaveDetails;

  const handleViewDetails = (leave) => {
    setSelectedLeave(leave); // Set the selected leave details
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedLeave(null); // Clear the selected leave
  };

  
 
  return (
    <div className="flex rounded-lg border mt-5 w-full h-[263px]">
      <div className="overflow-x-auto rounded-lg w-full overflow-y-auto scrollbar-hide hide-scrollbar">
        <table className="bg-white w-full rounded-lg">
          <thead>
            <tr className="bg-[#e2eff9] text-gray-800 text-sm uppercase leading-normal">
              <th className="py-3 px-2 text-left max-sm:text-[12px]">
                Leave Type
              </th>
              <th className="py-3 px-2 text-left max-sm:text-[12px]">From</th>
              <th className="py-3 px-2 text-left max-sm:text-[12px]">To</th>
              <th className="py-3 px-2 text-left max-sm:text-[12px]">Reason</th>
              <th className="py-3 px-2 text-left max-sm:text-[12px]">Status</th>
              <th className="py-3 px-2 text-center max-sm:text-[12px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredLeaves.length > 0 ? (
              filteredLeaves.map((leave, index) => (
                <tr
                  key={leave.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-2">{leave.type}</td>
                  <td className="py-3 px-2">{leave.from}</td>
                  <td className="py-3 px-2">{leave.to}</td>
                  <td className="py-3 px-2">{leave.reason}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        leave.status === "Approved"
                          ? "bg-green-50 text-[#44CF7D]"
                          : leave.status === "Rejected"
                          ? "bg-red-50 text-[#ED6C83]"
                          : "bg-yellow-50 text-[#F8B400]"
                      }`}
                    >
                      {leave.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <button
                      onClick={() => {
                        handleViewDetails(leave);
                        setShowTint(true);
                      }}
                      className="bg-[#E3F3FF] px-[8px] py-[9px] rounded-full hover:text-blue-700"
                    >
                      <img src={eye} className="w-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-3 px-2 text-center text-gray-500"
                >
                  No leaves found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedLeave && (
        <LeaveDetailsModal
          leave={selectedLeave}
          onClose={handleCloseModal}
          setShowTint={setShowTint}
          handleDeleteLeave={handleDeleteLeave}
        />
      )}
    </div>
  );
};

export default LeaveListTable;
