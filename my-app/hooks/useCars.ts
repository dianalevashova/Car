import { CarsQueryParams, getCars } from '@/app/services/cars';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useCars = (filters: Omit<CarsQueryParams, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['cars', filters],
    queryFn: ({ pageParam }) =>
      getCars({ ...filters, page: pageParam, perPage: 4 }),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });
};
