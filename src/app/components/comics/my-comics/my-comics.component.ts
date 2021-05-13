import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.css']
})
export class MyComicsComponent implements OnInit {

  comics?: any
  constructor(
    private comicsService: ComicsService,
    private router: Router) { }

  ngOnInit(): void {
    this.comicsService.getComicDbFake()
    .subscribe(comics => {
      this.comics = comics
    })
  }

  detalPurchase(id: number): void {
    this.router.navigate([`detail-purchase/${id}`])
  }

}
