import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NotificationCard = () => {
  const [contactNo, setContactNo] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContactNo(value); // Only update if input contains numbers
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to bottom,rgb(112, 155, 219), #E6E6FA)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="p-4" style={{ width: "500px", borderRadius: "10px" }}>
        <h2 className="text-center fw-bold mb-3" style={{ color: "black" }}>
          Pre-Designed Notifications
        </h2>

        {[{ label: "Route Name", value: "Wadduwa To Kaluthara" , placeholder: "Enter route name" },
          { label: "Time", value: "2.00 P.M" },
          { label: "Date", value: "2025.10.10" },

          // Directly include the "Accept" button as part of the labels
          { label: "Status", type: "text", value: "✅ Accept", disabled: true },
          
          { label: "Driver Name",  value: "Imash" },
          {
            label: "Contact No",
            type: "tel",
            value: contactNo,
            onChange: handleInputChange,
            placeholder: "07164597523",
            maxLength: "10",
          },
          { label: "Vehicle No", value: "1234" },
        ].map((field, index) => (
          <div className="mb-3 row" key={index}>
            <label className="col-form-label col-4 fw-bold">{field.label}</label>
            <div className="col-8">
              {field.type === "text" && field.value ? (
                <span className="fw-bold">{field.value}</span> // Make "✅ Accept" bold
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  placeholder={field.placeholder || ""}
                  value={field.value || ""}
                  onChange={field.onChange || (() => {})}
                  maxLength={field.maxLength || ""}
                  disabled={field.disabled || false}
                />
              )}
            </div>
          </div>
        ))}

        <button className="btn btn-danger w-100">❌ Cancel Booking</button>
      </div>
    </div>
  );
};

export default NotificationCard;
