import React, { useEffect, useState } from 'react';
import CashFlowData from '../Json/CashFlowData.json';
const TableDisplay= () => {
    const [data, setData] = useState(CashFlowData);
    return (
        <>
            <div className="js-cash-table active">
                            <div className="table-wrap">
                                {
                                    <table className="projections-tbl bg-even-row">
                                        <caption class="sr-only">Projection Cash Flow table</caption>
                                        <tr>
                                            <th className="fixed-column">Test</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        {data.year}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Expected Rent</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['ExpectedRent']['yearly']}
                                                        <span>${data['ExpectedRent']['monthly']}/mo</span>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Total Expenses</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['TotalExpenses']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Property Taxes</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['PropertyTaxes']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">R&M (Reserve)</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['R&MReserve']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Other Expenses<span>(leasing, HOA, insurance fees)</span></th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['OtherExpenses']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr className="light-blue-tr">
                                            <th className="fixed-column"><strong>NET OPERATING INCOME</strong></th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['NetOperatingIncome']['yearly']}
                                                        <span>${data['NetOperatingIncome']['monthly']}/mo</span>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Cap Ex (Reserve)</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['CapExReserve']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr className="light-blue-tr">
                                            <th className="fixed-column"><strong>TOTAL UNLEVERED CASH FLOW</strong></th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['TotalUnleveredCashFlow']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="fixed-column">Loan Payment</th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['LoanPayment']}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        <tr className="light-blue-tr">
                                            <th className="fixed-column"><strong>TOTAL NET CASH FLOW</strong></th>
                                            {data.map((data, key) => {
                                                return (
                                                    <td key={key} className="fixed-column">
                                                        ${data['TotalNetCashFlow']['yearly']}
                                                        <span>${data['TotalNetCashFlow']['monthly']}/mo</span>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    </table>
                                }
                            </div>
            </div>
        </>
    );
}
export default TableDisplay;