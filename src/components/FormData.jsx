import React, { useEffect, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import ResidenceAddressForm from './ResidenceAddressForm';
import PermanentAddressForm from './PermanentAddressForm';

const selectcard=[
  {
    card:"Select"
  },
  {
    card:"Money Back"
  },
  {
    card:"Business Money Back "
  },
  {
    card:"Indian Oil"
  },
  {
    card:"Millennia"
  },
  {
    card:"Regalia"
  },
  {
    card:"Tata Neu Plus (Rupay) "
  },
  {
    card:"Tata Neu Infnity"
  },
  {
    card:"Shopper Stop Card"
  },
  {
    card:"Swiggy Card"
  },
  {
    card:"Freedom Card"
  },
  {
    card:"Diners Black Card"
  },
  {
    card:"Times Titainium Card"
  },
  {
    card:"Indigo 6E Rewards"
  },
 
]
const surrogate=[
  {
    type:"Select"
  },
  {
    type:"Salary Slip"
  },
  {
    type:"Card Against Card"
  },
  {
    type:"Floater Card"
  },
  {
    type:"Bajaj Emi"
  },
  {
    type:"ITR"
  },
  {
    type:"Doctor's Surrogate"
  },
  {
    type:"RC Base"
  },
]
const matirialStatus=[
  {
    status:"Select"
  },
  {
    status:"Single"
  },
  {
    status:"Married"
  },
  {
    status:"Others"
  },

]
const addressdetails=[
  {
    residence:"Select"
  },
  {
    residence:"Owned"
  },
  {
    residence:"Rented"
  },
  {
    residence:"Company Provided"
  },
  {
    residence:"Ancestral/Family"
  },
  {
    residence:"PG Accomadation"
  },
  {
    residence:"Resi Cum Office"
  },
]
const salary=[
  {
    type:'Select'
  },
  {
    type:'Private Ltd'
  },
  {
    type:'Partnership'
  },
  {
    type:'Proprietorship'
  },
  {
    type:'Public Ltd'
  },
  {
    type:'Public Sector'
  },
  {
    type:'Government'
  },
  {
    type:'Multinational'
  },
  {
    type:'Others'
  },
]
const self=[
  {
    type:'Select'
  },
  {
    type:'Sole Proprietorship'
  },
  {
    type:'Partnership'
  },
  {
    type:'Public Ltd'
  },
  {
    type:'Private Ltd'
  },
  {
    type:'Others'
  },
]


const FormData = () => {
  const [dob, setDob] = useState(null);
  const[initialStatus,setInitialStatus]=useState('');
  const [spouseName,setSpouseName]=useState('');

  const[qualificationStatus,setQualificationStatus]=useState('');
  const [others,setOthers]=useState('');

  const [startDate, setStartDate] = useState(new Date());





  const[isSelfEmployed,setIsSelfEmployed]=useState(false);
  const[isSalary,setIsSalary]=useState(false);
  const[employmentType,setEmplomentType]=useState('');

  const [formData,setFormData]=useState({
    date: '',
    exeName: '',
    dseCode: '',
    cardSelect: '',
    surrogate: '',
    custName: {
        firstName: '',
        middleName: '',
        lastName: ''
    },
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    spouseName:'',
    qualification: '',
    other: '',
    panNumber: '',
    mobileNumber:'',
    altMobileNumber: '',
    email:'',
    residenceAddress: {
        flat:'',
        street:'',
        city:'',
        state:'',
        landMark:'',
        pincode:''
    },
     sameAsAbove:false,
    permanentAddress: {
        flat: '',
        street: '',
        city: '',
        state: '',
        landMark: '',
        pincode: ''
    },
    periodResidence: '',
    residenceIs: '',
    companyName: '',
    companyAddress: {
        flat: '',
        street: '',
        city: '',
        state: '',
        landMark: '',
        pincode: ''
    },
    designation: '',
    telNo: '',
    officeEmail: '',
    employmentType: '',
    employmentDetails: '',
    hdfcAcc: '',
    otherAcc: '',
    remark: ''
  })

  const handleDateChange = (date) => {
    setDob(date);
  };

  const handleMaritalStatusChange=(event)=>{
   setInitialStatus(event.target.value);
    setSpouseName('');
    const isMarried = event.target.value === 'married';
    setFormData({
      ...formData,
      maritalStatus: event.target.value,
      spouseName: isMarried ? '' : formData.spouseName,
    });
  };

  const handleQualificationStatusChange=(event)=>{
    setQualificationStatus(event.target.value);
    setOthers('')
    const isOther=event.target.value==='other';
    setFormData({
      ...formData,
      qualification:event.target.value,
      other:isOther ? '':formData.other
    })
    
  };

  const handleSalaryChange=()=>{
    setIsSalary(!isSalary);
    setIsSelfEmployed(false);
    setEmplomentType('')
  }

  
  const handleSelfEmployedChange=()=>{
    setIsSelfEmployed(!isSelfEmployed);
    setIsSalary(false)
    setEmplomentType('')
  }

 
  
 

const handleSubmit=async (event)=>{
  event.preventdefault();
  try{
    let formDataToSend = formData;

    if (formData.sameAsAbove) {
      formDataToSend = {
        ...formDataToSend,
        permanentAddress: formData.residenceAddress,
      };
    }
        const url=`http://localhost:5000/api`
        const response=await axios.post(`${url}/sendData`,formDataToSend)

        if(response.status===201){
          console.log(`Data submitted succesfully `);
          setFormData({
            date: '',
            exeName: '',
            dseCode: '',
            cardSelect: '',
            surrogate: '',
            custName: {
                firstName: '',
                middleName: '',
                lastName: ''
            },
            dateOfBirth: '',
            gender: '',
            maritalStatus: '',
            spouseName:'',
            qualification: '',
            other: '',
            panNumber: '',
            mobileNumber:'',
            altMobileNumber: '',
            email:'',
            residenceAddress: {
                flat:'',
                street:'',
                city:'',
                state:'',
                landMark:'',
                pincode:''
            },
            sameAsAbove: false,
            permanentAddress: {
                flat: '',
                street: '',
                city: '',
                state: '',
                landMark: '',
                pincode: ''
            },
            periodResidence: '',
            residenceIs: '',
            companyName: '',
            companyAddress: {
                flat: '',
                street: '',
                city: '',
                state: '',
                landMark: '',
                pincode: ''
            },
            designation: '',
            telNo: '',
            officeEmail: '',
            employmentType: '',
            employmentDetails: '',
            hdfcAcc: '',
            otherAcc: '',
            remark: ''
          })
        }
  }catch(error){
    console.log(error);
  }

}
  return (

      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
      <div className="space-y-12 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Credit Card Application Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill this from properly
          </p>
            <DatePicker className="mt-4" selected={startDate} onChange={(date) => setStartDate(date)}/>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Executive Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="mIRSHAD ALI"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
              DSE-Code
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="code"
                    id="code"
                    autoComplete="code"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="mIRSHAD ALI"
                    required
                  />
                </div>
              </div> 
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="selectcard" className="block text-sm font-medium leading-6 text-gray-900">
                Select Card
              </label>
              <div className="mt-2">
               
                    <select
                    id="selectcard"
                    name="selectcard"
                    autoComplete="selectcard"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {selectcard.map((type)=>(
                    <option>
                      {type.card}
                    
                    </option>
                    ))}
                    
                    </select>
                
               
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surrogate" className="block text-sm font-medium leading-6 text-gray-900">
                Surrogate
              </label>
              <div className="mt-2">
               
                    <select
                    id="surrogate"
                    name="surrogate"
                    autoComplete="surrogate"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {surrogate.map((choose)=>(
                    <option>
                      {choose.type}
                    
                    </option>
                    ))}
                    
                    </select>
                
               
              </div>
            </div>

            <div className="sm:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">APPLICANT DETAILS</h2>
              <label htmlFor="customerName" className="block text-sm font-medium leading-6 text-gray-900">
                Customer Name(as per pan)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    autoComplete="customerName"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                    required
                  />
        
                </div>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    autoComplete="customerName"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Middle Name"
                    
                  />
        
                </div>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    autoComplete="customerName"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                    required
                  />
        
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="dateofbirth" className="block text-sm font-medium leading-6 text-gray-900">
               Date of Birth
              </label>
              <div className="mt-2">
               
                  <DatePicker
                    id="dob"
                    selected={dob}
                    onChange={handleDateChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                
              </div> 
            </div>
            
            <div className="sm:col-span-4">
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
               Gender
              </label>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    required
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    female
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    others
                  </label>
                </div>
              
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surrogate" className="block text-sm font-medium leading-6 text-gray-900">
                Marital Status
              </label>
              <div className="mt-2">
              
                    <select
                    id="materialStatus"
                    value={initialStatus}
                    onChange={handleMaritalStatusChange}
                    name="materialStatus"
                    autoComplete="materialStatus"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    >
                    <option>Select</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Others</option>
                    </select>
              </div>
              
              {initialStatus==='Married'&&(
                 <div className="sm:col-span-4">
                 <label htmlFor="spousename" className="block text-sm font-medium leading-6 text-gray-900">
                   Spouse Name
                 </label>
                 <div className="mt-2">
                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     <input
                       type="text"
                       name="spouseName"
                       value={formData.spouseName}
                       onChange={(e)=>setSpouseName(e.target.value)}
                       id="spousename"
                       autoComplete="spousename"
                       className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       placeholder="Spouse Name"
                       required
                     />
                   </div>
                   </div>
                 </div>
              )}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="qualification" className="block text-sm font-medium leading-6 text-gray-900">
               Qualification
              </label>
              <div className="mt-2">
              
                    <select
                    id="qualification"
                    value={qualificationStatus}
                    onChange={handleQualificationStatusChange}
                    name="qualification"
                    autoComplete="qualification"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    >
                    <option>Select</option>
                    <option>10th / 12th</option>
                    <option>Graduate</option>
                    <option>Professional</option>
                    <option>Others</option>
                    </select>
              </div>
              
              {qualificationStatus==='Others'&&(
                 <div className="sm:col-span-4">
                 <label htmlFor="others" className="block text-sm font-medium leading-6 text-gray-900">
                  Please Specify
                 </label>
                 <div className="mt-2">
                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     <input
                       type="text"
                       name="others"
                       value={others}
                       onChange={(e)=>setOthers(e.target.value)}
                       id="others"
                       autoComplete="others"
                       className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       placeholder="Please Specify"
                       required
                     />
                   </div>
                   </div>
                 </div>
              )}
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="pannumber" className="block text-sm font-medium leading-6 text-gray-900">
              Pan Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="pannumber"
                    id="pannumber"
                    autoComplete="pannumber"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Etpk1043q"
                  />
                </div>
              </div> 
            </div>

            <div className="sm:col-span-4">
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile Number
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Customer mobile number"
                            required
                          />
                        </div>
                      </div>
                  </div>

                  <div className="sm:col-span-4">
                      <label htmlFor="altNum" className="block text-sm font-medium leading-6 text-gray-900">
                      Alt.Mobile Number
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="altNum"
                            id="altNum"
                            autoComplete="altNum"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="alternative number"
                           
                          />
                        </div>
                      </div>
                  </div>

                  <div className="sm:col-span-4"> 
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email ID
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="email"
                            required
                          />
                        </div>
                      </div>
                  </div>
            
                  <ResidenceAddressForm formData={formData} setFormData={setFormData} />
                  

              <div className="sm:col-span-4">
              <label htmlFor="sameadd" className="block text-sm font-medium leading-6 text-gray-900">
              Same as above (Copy Residential Address to Permanent Address)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="checkbox"
                    name="sameAsAbove"
                    checked={formData.sameAsAbove}
                    onChange={e => setFormData(prevData => ({ ...prevData, sameAsAbove: e.target.checked }))}
                    id="sameAsAbove"                   
                    autoComplete="sameAsAbove"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="mIRSHAD ALI"
                    
                  />
                </div>
              </div> 
            </div>
                 {formData.sameAsAbove ? (
                  <PermanentAddressForm formData={{ ...formData, permanentAddress: formData.residenceAddress }} setFormData={setFormData} />
                ) : (
                  <PermanentAddressForm formData={formData} setFormData={setFormData} />
                )}
                  <div className="sm:col-span-4">
              <label htmlFor="period" className="block text-sm font-medium leading-6 text-gray-900">
               Period at current Residence
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="number"
                    name="period"
                    id="period"
                    autoComplete="period"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="in years"
                    required
                  />
                </div>
              </div>

              
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="selectcard" className="block text-sm font-medium leading-6 text-gray-900">
                Your Residence is
              </label>
              <div className="mt-2">
               
                    <select
                    id="selectcard"
                    name="selectcard"
                    autoComplete="selectcard"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {addressdetails.map((type)=>(
                    <option>
                      {type.residence}
                    
                    </option>
                    ))}
                    
                    </select>
                
               
              </div>
            </div>

            <div className="sm:col-span-4">
                    <h2 className="text-base font-semibold py-3 leading-7 text-gray-900">COMPANY DETAILS</h2>
                    <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                       Company Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          autoComplete="companyName"
                          className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Company Name"
                          required
                        />
                      </div>
                    </div>
                      <label htmlFor="companyaddress" className="block text-sm font-medium leading-6 text-gray-900">
                      Company Address
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="flat"
                            id="flat"
                            autoComplete="flat"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="flat / door no. & house name"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="street1"
                            id="street1"
                            autoComplete="street"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Street1"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="city"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="City"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="state"
                            id="state"
                            autoComplete="state"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="State"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="landMark"
                            id="landMark"
                            autoComplete="landMark"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="LandMark"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="number"
                            name="pincode"
                            id="pincode"
                            autoComplete="pincode"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Pincode"
                            required
                          />
                        </div>
                      </div>
              </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                Designation
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    autoComplete="designation"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Designation"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="telNo" className="block text-sm font-medium leading-6 text-gray-900">
                Tel.No
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="telNo"
                    id="telNo"
                    autoComplete="telNo"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Tel.no"
                    
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="officeEmail" className="block text-sm font-medium leading-6 text-gray-900">
                Office E-mail ID
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="email"
                    name="officeEmail"
                    id="officeEmail"
                    autoComplete="officeEmail"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Office E-mail ID"
                    
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <h2 className="text-2xl font-semibold mb-4">Occupation Type</h2>
              <div className="mb-4">
                <label htmlFor="occupation" className='flex items-center mb-2'>
                  <input
                  type='checkbox'
                  name="occupation"
                  id="occupation"
                  checked={isSalary}
                  onChange={handleSalaryChange}
                  autoComplete='occupation'
                  className="mr-2"
                  required
                  />
                  Salaried
                </label>
                {isSalary &&(
                  <select
                  value={employmentType}
                  onChange={(e)=>setEmplomentType(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                  >
                    {salary.map((sel)=>(
                      <option >{sel.type}</option>
                    ))}
                  </select>
                )}

              </div>
              <div className="mb-4">
                <label htmlFor="occupation" className='flex items-center mb-2'>
                  <input
                  type='checkbox'
                  name="occupation"
                  id="occupation"
                  checked={isSelfEmployed}
                  onChange={handleSelfEmployedChange}
                  autoComplete='occupation'
                  className="mr-2"
                  />
                 Self-Employed
                </label>
                {isSelfEmployed &&(
                  <select
                  value={employmentType}
                  onChange={(e)=>setEmplomentType(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                  required
                  >
                    {self.map((sel)=>(
                      <option >{sel.type}</option>
                    ))}
                  </select>
                )}

              </div>
            </div>

            <div className="sm:col-span-4">
                      <label htmlFor="hAccount" className="block text-sm font-medium leading-6 text-gray-900">
                      HDFC/Account No
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="hAccount"
                            id="hAccount"
                            autoComplete="hAccount"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="alternative number"
                           
                          />
                        </div>
                      </div>
                  </div>

                  <div className="sm:col-span-4">
                      <label htmlFor="othaccount" className="block text-sm font-medium leading-6 text-gray-900">
                      Other Bank Account No
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="othaccount"
                            id="othaccount"
                            autoComplete="othaccount"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Account Number"
                           
                          />
                        </div>
                      </div>
                  </div>

            
            
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Remark
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            {/* <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

            {/* <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="border-b border-gray-900/10 pb-12"> */}
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

          {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="radio"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}

        {/* <div className="border-b border-gray-900/10 pb-12"> */}
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p> */}

          {/* <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                    male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                    female
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="others"
                    name="gender"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div> */}
        {/* </div> */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
     
    </form>
    
  )
}

export default FormData

