import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  // constructor(private router: Router) {}
  constructor(private router: Router, private route: ActivatedRoute) {} /* для относительного пути */

  onHomePage() {
    this.router.navigate(['/']); /* переход по абсолютному пути */
    
  }

  onEditBlogPage() {
    this.router.navigate(['edit'], {relativeTo: this.route}); /* переход по относительному пути */
  }
}
