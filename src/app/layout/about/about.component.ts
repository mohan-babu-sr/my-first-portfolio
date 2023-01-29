import { Component } from '@angular/core';
import { AboutLocalizationText } from './i18n.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutPageConstants = AboutLocalizationText.AboutPageConstants;
  aboutMyPicUrl: any = String;
  ngOnInit(){
    this.aboutMyPicUrl = this.aboutPageConstants.aboutMyPic;
  }
}
