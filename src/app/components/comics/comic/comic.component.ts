import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  id: number = 0
  path: string = ''
  extension: string = ''

  title: string = ''
  description: string = ''
  series: string = ''
  price: number = 0

  comic: any
  constructor( 
    private comicsService: ComicsService ,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.comicsService.getComic(this.id)
    .subscribe(comic => {
      this.comic = comic.data.results

      this.path = this.comic[0].thumbnail.path
      this.extension = this.comic[0].thumbnail.extension

      this.title = this.comic[0].title
      this.description = this.comic[0].description ? this.comic[0].description : 'Descrição em falta...'
      this.series = this.comic[0].series.name
      this.price = this.comic[0].prices[0].price
    })
  }

  goAddress(): void {
    this.router.navigate([`/my-address/${this.id}`])
  }

}
