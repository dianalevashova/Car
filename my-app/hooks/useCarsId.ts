import { getCarsById } from '@/app/services/cars';
import { useQuery } from '@tanstack/react-query';

export const useCarId = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => getCarsById(id),
    enabled: Boolean(id),
  });
};
