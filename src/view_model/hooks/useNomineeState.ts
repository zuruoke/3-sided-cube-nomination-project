import { useState, useEffect } from 'react';

const useNomineeState = () => {
  // Initialize state from sessionStorage or default to initial values
  const [openModal, setOpenModal] = useState<boolean>(sessionStorage.getItem('openModal') === 'true');
  const [text, setText] = useState<string>(sessionStorage.getItem('text') || '');
  const [option, setOption] = useState<string | undefined>(sessionStorage.getItem('option') || undefined);
  const [ratingVal, setRating] = useState<string>(sessionStorage.getItem('ratingVal') || 'Very Unfair');
  const [isValid, setIsValid] = useState<boolean>(sessionStorage.getItem('isValid') === 'true');

  // Update sessionStorage when state changes
  useEffect(() => {
    sessionStorage.setItem('openModal', openModal.toString());
    sessionStorage.setItem('text', text);
    if (option !== undefined) sessionStorage.setItem('option', option);
    sessionStorage.setItem('ratingVal', ratingVal);
    sessionStorage.setItem('isValid', isValid.toString());
  }, [openModal, text, option, ratingVal, isValid]);

  const clearState = () => {
    // Set each state back to its initial value
    setOpenModal(false);
    setText('');
    setOption(undefined);
    setRating('Very Unfair');
    setIsValid(false);

    // Clear session storage items
    sessionStorage.removeItem('openModal');
    sessionStorage.removeItem('text');
    sessionStorage.removeItem('option');
    sessionStorage.removeItem('ratingVal');
    sessionStorage.removeItem('isValid');
  };

  return {
    openModal,
    setOpenModal,
    text,
    setText,
    option,
    setOption,
    ratingVal,
    setRating,
    isValid,
    setIsValid,
    clearState,
  };
};

export default useNomineeState;
