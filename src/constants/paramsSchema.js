import * as yup from 'yup';

export const paramsSchema = yup.object().shape({
  weight: yup.number()
    .required('Weight is required')
    .max(999, 'Weight must be less than or equal to 999')
    .min(1, 'Weight must be greater than or equal to 1'),
  height: yup.number()
    .required('Height is required')
    .max(999, 'Height must be less than or equal to 999')
    .min(1, 'Height must be greater than or equal to 1'),
});
