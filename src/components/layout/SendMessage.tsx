import React from 'react';
import { Button, Form, Input } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';

interface FormValues {
  message: string;
}
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const C: React.FC<FormikProps<FormValues> & Props> = (props) => {
  const { values, handleSubmit, handleChange, dirty } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item label="Message" name="message">
        <Input
          name="message"
          value={values.message}
          placeholder="Password"
          onChange={handleChange}
          // onBlur={handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </form>
  );
};

export const SendMessage = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ message: '' }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    // if (errors) {
    //   setErrors(errors);
    // }
  },
})(C);
