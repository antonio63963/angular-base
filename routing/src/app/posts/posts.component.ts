import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  isSownIds = false;

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      console.log('Param: ', param);
      if (!!param['isSownIds']) this.isSownIds = true;
    });
    this.route.fragment.subscribe(fragment => {
      console.log('Fragment: ', fragment);
    })
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: { isShownIds: true },
      fragment: 'program-fragment',
    });
  }
}
