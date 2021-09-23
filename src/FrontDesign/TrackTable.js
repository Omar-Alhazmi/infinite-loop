import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
export default class TrackTable extends Component {
    render() {
        
        return (
            <StyledTable.TableWrapper>
                <StyledTable.TableContainer>
                    <StyledTable.TableHedContainer>
                        <tr>
                            <StyledTable.TableTh className="tableHeader">Customer</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Order ID</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Order Status</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Shipping Company</StyledTable.TableTh>
                        </tr>
                    </StyledTable.TableHedContainer>
                    <StyledTable.TableBodyContainer>
                    <StyledTable.TableTr>
                            <StyledTable.TableTd className="tableBody">أحمد ال الكبير</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">483759842</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">ملغي</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">سمسا</StyledTable.TableTd>
                        </StyledTable.TableTr>
                    </StyledTable.TableBodyContainer>
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
        )
    }
}