import { getCarsFilters } from '@/app/services/cars';
import { useQuery } from '@tanstack/react-query';

export const useCarsFilters = () => {
  return useQuery({
    queryKey: ['carsFilters'],
    queryFn: getCarsFilters,
    staleTime: Infinity,
  });
};
