import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CokeStudioService } from '../services/coke-studio-api-client.services';

@Component({
    selector: 'home-compoenent',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    songsList$: Observable<Object>;
    songList = [];
    showSideNavigation = false;
    constructor(
       private readonly _cokeStudioService: CokeStudioService
    ) {
        
     }

    ngOnInit() {
        debugger
        this._cokeStudioService.getAll().subscribe(data => {
            if (data) {
                data.forEach(element => {
                    this.songList.push(element);
                });
                console.log("gfgdf");

            }
        });
    }

    showNavigation() {
        this.showSideNavigation = true;
    }
    
    closeSideNav(value) {
        this.showSideNavigation = value;
    }
}