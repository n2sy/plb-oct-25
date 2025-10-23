import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  id;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    //1ere version
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //2eme version
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('id');
      },
    });
  }
}
