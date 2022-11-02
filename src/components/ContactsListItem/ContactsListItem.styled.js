import styled from '@emotion/styled';
export const Item = styled.li`
  font-size: 20px;
  padding: 5px;
  &:not(:last-child) {
    margin-top: 10px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemContainerSpan = styled.span`
  margin-left: 10px;
  font-weight: 800;
`;
export const Button = styled.button`
  border: none;
  font-size: 15px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 6px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
