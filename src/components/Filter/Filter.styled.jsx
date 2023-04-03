import styled from 'styled-components';

export const Input = styled.input`
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

export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  display: block;
  margin: 0 auto;
  color: #0a4579;
  font-style: italic;
`;
