import styled from 'styled-components'
export const TableWrapper  = styled.div`
    margin: 10px 70px 70px;
    display: grid;

    align-content: center;

    height: 100vh;
    // box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    @media (max-width: 767px) {
        &:before{
        display: block;
        text-align: center;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
}
`
export const TableContainer = styled.table`
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    @media (max-width: 767px) {
    display: block;
        width: 100%;
 }
`

export const TableHedContainer = styled.thead`
    -webkit-box-shadow:-3px 6px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 0px 0 rgb(0 0 0 / 0%);
    @media (max-width: 767px) {
        display: block;
        float: right;
    }
`
export const TableBodyContainer = styled.tbody`
@media (max-width: 767px) {
    display: block;
    width: auto;
    position: relative;
    overflow-x: auto;
}
`
export const TableTh = styled.th`
    text-align: center;
    padding: 8px;
    color: #ffffff;
    background: #7100E1;
    &:nth-child(odd) {
    color: #ffffff;
    background: #5700AD;
}
@media (max-width: 767px) {
    display: block;
    &:last-child{
        border-bottom: none;
    }
    padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
        text-align: center;
        border-bottom: 1px solid #f7f7f9;
        text-align: center;
        border-bottom: 1px solid #f7f7f9;
}
`
export const TableTd = styled.td`
text-align: center;
    padding: 8px;
    border-left: 1px solid #f8f8f8;
    font-size: 12px;
    @media (max-width: 767px) {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
        &:nth-child(odd) {
        background: #F8F8F8;
        border-left: 1px solid #E6E4E4;
    }
    &:nth-child(even) {
        border-left: 1px solid #E6E4E4;
    }
        display: block;
    }
`
export const ShippingQuantity = styled.input`
    width: 56px;
    border-style: unset;
`
export const TableTr = styled.tr`
&:nth-child(even) {
    background: #F8F8F8;
}
@media (max-width: 767px) {
&:nth-child(even) {
        background: transparent;
    }
    }
`
export const IconContainer = styled.div`
display:flex;
 justify-content: space-between;
`