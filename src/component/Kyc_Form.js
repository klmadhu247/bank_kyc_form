import React, { useState } from "react";
import bankLogo from '../assets/bank_Logo.png';
import Krish from '../assets/Krish.jpg'
import { TiTick } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {states,districts} from './data'
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../component/schema"
import { useForm } from "react-hook-form";



function Kyc_Form (){

    const form = useForm({resolver:yupResolver(schema),mode:'onChange'});

    const {register,handleSubmit, formState:{errors}} = form;

const [image,setImage] = useState(null);
const [selectedState,setSelectedState] = useState(null)
const [stateIndex,setStateIndex] = useState(null)
const [filteredDist,setFilteredDist] =useState([]);

const handleImageChange = (e) => {
    const im = e.target.files[0]; 
    if (im) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); 
        };
        reader.readAsDataURL(im); 
    }
};

const handleState =(e)=>
{
    
   
    const distSelection = districts.find(district=>district.state==e.target.value);
    setFilteredDist(distSelection? distSelection.dists:[])
   

}

const onSubit=()=>
{
    alert('Thanks for Applying your KYC Form')
}
console.log('state index',stateIndex)
console.log('selectedDist: ',filteredDist)

    return(

        <div>

        <div className="flex">
            
        
        <div className='text-2xl  w-1/4 bg-dark 4 h-screen sticky top-0 right-0'>

       <div className="flex items-center pt-10"> 
        <img src={bankLogo} className="w-20 ms-5"></img>
        <p className="text-white text-2xl font-bold ms-5">Trishan Bank Limited</p> </div>

        <div className="flex justify-center items-center">
  <button type="button" className="text-white bg-primary mt-20 mr-9 font-mono text-xl py-4 px-1 w-60 flex items-center justify-start rounded-xl pr-18 hover:bg-red-900">
    <span className="ms-2 mr-4 text-3xl"><TiTick /></span>
    <span>Verify KYC</span>
  </button>

</div>
        </div>

        <div className="w-3/4 flex flex-col">
      <div className="flex justify-between bg-gray-100 border-1 py-2 border-b-2 header sticky top-0">
  <p className="text-2xl font-semibold mt-5 ms-5">KYC Verification</p>
  <div >
  <img src={Krish} className="w-14 h-14 mr-2 mt-5 rounded-full" />

  </div>
</div>

<div className="bg-gray-100 w-11/12 h-5/6 flex justify-center mt-10 mx-auto rounded-xl">
<div className="bg-gray-100 w-11/12 h-full flex justify-center mt-10 mx-auto rounded-xl">
<form className="flex flex-col" onSubmit={handleSubmit(onSubit)}>
<div className="flex mb-6">
    <div className="w-2 h-8 bg-primary mr-3"></div><p className="text-xl">Personal Details</p> </div>

  <div className="grid grid-cols-3 gap-6">
   
    <div>
      <label className="block">Full Name</label>
      <input {...register('fname')}type="text" name="fname" placeholder="Enter your Full Name" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6 "/>
      {errors?.fname && <p className="text-red-600">{errors.fname.message}</p>}
    </div>

   
    <div>
      <label className="block">Gender</label>
      <select {...register('gender')} name="gender" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl ">
        <option>Select your Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
      {errors?.gender && <p className="text-red-600">{errors.gender.message}</p>}
    </div>

    
    <div>
      <label className="block">DOB</label>
      <input {...register('dob')}type="date" name="dob"
  className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl"/>
   {errors?.dob && <p className="text-red-600">{errors.dob.message}</p>}

    </div>

    <div>
      <label className="block">Father Name</label>
      <input {...register('fathername')} typeof="fathername" type="text" placeholder="Enter your Father Name" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.fathername && <p className="text-red-600">{errors.fathername.message}</p>}
    </div>

   
    <div>
      <label className="block">Grand Father Name(optional)</label>
      <input {...register('gfname')} name='gfname'type="text" placeholder="Enter your Grand Father Name" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
    </div>

    
    <div>
      <label className="block">Maritial Status(Optional)</label>
      <select {...register('marriage')} name="marriage" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl ">
        <option>Select a status</option>
        <option>Single</option>
        <option>Married</option>
      </select>
    </div>

    <div>
      <label className="block">Occupation Field</label>
      <select {...register('occupation')} name="occupation" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl ">
        <option>Select Occupation</option>
        <option>Student</option>
        <option>Tech</option>
        <option>Agriculture</option>
        <option>Medical</option>
      </select>
      {errors?.occupation && <p className="text-red-600">{errors.occupation.message}</p>}
    </div>

    <div>
      <label className="block">Email Address</label>
      <input {...register('email')} name="email" type="email" placeholder="Enter your Email Address" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.email && <p className="text-red-600">{errors.email.message}</p>}
    </div>

    <div>
      <label className="block">Contact Number</label>
      <input {...register('contact')} name='contact' type="number" placeholder="Enter your Contact Number" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.contact && <p className="text-red-600">{errors.contact.message}</p>}
    </div>

    
  </div>

  <div>
    <div className="flex mb-6 mt-10">
    <div className="w-2 h-8 bg-primary mr-3"></div><p className="text-xl">Address Details</p> </div> 


    <div className="grid grid-cols-3 gap-6"> 

    <div>
      <label className="block">State</label>
      <select {...register('state')} name="state" onChange={handleState} className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl ">
        <option >Select State</option>
       {states.map((state,index)=>(
            <option  key={index} value={state}>{state}</option>
        ))}
      </select>
      {errors?.state && <p className="text-red-600">{errors.state.message}</p>}
    </div>

    <div>
      <label className="block">District</label>
      <select {...register('district')} name="distirct" type="text" placeholder="Enter your District" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6">
        <option>Select District</option>
        {(filteredDist).map(dist=>(<option key={dist} value={dist}>{dist}</option>))} 
      </select>
      {errors?.district && <p className="text-red-600">{errors.district.message}</p>}
    </div>

    <div>
      <label className="block">Municipality</label>
      <input {...register('municipality')} name="municipality" type="text" placeholder="Enter your Municipality" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.municipality && <p className="text-red-600">{errors.municipality.message}</p>}
    </div>

    <div>
      <label className="block">Ward Number</label>
      <input {...register('wardnumber')} name="wardnumber" type="number" placeholder="Enter your Ward Number" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.wardnumber && <p className="text-red-600">{errors.wardnumber.message}</p>}
    </div>

    <div>
      <label className="block">Toll Name (Optional)</label>
      <input {...register('tollname')} name="tollname" type="text" placeholder="Enter your Toll Name" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
    </div>


    </div>
        </div>

        
  <div>
    <div className="flex mb-6 mt-10">
    <div className="w-2 h-8 bg-primary mr-3"></div><p className="text-xl">Document Details</p> </div> 


    <div className="grid grid-cols-3 gap-6"> 

    <div>
      <label className="block">Document Type</label>
      <select {...register('document')} name="document" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl ">
        <option>Select Document Type</option>
        <option>Aadhar</option>
        <option>Passport</option>
        <option>Voter Id</option>
      </select>
      {errors?.document && <p className="text-red-600">{errors.document.message}</p>}
    </div>

    

    

    <div>
      <label className="block">Citizenship Number</label>
      <input {...register('citizen')} type="number" name="citizen" placeholder="Enter Citizenship Number" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.citizen && <p className="text-red-600">{errors.citizen.message}</p>}
    </div>

    <div>
      <label className="block">Issued District</label>
      <input {...register('issuedistrict')} name="issuedistrict" type="text" placeholder="Enter your Citizenship issued District" className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.issueddistrict && <p className="text-red-600">{errors.issueddistrict.message}</p>}
    </div>

    <div>
      <label className="block">Date of Issue</label>
      <input {...register('dateofissue')} name="dateofissue" type="date" placeholder="Selet Issued Date " className="mt-1 block w-full border border-black focus:outline-blue-500 rounded px-2 py-3 rounded-xl p-6"/>
      {errors?.dateofissue && <p className="text-red-600">{errors.dateofissue.message}</p>}
    </div>
    


    </div>
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center w-3/4 h-28 border-2 border-black border-dashed rounded-2xl px-10 py-28">
      {image && (<img src={image} className="w-24 h-24 mb-2 rounded"
                                    style={{ objectFit: 'cover' }}  />
                     )}

        {!image && <label className="hover:underline">
           <p> <span className="font-bold">Upload</span> your profile picture (optional)</p>
       <p className="text-xs">PNG, JPG or JPEG (MAX. 800x400px)</p>
        </label>}
        <input type="file" accept="image/*"onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                                       file:rounded-lg file:border-0 
                                       file:text-sm file:font-semibold 
                                       file:bg-[#ff1717] file:text-white 
                                       hover:file:bg-red-700 mt-2" 
                        />
                        {image &&<div className="flex w-3/4"><button
            className="bg-primary hover:bg-red-700 text-white mt-3 font-bold py-1 px-10 w-full rounded-lg flex items-center justify-center"
            onClick={() => setImage(null)} selected image on click
        >
            Delete Selected File 
            <RiDeleteBin5Fill className="ml-2" />
        </button></div>}
            
                 </div>
                 <button type="sumbit" className="mt-10 bg-primary text-white w-full py-3 px-10 border-2 rounded-lg justify-center text-center cursor-pointer "  > Submit Details For KYC Verification</button>

                 
                      </div>
    

        </div>
  </form>
</div>





</div>




        </div>
        </div>

        </div>
    )
}
export default Kyc_Form;