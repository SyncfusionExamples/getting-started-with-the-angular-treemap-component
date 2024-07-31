import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeMapModule, TreeMapLegendService, TreeMapTooltipService,
  TreeMapHighlightService, TreeMapSelectionService
 } from '@syncfusion/ej2-angular-treemap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeMapModule],
  providers: [TreeMapLegendService, TreeMapTooltipService, TreeMapHighlightService,
    TreeMapSelectionService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public selectionSettings: Object = { enable: true };
  public highlightSettings: Object = { enable: true };
  public titleSettings: Object = {
    text: 'Top 10 Countries by Sales',
    textStyle: { size: '15px' }
  };
  public tooltipSettings: Object = { visible: true };
  public legendSettings: Object = { visible: true };
  public leafItemSettings: Object = {
    labelPath: 'country',
    colorMapping: [
      {
        from: 1,
        to: 2000,
        color: '#C84B4B'
      },
      {
        from: 2000,
        to: 4000,
        color: '#8C304D'
      },
      {
        from: 4000,
        to: 20000,
        color: '#4B134F'
      }
    ]
  };
  public data: object[] = [
    {country:"United States", sales:17946 },
    {country:"Japan", sales:4123 },
    {country:"Brazil", sales:1774 },
    {country:"Germany", sales:3355 },
    {country:"United Kingdom", sales:2848 },
    {country:"France", sales:2421 },
    {country:"China", sales:10866 },
    {country:"India", sales:2073 },
    {country:"Italy", sales:1814 },
    {country:"Canada", sales:1550 }
    ];
  title = 'myangularapp';
}
