import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(private activeRoute: ActivatedRoute){
    //http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?name=rodrigo&token=123
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {

  }

}
