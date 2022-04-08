import { Button, Card, Form } from 'antd';
import React, { useState } from 'react';

interface PropsDTO {
  title: string;
}

const CardForm: React.FC<PropsDTO> = (props) => {
  console.log('cardform', props);

  const { title, children } = props;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Record<string, any>>();
  const [isEditor, setIsEditor] = useState(false);

  const handleOk = () => {
    setIsEditor(false);
  };

  const renderExtraButtons = () => {
    if (isEditor) {
      return (
        <>
          <Button type="primary" className="m-r-s" onClick={handleOk}>
            保存
          </Button>
          <Button onClick={handleOk}>取消</Button>
        </>
      );
    }
    return (
      <Button type="link" onClick={() => setIsEditor(true)}>
        编辑
      </Button>
    );
  };

  return (
    <Card
      title={title}
      extra={renderExtraButtons()}
      style={{ marginBottom: 20 }}
    >
      <Form
        form={form}
        onValuesChange={(changeValues, allValues) => setFormValues(allValues)}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            console.log(child);

            return React.cloneElement(child, {
              ...child.props,
              value: formValues,
              disabled: !isEditor,
            });
          }
          return null;
        })}
      </Form>
    </Card>
  );
};

export default CardForm;
