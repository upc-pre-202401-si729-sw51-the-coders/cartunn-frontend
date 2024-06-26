import { Component } from '@angular/core';
import { ReportsApiService } from '../../services/reports-api/reports-api.service';
import { Report } from '../../model/report.entity';

@Component({
  selector: 'app-card-reports',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class ReportCardComponent {
  reports: Report[] = [];

  constructor(private notificationsService: ReportsApiService) { }

  ngOnInit(): void {
    this.notificationsService.getStatusReport()
      .subscribe((data: Report[]) => {
        this.reports = data;
      });
  }
}
