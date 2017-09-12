import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { SpinComponent } from '../FunctionalComponent/spin/spin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(SpinComponent)
  public SpinComponent: SpinComponent;

  constructor() { }

  ngOnInit() {
  }
  AfterViewInit() {
    this.SpinComponent._isSpinning = false;
  }
}
