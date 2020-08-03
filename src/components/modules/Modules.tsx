import React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { Button, Form, Input } from 'antd';

import * as Yup from 'yup';

import classes from './Modules.module.css';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const C: React.FC<FormikProps<FormValues> & Props> = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = props;

  return (
    <form name="basic" onSubmit={handleSubmit} className={classes.LogIn}>
      <Form.Item
        className={classes.Item}
        validateStatus={errors.email && touched.email ? 'error' : 'success'}
        help={touched.email && errors.email ? errors.email : ''}
      >
        <Input
          name="email"
          placeholder="Email"
          // prefix={
          //   <UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25' }} />
          // }
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
      </Form.Item>

      <Form.Item
        className={classes.Item}
        validateStatus={
          errors.password && touched.password ? 'error' : 'success'
        }
        help={touched.password && errors.password ? errors.password : ''}
      >
        <Input.Password
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </form>
  );
};

//validation

const emailNotLongEnough = 'email must be at least 3 characters';
const passwordNotLongEnough = 'password must be at least 3 characters long';
const invalidEmail = 'email must be a valid email';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: Yup.string().min(3, passwordNotLongEnough).max(255).required(),
});

export const Login = withFormik<Props, FormValues>({
  validationSchema,
  validateOnChange: false,
  // validateOnBlur: false,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
