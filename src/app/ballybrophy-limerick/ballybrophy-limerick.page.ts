import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

@Component
(
  {
    selector: 'app-ballybrophy-limerick',
    templateUrl: './ballybrophy-limerick.page.html',
    styleUrls: ['./ballybrophy-limerick.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
  }
)

export class BallybrophyLimerickPage implements OnInit
{
  constructor(private router : Router) {}

  ngOnInit() {}

  goToHome()
  {
    this.router.navigate(['/home']);
  }
}
