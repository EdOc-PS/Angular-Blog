import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card-unlock',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-unlock.component.html',
  styleUrl: './card-unlock.component.css'
})
export class CardUnlockComponent implements OnInit {

  @Input()
  photo: string = "";
  @Input()
  title: string = "";
  @Input()
  description: string = "";
  Id:string = "0";

  constructor(){
  }

  ngOnInit(): void {
  }
}
