import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule}from '@angular/material/icon'
import {MatDividerModule}from'@angular/material/divider'
import {MatButtonModule}from '@angular/material/button'
import{MatCardModule}from '@angular/material/card'


@Component({
  selector: 'app-user-registers',
  standalone: true,
  imports: [MatSidenavModule,
            FormsModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatDividerModule,
            MatCardModule],
  templateUrl: './user-registers.component.html',
  styleUrl: './user-registers.component.css'
})
export class UserRegistersComponent {

}
