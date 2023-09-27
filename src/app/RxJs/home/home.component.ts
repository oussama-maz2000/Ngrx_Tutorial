import { Component, OnInit } from '@angular/core';
import { Observable, merge, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private obs1: Observable<number> = of(1, 2, 3);
  private obs2: Observable<number> = of(4, 5, 6);
  ngOnInit(): void {
    merge(this.obs1, this.obs2).subscribe((value) => console.log(value));
  }
}
