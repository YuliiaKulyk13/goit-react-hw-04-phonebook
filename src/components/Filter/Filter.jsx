import React from 'react';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Filter by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);
export default Filter;
