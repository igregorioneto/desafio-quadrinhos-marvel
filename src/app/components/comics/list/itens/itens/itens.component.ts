import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Comics } from 'src/model/comics.model';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  comics?: any
  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comicsService.getCommics()
    .subscribe(comic => {
      this.comics = comic.data.results
      console.log(this.comics)
    })
  }

}
