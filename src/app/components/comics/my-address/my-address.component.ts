import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';
import { Comics } from 'src/model/comics.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

  title: string = ''
  path: string = ''
  extension: string = ''
  price: number = 0
  series: string = ''
  description: string = ''

  id: number = 0


  name: string = ''
  street: string = ''
  city: string = ''
  country: string = ''

  comicAdress?: any

  comic: any

  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private router: Router ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.comicsService.getComic(this.id)
    .subscribe( comic => {
      this.comic = comic.data.results[0]

      this.title = this.comic.title
      this.series = this.comic.series.name
      this.price = this.comic.prices[0].price
      this.description = this.comic.description
      this.path = this.comic.thumbnail.path
      this.extension = this.comic.thumbnail.extension
    })
  }

  effectuatePurchase(): void {
    this.comicAdress = {
      purchase: {
        comic: {
          title: this.title,
          series: this.series,
          price: this.price,
          path: this.path,
          extension: this.extension
        },
        address: {
          name: this.name,
          street: this.street,
          city: this.city,
          country: this.country
        }
      }
    }
    
    this.setComicsDBFake()
  }

  setComicsDBFake(): void {
    this.comicsService.postComicDbFake(this.comicAdress).subscribe(() => {
      this.comicsService.showMsg('Compra realizada com sucesso!!!')
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
