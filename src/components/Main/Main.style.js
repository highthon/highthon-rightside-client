/* your css code */
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// search

export const SearchFrame = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1180px;
  height: 48px;
  border-radius: 24px;
  padding-right: 24px;

  border: 1px solid black;

  margin-top: 36px;
`;

export const SearchBox = styled.input`
  border-radius: 24px 0px 0px 24px;
  height: 100%;
  width: 90%;
  padding-left: 20px;
  border: none;
  outline: none;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
