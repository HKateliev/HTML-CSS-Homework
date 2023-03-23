import styled from 'styled-components';

export const StyledTable = styled.table`
    margin-top: 24px;
    border-collapse: collapse;
    width: 10%;

    th,
    td {
        padding: 10px;
        text-align: left;
        border: 3px solid #ddd;
        font-family: 'Garamond', sans-serif;
    }
    th {
        background-color: #f8b195;
        font-weight: bold;
    }
`;
