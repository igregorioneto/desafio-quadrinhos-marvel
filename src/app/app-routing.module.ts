import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comics/comic/comic.component';
import { ListComponent } from './components/comics/list/list.component';
import { MyComicsComponent } from './components/comics/my-comics/my-comics.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'comic/:id', component: ComicComponent},
    { path: 'my-comics', component: MyComicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
