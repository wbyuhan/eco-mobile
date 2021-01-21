import React, { useEffect } from 'react';

import Form, { Field } from 'rc-field-form';
import { WhiteSpace, Button } from 'antd-mobile';
import { ImagePicker } from 'eco-mobile';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ filesList: [] });
  }, []);

  const submit = () => {
    const values = form.getFieldsValue();
    console.log(values);
  };

  return (
    <div>
      <Form form={form}>
        <Field name="filesList">
          <ImagePicker />
        </Field>
      </Form>
      <WhiteSpace />
      <Button onClick={submit} size="small" type="primary" inline>
        Submit
      </Button>
    </div>
  );
};
