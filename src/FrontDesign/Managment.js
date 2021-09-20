import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
export default class TrackTable extends Component {
    render() {
       const sub = "d" 
        return (
            <StyledTable.TableWrapper>
                <StyledTable.TableContainer>
                    <StyledTable.TableHedContainer>
                        <tr>
                            <StyledTable.TableTh className="tableHeader">Area</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Item Count</StyledTable.TableTh>
                            {sub !== "d"? <StyledTable.TableTh className="tableHeader">Ex Date</StyledTable.TableTh>
                            :<StyledTable.TableTh className="tableHeader">Price</StyledTable.TableTh>}
                        </tr>
                   </StyledTable.TableHedContainer>
                    <StyledTable.TableBodyContainer>
                    <StyledTable.TableTr>
                            <StyledTable.TableTd className="tableBody">أحمد ال الكبير</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">483759842</StyledTable.TableTd>
                            {sub !== "d"? <StyledTable.TableTd className="tableBody">ملغي</StyledTable.TableTd>
                            :<StyledTable.TableTd className="tableBody">سمسا</StyledTable.TableTd>}
                        </StyledTable.TableTr>
                    </StyledTable.TableBodyContainer>
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
        )
    }
}