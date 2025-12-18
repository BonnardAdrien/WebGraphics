import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-base-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './base-chart.html',
  styleUrl: './base-chart.css',
})

export class BaseChart implements OnInit {

  champions: any[] = [];

  ngOnInit() {
    fetch('assets/champions.json')
      .then(response => response.json())
      .then(data => {
        this.champions = data;
        // Adapter les données pour le bar chart
        this.barChartData = {
          labels: data.labels,
          datasets: data.datasets
        };
      })
      .catch(error => {
        console.error('Erreur lors du chargement du JSON:', error);
      });
  }

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  public barChartOptions = {
    responsive: true,
  };

  public barChartLegend = true;

  public barChartType: ChartType = 'bar';
}
