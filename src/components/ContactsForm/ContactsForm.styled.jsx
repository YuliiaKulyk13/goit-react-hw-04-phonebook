import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
  justify-content: baseline;
`;

export const FormInput = styled.input`
  padding: 3px;
  border-radius: 8px;
  margin-left: 10px;
  height: 20px;
  width: auto;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;

export const AddButton = styled.button`
  width: 95px;
  height: auto;
  font-size: 12px;
  padding: 5px;
  border-radius: 8px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  display: block;
  font-style: italic;
  color: #0d497e;
`;
