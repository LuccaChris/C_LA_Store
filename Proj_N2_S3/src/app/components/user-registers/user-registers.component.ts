import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-user-registers',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './user-registers.component.html',
  styleUrl: './user-registers.component.css'
})
export class UserRegistersComponent {

}
