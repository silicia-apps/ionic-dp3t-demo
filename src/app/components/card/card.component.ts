import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'silicia-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class SiliciaCardComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public color = '';
  @Input() public icon  = 'chevron-down-outline';

  constructor() {
  }

  ngOnInit() {
  }
}