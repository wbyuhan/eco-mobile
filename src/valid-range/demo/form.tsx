import React from 'react';

import { Button, WhiteSpace } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';
import Form, { Field } from 'rc-field-form';

const styles = createUseStyles({
  root: {
    width: '375px',
  },
});

export default () => {
  const s = styles();
  const [form] = Form.useForm();

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
