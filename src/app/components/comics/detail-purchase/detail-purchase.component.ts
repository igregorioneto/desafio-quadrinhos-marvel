import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-detail-purchase',
  templateUrl: './detail-purchase.component.html',
  styleUrls: ['./detail-purchase.component.css']
})
export class DetailPurchaseComponent implements OnInit {

  path: string = ''
  extension: string = ''
  title: string = ''
  series: string = ''
  price: number = 0

  name: string = ''
  street: string = ''
  city: string = ''
  country: string = ''

  id: number = 0
  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.comicsService.getComicDbFakeId(this.id)
    .subscribe(comic => {
      this.title = comic.purchase.comic.title
      this.series = comic.purchase.comic.series
      this.price = comic.purchase.comic.price
      this.path = comic.purchase.comic.path
      this.extension = comic.purchase.comic.extension

      this.name = comic.purchase.address.name
      this.street = comic.purchase.address.street
      this.city = comic.purchase.address.city
      this.country = comic.purchase.address.country
    })
  }

  cancel(): void {
    this.router.navigate(['/my-comics'])
  }

}
