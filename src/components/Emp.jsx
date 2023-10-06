import React from "react";
export const Emp=({empid,email,company})=>{
    return(
<div className="sub">
    <h1>Emp Details</h1>
    <h3>
Empid:{empid}
    </h3>
            <h3>
                Email:{email}
            </h3>
            <h3>
                Company:{company}
            </h3>
</div>
    )
}