import { Component } from '@angular/core';
import { terms } from 'src/app/modal/terms.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  projectName: string = terms.ProjectName;
}
