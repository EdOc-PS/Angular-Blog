import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-small',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.css'
})
export class CardSmallComponent implements OnInit {
  @Input()
  photo: string = "";
  @Input()
  title: string = "";
  @Input()
  description: string = "";
  @Input()
  Id: string = "0";
  constructor(){
  }

  ngOnInit(): void {

  }
}
