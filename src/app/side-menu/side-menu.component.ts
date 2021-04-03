import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CokeStudioService } from '../services/coke-studio-api-client.services';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  @Input() showSideNavigation: boolean;

  @Output() closeNavBar = new EventEmitter<boolean>();
  constructor(
    private readonly _cokeStudioService: CokeStudioService
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    debugger
    console.log(this.showSideNavigation)

  }
  closeNavigation() {
    this.showSideNavigation = false;
    this.closeNavBar.emit(false);
  }
}
