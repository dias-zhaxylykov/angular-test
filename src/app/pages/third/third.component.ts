import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  id!: number;

  constructor (private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params);
      console.log(params['id']);
    });
  }

  goTo() {
    this.router.navigate(['/jobs']);
  }

}
