import { Component } from '@angular/core';
import { RadiosService } from './radios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private radios:RadiosService) {
    this.radios.getCitiesStations().subscribe(stations => {
      console.log(stations);
  }); // Logs false for default environment
  }
  title = 'radio';
}
