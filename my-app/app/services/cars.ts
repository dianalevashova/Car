import {
  BookingRequest,
  BookingResponse,
  CarDetails,
  CarsFilters,
  CarsResponse,
} from '@/types/cars';
import { api } from './api';
export interface CarsQueryParams {
  brand?: string;
  price?: number;
  minMileage?: number;
  maxMileage?: number;
  perPage?: number;
  page?: number;
}
export const getCars = async (params: CarsQueryParams) => {
  const { data } = await api.get<CarsResponse>('/cars', { params });
  return data;
};
export const getCarsById = async (id: string) => {
  const { data } = await api.get<CarDetails>(`/cars/${id}`);
  return data;
};
export const getCarsFilters = async () => {
  const { data } = await api.get<CarsFilters>('/cars/filters');
  return data;
};
export const createBookingRequest = async (
  carId: string,
  body: BookingRequest
) => {
  const { data } = await api.post<BookingResponse>(
    `/cars/${carId}/booking-requests`,
    body
  );
  return data;
};
