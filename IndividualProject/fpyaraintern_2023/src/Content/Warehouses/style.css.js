import styled from "styled-components";

export const StyledTable = styled.table`
  margin-top: 24px;
  border-collapse: collapse;
  justify-content: center;
  width: 50%;

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 3px solid #ddd;
    font-family: "Garamond", sans-serif;
  }
  th {
    background-color: #333;
    color: #ffffff;
  }
`;
