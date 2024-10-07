import * as yup from 'yup'

const schema = yup.object().shape({
    fname:yup.string().required('Full Name is Required').min(2,'Full Name should have min 2 letters'),
    dob:yup.date().required('DOB Must be Selected').max(new Date(),'DOB Cant be in Future'),
    fathername:yup.string().required('Father Name is Required'),
    gender:yup.string().required('Gender is Required'),
    occupation:yup.string().required('You Must Select Your Occupation Field'),
    email:yup.string().email().required('Email Address is Required'),
    contact:yup.number().required('Your Contact Number is Required'),
    state:yup.string().required('State must be selected'),
    district:yup.string().required('District Must be Selected'),
    municipality:yup.string().required('Municipality is Required Field'),
    wardnumber:yup.string().required('Ward Number is Required Field'),
    document:yup.string().required('Document Type Must be Selected'),
    citizen:yup.number().required('Citizenship Number is Required'),
    issuedistrict:yup.string().required('Issued District is Required Field'),
    dateofissue:yup.date().required('Date of Issue Must be Selected').max(new Date(),'Issued Date Cant be in Future'),


    


})
export default schema;