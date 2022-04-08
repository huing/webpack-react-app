import { Button, Card, Form } from 'antd';
import React, { useState } from 'react';
import Basic from './Basic';
import CardForm from './CardForm';
import More from './More';

const CloneChild: React.FC<{}> = () => {
  return (
    <div>
      <Basic />
      <CardForm title="更多">
        <More />
      </CardForm>
    </div>
  );
};

export default CloneChild;
