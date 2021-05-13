import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comics/comic/comic.component';
import { DetailPurchaseComponent } from './components/comics/detail-purchase/detail-purchase.component';
import { ListComponent } from './components/comics/list/list.component';
import { MyAddressComponent } from './components/comics/my-address/my-address.component';
import { MyComicsComponent } from './components/comics/my-comics/my-comics.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'comic/:id', component: ComicComponent},
    { path: 'my-comics', component: MyComicsComponent },
    { path: 'my-address/:id', component: MyAddressComponent },
    { path: 'detail-purchase/:id', component: DetailPurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
