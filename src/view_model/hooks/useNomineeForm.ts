// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useNomineeState } from './useNomineeState';

// export const useNomineeForm = (nomineeOptions: { label: string | undefined; value: string | undefined; }[] | undefined) => {


// const {
//     openModal,
//     setOpenModal,
//     text,
//     setText,
//     option,
//     setOption,
//     ratingVal,
//     setRating,
//     isValid,
//     setIsValid,
// } = useNomineeState()

// // Validation schema
// const schema = yup.object().shape({
//     textArea: yup.string().min(5).required('Please enter a valid reason'),
//     Option: yup.string().required('Select an option'),
//   });

//   // Data for validation
//   const dataToValidate = {
//     textArea: text,
//     Option: option,
//   };

//   // Utility function
//   function findLabelByValue(value: string | undefined) {
//     const nominee = nomineeOptions?.find((nominee) => nominee.value === value);
//     return nominee ? nominee.label : null;
//   }
//   const labelToShow = findLabelByValue(option);

//   // Form validation effect
//   useEffect(() => {
//     schema
//       .validate(dataToValidate)
//       .then(() => setIsValid(true))
//       .catch((validationError) => {
//         console.error(validationError.errors);
       
//       });
//   }, [dataToValidate]);

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//     trigger,
//   } = useForm({
//     resolver: yupResolver(schema),
//     // defaultValues: {
//     //   textArea: '',
//     //   Option: undefined,
//     // },
//   });

//   // Function to handle form submission
//   const formSubmit = (data: any) => {
//     console.log(data);
//     // Handle form submission logic here
//   };

//   // Expose the state and utility functions
//   return {
//     openModal,
//     setOpenModal,
//     text,
//     setText,
//     option,
//     setOption,
//     ratingVal,
//     setRating,
//     isValid,
//     labelToShow,
//     register,
//     handleSubmit: handleSubmit(formSubmit),
//     errors,
//     reset,
//     setValue,
//     trigger,
//   };
// };
