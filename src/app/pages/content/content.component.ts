import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake} from '../../data/data-fake';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  title: string = "";
  description: string = "";
  private id:string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("1")
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id === id)[0];

      this.title = result.title;
      this.description = result.description;
      this.photoCover = result.photo;

  }
}
