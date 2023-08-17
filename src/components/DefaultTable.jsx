import { Card,  Typography } from "@material-tailwind/react";
import axios from "axios";

import { useEffect, useState } from "react";


const TABLE_HEAD = ["date", "Exe Name", "DseCode", "Select Card","Surrogate" ,"First Name","Middle Name", "Last Name","DOB","Gender","Marital State",
"Spouse Name","Qualification","Other","Pan Number","Mobile Number","Alt.Mobile Number","Email","Residence.Flat","Residence.Street",
"Residence.City","Residence.state","Residence.Landmark","Residence.Pincode","Permanent.Flat","Permanent.Street","Permanent.City","Permanent.State","Permanent.Landmark",
"Permanent.Pincode","Period at current Residence","Residence is","Company Name","Company.Flat","Company.Street","Company.City","Company.State","Company.LandMark","Company.PinCode",
"Designation","Tel.No","Office E-Mail ID","Occupation-type","Sector","HDFC Account No","Other Bank Account No","Remarks","Edit","Delete"];




 function DefaultTable() {
    const [formData, seFormtData] = useState([]);


useEffect(()=>{
    fetchData();
},[]);
const fetchData=async()=>{
    try{
        
        const response=await axios.get(`http://localhost:5000/api/getdata`)
        seFormtData(response.data.message)
        console.log(Array.isArray(response.data.message)); 
        console.log(response.data);
    }catch(error){
        console.error(`Error in fetching data:${error}`);
    }
}

return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        
         { formData.map((item, index) => {
            const custName = item.custName || {};
            const residenceAddress=item.residenceAddress || {};
            const permanentAddress=item.permanentAddress || {};
            const companyAddress=item.companyAddress || {};
            // const isLast = index === item.length - 1;
            const classes =  "p-4 border-b border-blue-gray-50";
 
            return (
                <tr key={index}>
                    
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.date}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.exeName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.dseCode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.cardSelect}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.surrogate}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.firstName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.middleName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.lastName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.dateOfBirth}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.gender}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.maritalStatus}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.spouseName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.qualification}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.other}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.panNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.mobileNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.altMobileNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.email}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.street}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.city}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.state}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.landMark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.pincode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.street}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.city}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.state}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.landMark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.pincode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.periodResidence}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.residenceIs}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.companyName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.street}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.city}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.state}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.landMark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.pincode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.designation}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.telNo}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.officeEmail}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.employmentType}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.employmentDetails}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.hdfcAcc}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.otherAcc}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.remark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                        Edit
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                        Delete
                    </Typography>
                </td>
                
              </tr>
            
            )
         })}
        </tbody>
      </table>
    </Card>
  );
}

                   
                  
export default DefaultTable