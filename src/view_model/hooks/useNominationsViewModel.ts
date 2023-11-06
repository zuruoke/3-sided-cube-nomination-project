import { useCubeAcademyGetAllNominations } from '@/model/api/apiComponents';
import { _fetcherOptions } from '@/model/utils/constants';

export const useNominationsViewModel = () => {
  const {
    data: nominationsData,
    isLoading,
    isError,
  } = useCubeAcademyGetAllNominations(_fetcherOptions);

  // Calculate the number of nominations based on the loading state and the presence of data
  const nominationsCount = isLoading || isError ? 0 : nominationsData?.data?.length || 0;

  return {
    nominationsCount,
    isLoading,
    isError,
    nominations: nominationsData?.data,
  };
};
