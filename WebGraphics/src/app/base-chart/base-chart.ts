import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-base-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './base-chart.html',
  styleUrl: './base-chart.css',
})

export class BaseChart {
  public lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    ]
  };

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';
}
