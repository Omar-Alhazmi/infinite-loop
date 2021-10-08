import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
export default class SubStatus extends Component {
    render() {
        return (
            <>
            <StyledTable.TableWrapper>
              <StyledTable.TableContainer>
                <StyledTable.TableHedContainer>
                  <tr>
                    <StyledTable.TableTh className="tableHeader">
                      {" "}
                      Plan{" "}
                    </StyledTable.TableTh>
    
                    <StyledTable.TableTh className="tableHeader">
                      {" "}
                      Subscrbtion Strogae Area{" "}
                    </StyledTable.TableTh>
    
                    <StyledTable.TableTh className="tableHeader">
                      {" "}
                      Storage Area{" "}
                    </StyledTable.TableTh>
    
                    <StyledTable.TableTh className="tableHeader">
                      {" "}
                      Subscrbtion End Date{" "}
                    </StyledTable.TableTh>
                  </tr>
                </StyledTable.TableHedContainer>
    
                <StyledTable.TableBodyContainer>
                  <StyledTable.TableTr>
                    <StyledTable.TableTd className="tableBody">
                      {" "}
                      Primary{" "}
                    </StyledTable.TableTd>
    
                    <StyledTable.TableTd className="tableBody">
                      {" "}
                      100M{" "}
                    </StyledTable.TableTd>
    
                    <StyledTable.TableTd className="tableBody">
                      {" "}
                      34M{" "}
                    </StyledTable.TableTd>
    
                    <StyledTable.TableTd className="tableBody">
                      {" "}
                      11/12/2021{" "}
                    </StyledTable.TableTd>
                  </StyledTable.TableTr>
                </StyledTable.TableBodyContainer>
              </StyledTable.TableContainer>
            </StyledTable.TableWrapper>{" "}
          </>
                )
    }
}
