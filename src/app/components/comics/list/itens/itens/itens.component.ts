import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {
  
  comics?: any
  constructor(private comicsService: ComicsService, private router: Router) { }

  ngOnInit(): void {
    this.comicsService.getCommics()
    .subscribe(comic => {
      this.comics = comic.data.results
    })
  }

  detalhes(id: number): void{
    this.router.navigate([`comic/${id}`])
  }

  goAddress(id: number): void {
    this.router.navigate([`my-address/${id}`])
  }

}
