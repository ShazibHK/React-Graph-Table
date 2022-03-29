import CashFlowData from '../Json/CashFlowData.json';

export const labels = []
export const ExpectedRent = []
export const NetCashFlow = []
export const LoanPayment = []
export const TotalExpenses = []

CashFlowData.map(key => {
  labels.push(key.year);
})

CashFlowData.map(key => {
  ExpectedRent.push(key.ExpectedRent.yearly);
})

CashFlowData.map(key => {
  NetCashFlow.push(key.TotalNetCashFlow.yearly);
})

CashFlowData.map(key => {
  LoanPayment.push(key.LoanPayment);
})

CashFlowData.map(key => {
  TotalExpenses.push(key.TotalExpenses);
})

//Data Sets
const Dataset={
    labels,
    datasets: [
      {
        label: 'Expected Rent',
        order: 1,
        type: 'line',
        lineTension:0.3,
        data: ExpectedRent,
        backgroundColor: [
          'rgba(25,73,137,255)',
        ],
        borderColor: [
          'rgba(41,76,119,255)',
        ],
      },
      {
        barPercentage: 0.5,
        label: 'Net Cash Flow',
        order: 2,
        data: NetCashFlow,
        backgroundColor: 'rgba(26,64,109,255)',
        borderColor: [
          'rgba(191,191,191,255)',
        ],
        borderWidth: 1
      },
      {
        barPercentage: 0.5,
        label: 'Loan Payments',
        order: 3,
        data: LoanPayment,
        backgroundColor: 'rgba(156,173,226,255)',
        borderColor: [
          'rgba(191,191,191,255)',
        ],
        borderWidth: 1
      },
      {
        barPercentage: 0.5,
        label: 'Total Expenses',
        order: 4,
        data: TotalExpenses,
        backgroundColor: [
          'rgba(255, 255, 255, 255)',
        ],
        borderColor: [
          'rgba(191,191,191,255)',
        ],
        borderWidth: 1
      },
  
    ],
  };
export default Dataset;