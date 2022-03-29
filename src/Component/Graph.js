import React from 'react';
import CashFlowData from '../Json/CashFlowData.json';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip, Legend,} from 'chart.js';
import 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2';
import Options from '../Helper/Options'
import Dataset from '../Helper/Dataset'
import Container from '@material-ui/core/Container';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const labels = []
CashFlowData.map(key => {
  labels.push(key.year);
})

export function Graph() {
  return (
  <Container>
    <Bar options={Options} data={Dataset} />
  </Container>);
}