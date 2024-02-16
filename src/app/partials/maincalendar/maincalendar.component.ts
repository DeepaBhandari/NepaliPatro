import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maincalendar',
  templateUrl: './maincalendar.component.html',
  styleUrls: ['./maincalendar.component.scss']
})
export class MaincalendarComponent {
  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en'); // Default language (e.g., English)
    
}
ngOnInit():void{
  this.translate.setDefaultLang('ne'); // set default language (Nepali)
}

}
