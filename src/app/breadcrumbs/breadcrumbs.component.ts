import {filter} from 'rxjs/operators/filter';
import {tap} from 'rxjs/operators/tap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      tap(_ => this.breadcrumbs = []),
    )
      .subscribe(_ => {
        this.buildBreadcrumbs();
      });
  }

  ngOnInit() {
    // Todo: uncomment;
    // this.buildBreadcrumbs();
  }

  buildBreadcrumbs() {
    let route = this.route.snapshot.root;

    while (route) {
      if (route.children && route.children.length) {

        route = route.children[0];

        // console.log('===============');
        // console.log(route.routeConfig.path, JSON.stringify(route.data));
        // console.log('===============');

        if (route.data && route.data['breadcrumb']) {
          const breadcrumb = route.data['breadcrumb'];

          if (breadcrumb === 'id') {
            this.breadcrumbs.push(`${breadcrumb}(${route.params.id})`);
          } else if (breadcrumb === 'empty') {
            // Nothing
          } else {
            this.breadcrumbs.push(breadcrumb);
          }

        } else {
          return;
        }
      } else {
        return;
      }
    }
  }
}
