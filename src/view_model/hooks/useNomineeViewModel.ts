import { useCubeAcademyRetrieveNomineeList } from "@/model/api/apiComponents";
import { _fetcherOptions } from "@/model/utils/constants";

export const useNomineeViewModel = () => {
    const {
        data: nominees,
        isLoading,
        isError,
        error
      } = useCubeAcademyRetrieveNomineeList(_fetcherOptions);

    const nomineeOptions: { label: string | undefined; value: string | undefined; }[] | undefined = nominees?.data?.map(nominee => ({
    label: nominee.first_name,
    value: nominee.nominee_id 
  }));
  return {
    nomineeOptions,
    nominees,
    isLoading,
    isError, 
    error
  };

}