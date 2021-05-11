import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../../services/comics.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
  }

}
