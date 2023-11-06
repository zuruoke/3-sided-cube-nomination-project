'use client';

import React, { useEffect, useState } from 'react';
import Dropdown from '../utils/Dropdown';
import InputField from '../utils/forms/InputField';
import CustomButton from '../utils/buttons/Buttons';
import FairnessSlider from '../utils/Reactions';
import Image from 'next/image';
import { anonymous, poppins } from '@/app/layout';
import Modal from '../utils/alerts/Modal';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { queryKeyFn } from '@/model/api/apiContext';
import { Nominee } from '@/model/api/apiResponses';
import { useQueryClient } from '@tanstack/react-query';
import { _fetcherOptions, emojis } from '@/model/utils/constants';
import { useCubeAcademyRetrieveNomineeList } from '@/model/api/apiComponents';

const EnterNomineeScreen: React.FC = () => {

  const {
    data: nominees,
    isLoading,
    isError,
    error
  } = useCubeAcademyRetrieveNomineeList(_fetcherOptions);

    const nomineeOptions: { label: string | undefined; value: string | undefined; }[] | undefined = nominees?.data?.map(nominee => ({
    label: nominee.first_name,
    value: nominee.nominee_id // Assuming each nominee has a unique 'id' that you want to use as the value
  }));

// const queryClient = useQueryClient();
//   const queryKey = queryKeyFn({
//     path: "/api/nominee",
//     operationId: "cubeAcademyRetrieveNomineeList",
//     variables: {}
//   });
//   console.log(queryKey)
//   const cachedData: Nominee | undefined = queryClient.getQueryData(queryKey);

//   // Assuming cachedData is an array and each nominee has a 'first_name' property
//   const nomineeOptions:any = cachedData?.data?.map(nominee => ({
//     label: nominee.first_name,
//     value: nominee.nominee_id // Assuming each nominee has a unique 'id' that you want to use as the value
//   }));
//   console.log(nomineeOptions);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [text, setText] = useState<any>('');
  const [option, setOption] = useState<any>();
  const [ratingVal, setRating] = useState<any>('');
  const [isValid, setIsValid] = useState(false);

  const ratings = ['Very Unfair', 'Unfair', 'Not Sure', 'Fair', 'Very Fair'];
  let selectedRating: string = ratings[0];

  const schema = yup.object().shape({
    textArea: yup.string().min(5).required('Please enter a valid reason'),
    Option: yup.string().required('Select an option'),
  });

  const dataToValidate = {
    textArea: { text },
    Option: { option },
  };

  function findLabelByValue(value: string | undefined) {
    const nominee = nomineeOptions?.find(nominee => nominee.value === value);
    return nominee ? nominee.label : null;
  }
  const labelToShow = findLabelByValue(option);

  useEffect(() => {
    schema
      .validate(dataToValidate)
      .then(() => setIsValid(true))
      .catch((validationError) => {
        console.error(validationError.errors);
      });
  }, [dataToValidate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formSubmit = (data: any) => {
    console.log(data);
  };

  const router = useRouter();
  return (
    <div className='bg-white h-full mb-24 mt-11 pt-10 w-3/5 px-10'>
      <HeaderImage />
      <>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='bg-white border-b border-gray-300 pb-16 mb-4'>
            <h2
              className={`text-2xl font-semibold mb-4 text-black ${poppins.className}`}
            >
              I&apos;D LIKE TO NOMINATE...
            </h2>
            <p
              className={`mb-8 text-gray-500 font-normal text-base text-wr ${anonymous.className}`}
            >
              Please select a cube who you feel has done something honourable
              this
              <br /> month or just all round has a great work ethic.
            </p>
            <div className='w-72'>
              <label
                className={`block font-bold text-base mb-1.5 text-black tracking-wide ${poppins.className}`}
              >
                <span className='text-pink-500 font-medium text-base'>* </span>
                Cube's name
              </label>

              <div className=' relative'>
                <select
                  value={option}
                  {...register('Option')}
                  name='Option'
                  className={`w-[400px] px-3 py-2.5 bg-white border appearance-none border-gray-300 text-gray-500 text-sm ${anonymous.className}`}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value=''>
                    Select Option
                  </option>
                  {nomineeOptions?.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.Option && (
                  <span className='text-red-700'>{errors.Option.message}</span>
                )}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-6 h-5 text-pink-500 absolute pointer-events-none top-2.5 left-[23rem]'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='bg-white pt-8 border-b border-gray-300 mb-10 pb-16'>
            <h2
              className={`text-2xl font-semibold mb-5 text-black ${poppins.className}`}
            >
              I&apos;D LIKE TO NOMINATE{' '}
              <span className='text-pink-500'>{labelToShow}</span> BECAUSE...
            </h2>
            <p
              className={`mb-8 text-gray-500 ${anonymous.className} tracking-tight font-400  text-base`}
            >
              Please let us know why you think this cube deserves the &apos;cube
              of the <br />
              month&apos; title 🏆⭐️
            </p>
            <div className=''>
              <label
                className={`block text-base ${poppins.className} font-bold mb-2 text-black`}
              >
                <span className='text-pink-500 font-medium text-base'>* </span>
                Reasoning
              </label>
              <textarea
                {...register('textArea')}
                className={`w-full p-4 border ${anonymous.className} border-gray-900 text-black resize-none`}
                rows={4}
                value={text}
                name='textArea'
                onChange={(e) => setText(e.target.value)}
                readOnly={false}
                placeholder='Type your reason here...'
              />
              {errors.textArea && (
                <span className='text-red-700'>{errors.textArea.message}</span>
              )}
            </div>
          </div>
          <div className='[bg-white mb-10'>
            <h2
              className={`text-2xl ${poppins.className} font-semibold mb-5 text-black`}
            >
              IS HOW WE CURRENTLY RUN CUBE OF THE MONTH <br /> FAIR?
            </h2>
            <p
              className={`mb-4 text-gray-600 font-extralight text-base tracking-tight ${anonymous.className}`}
            >
              As you know, out of the nominees chosen, we spin a wheel to pick
              the <br /> cube of the month. What&apos;s your opinion on this
              method?
            </p>
            <div className='flex flex-col items-center px-5 pt-5'>
              <div className='relative w-full h-2 bg-gray-300 rounded'>
                <div
                  className='absolute left-0 top-0 h-2 rounded flex items-center justify-end'
                  style={{
                    width: `${ratings.indexOf(ratingVal) === 0 ? 10 : ratings.indexOf(ratingVal) * 25}%`,
                    backgroundColor: '#e91e63',
                  }}
                >
                  <div className='w-5 h-5 bg-pink-500 rounded-full'>

                  </div>
                </div>
              </div>
              <div className='flex justify-between p-5 items-center w-full mt-4'>
                {ratings.map((rating) => (
                  <div
                    key={rating}
                    className='flex flex-col text-center justify-center items-center cursor-pointer'
                    onClick={() => setRating(rating)}
                  >
                    <div
                      className={`bg-gray-100 mb-2 h-12  flex items-center justify-center w-12 ${
                        rating === ratingVal
                          ? 'border-4 border-pink-500'
                          : ''
                      } justify-center items-center`}
                    >
                      <img
                        src={emojis[rating]}
                        alt={rating}
                        className={`w-8 h-8 justify-center items-center`}
                      />
                    </div>
                    <p
                      className={`flex text-sm text-gray-400 justify-start items-center text-center ${anonymous.className}`}
                    >
                      {rating}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center pb-7 pt-3 mb-2'>
            <CustomButton
              onClick={() => setOpenModal(true)}
              text='BACK'
              additionalStyles='mr-4 bg-white text-black outline outline-2 text-sm px-5 py-3 w-[104px] h-[50px] hover:text-white'
            />
            <CustomButton
              type='submit'
              disabled={isValid}
              text='NEXT'
              additionalStyles='w-[223px] h-[50px] bg-black text-white disabled:bg-[#C3C3C3]'
              onClick={() => {
                console.log(text);
                sessionStorage.setItem('nominationData', JSON.stringify({
                  'value': option,
                  'name': labelToShow,
                  'rating': ratingVal,
                  'text': text,
                }));
                router.push('/nomination-overview')
              }}
            />
          </div>
        </form>
        <Modal
          isOpen={openModal}
          onConfirm={() => router.back()}
          onCancel={() => setOpenModal(false)}
          title='ARE YOU SURE?'
          description='If you leave this page, you will lose any progress made.'
          buttonText='YES, LEAVE PAGE'
        />
      </>
    </div>
  );
};

const HeaderImage: React.FC = () => (
  <div className='mb-7 object-cover'>
    <Image
      width={6000}
      height={1000}
      src='/enter_nominee.png'
      alt='Nominations'
      className='w-full h-48 object-cover'
    />
  </div>
);

export default EnterNomineeScreen;