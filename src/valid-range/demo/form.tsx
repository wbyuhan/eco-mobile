import React, { useEffect } from 'react';

import { Button, WhiteSpace } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/core';
import Form, { Field } from 'rc-field-form';

const styles = createUseStyles({
  root: {
    width: '375px',
    boxShadow: '0 3px 5px 0 #efefef',
  },
});

export default () => {
  const s = styles();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ date: [] });
  }, []);

  const submit = () => {
    const values = form.getFieldsValue();
    console.log(values);
  };

  return (
    <div className={s.root}>
      <Form form={form}>
        <Field name="date">
          <ValidRange />
        </Field>
      </Form>
      <WhiteSpace />
      <Button onClick={submit} size="small" type="primary" inline>
        Submit
      </Button>
    </div>
  );
};
