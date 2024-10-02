import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule}from '@angular/material/icon'
import {MatDividerModule}from'@angular/material/divider'
import {MatButtonModule}from '@angular/material/button'
import{MatCardModule}from '@angular/material/card'

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [MatSidenavModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

}
