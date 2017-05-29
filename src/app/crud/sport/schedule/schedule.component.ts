import {Component, OnInit} from "@angular/core";
import {Schedule} from "../schedule/schedule";
import {ScheduleService} from "./schedule.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [ScheduleService],
})
export class ScheduleComponent implements OnInit {
  schedules: Schedule[] = [];
  selectedSchedule: Schedule;

  constructor(private scheduleService: ScheduleService,
              private router: Router) {
  }

  getSchedules(): void {
    this.scheduleService
      .getSchedules()
      .then(schedules => this.schedules = schedules);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.scheduleService.create(name)
      .then(schedule => {
        this.schedules.push(schedule);
        this.selectedSchedule = null;
      });
  }

  delete(schedule: Schedule): void {
    this.scheduleService
      .delete(schedule.id)
      .then(() => {
        this.schedules = this.schedules.filter(h => h !== schedule);
        if (this.selectedSchedule === schedule) {
          this.selectedSchedule = null;
        }
      });
  }

  ngOnInit(): void {
    this.getSchedules();
  }

  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSchedule.id]);
  }
}
