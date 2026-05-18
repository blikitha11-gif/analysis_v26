import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-page.component.html',
})
export class GenericPageComponent implements OnInit {
  pageName = 'Page';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        const lastSegment = segments[segments.length - 1].path;
        this.pageName = lastSegment.replace(/-/g, ' ');
      }
    });
  }
}
