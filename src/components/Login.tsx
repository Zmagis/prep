import React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { Button, Form, Input } from 'antd';
import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  email: Yup.string().required('This field is required').email('Invalid email'),
  password: Yup.string()
    .required('This field is required')
    .min(8, 'at least 8 characters'),
});

interface FormValues {
  email: string;
  password: string;
}
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const LoginView: React.FC<FormikProps<FormValues> & Props> = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;
  console.log(errors);
  console.log('Touched: ', touched);

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item
        label="Email"
        help={touched.email && errors.email ? errors.email : ''}
        validateStatus={touched.email && errors.email ? 'error' : undefined}
      >
        <Input
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </form>
  );
};

export const Login = withFormik<Props, FormValues>({
  validationSchema: loginValidation,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(LoginView);
