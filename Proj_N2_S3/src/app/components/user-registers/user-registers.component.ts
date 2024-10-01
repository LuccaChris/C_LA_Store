import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-user-registers',
  standalone: true,
  imports: [MatSidenavModule,FormsModule,MatInputModule],
  templateUrl: './user-registers.component.html',
  styleUrl: './user-registers.component.css'
})
export class UserRegistersComponent {

}
