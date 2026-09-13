'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'izitoast/dist/css/iziToast.min.css';
import { BookingRequest } from '@/types/cars';

import { createBookingRequest } from '@/app/services/cars';
import css from './FormBooking.module.css';
interface FormBookingProps {
  carId: string;
}
const initialValues: BookingRequest = {
  name: '',
  email: '',
  comment: '',
};
const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  coment: Yup.string(),
});

export default function FormBooking({ carId }: FormBookingProps) {
  const handleSubmit = async (
    values: BookingRequest,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (v: boolean) => void }
  ) => {
    const { default: izitoast } = await import('izitoast');
    try {
      await createBookingRequest(carId, values);
      izitoast.success({
        title: 'Success',
        message: 'Booking request sent successfully!',
        position: 'topRight',
      });
      resetForm();
    } catch (error) {
      izitoast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={css.form}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.fields}>
            <div className={css.field}>
              <label htmlFor="name" className={css.visuallyHidden}>
                Name
              </label>
              {errors.name && touched.name && (
                <span className={css.floatingLabel}>Name*</span>
              )}
              <Field
                id="name"
                name="name"
                type="text"
                placeholder={errors.name && touched.name ? '' : 'Name*'}
                className={
                  errors.name && touched.name
                    ? `${css.input} ${css.inputError}`
                    : css.input
                }
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.errorText}
              />
            </div>

            <div className={css.field}>
              <label htmlFor="email" className={css.visuallyHidden}>
                Email
              </label>
              {errors.email && touched.email && (
                <span className={css.floatingLabel}>Email*</span>
              )}
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={errors.email && touched.email ? '' : 'Email*'}
                className={
                  errors.email && touched.email
                    ? `${css.input} ${css.inputError}`
                    : css.input
                }
              />
              <ErrorMessage
                name="email"
                component="p"
                className={css.errorText}
              />
            </div>

            <div className={css.field}>
              <Field
                id="comment"
                name="comment"
                type="text"
                placeholder={'Comment'}
                className={css.input}
              />
              <ErrorMessage
                name="comment"
                component="p"
                className={css.errorText}
              />
            </div>

            <button
              type="submit"
              className={css.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
