import React, { useEffect, useState } from 'react';
import CashFlowData from '../Json/CashFlowData.json';
import { Graph } from './Graph';
import TableDisplay from './TableDisplay';
import Container from '@material-ui/core/Container';

export const CashFlow = () => {

    const [data, setData] = useState(CashFlowData);
    const [toggle, setToggle] = useState("table");

    useEffect(() => {
        console.log('CashFlow comp');
    }, [])

    return (
        <Container>
            <div class="tabbing-panel-section">
                <div id="jsTabs1" class="tabs tab-container">

                    <div class="tab-content" id="scrollable">
                        <div>
                            <legend class="sr-only">You can view the projections either in graph or in table by toggling between graph View and table View</legend>
                            <div class="radio-group" id="cashRadioBtn">
                                <div class="form-check" >
                                    <label class="custom-radio body-text" >
                                        <input type="radio" name="cash-radio" id="inputTableCash" data-target=".js-cash-table" defaultChecked  onClick={() => { setToggle("table") }} />
                                        <span class="radio-circle" aria-hidden="true"></span>
                                        <img src="./images/table-icon.svg" width="20" height="20" alt="" />
                                        <span class="radio-txt">Table</span>
                                    </label>
                                </div>
                                <div class="form-check" >
                                    <label class="custom-radio body-text" >
                                        <input type="radio" name="cash-radio" id="inputGraphCash" data-target=".js-cash-graph" onClick={() => { setToggle("graph") }}/>
                                        <span class="radio-circle" aria-hidden="true"></span>
                                        <img src="./images/graph-icon.svg" width="20" height="20" alt="" />
                                        <span class="radio-txt">Graph</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {
                            toggle === "table" ?
                                <div className="js-cash-table active">
                                    <TableDisplay />
                                </div>
                                :
                                <div className="js-cash-table active">
                                    <Graph />
                                </div>
                        }
                    </div>
                </div>
            </div>

        </Container>
    );
}