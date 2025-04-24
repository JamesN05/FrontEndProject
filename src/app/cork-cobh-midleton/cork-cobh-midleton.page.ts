import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

@Component
(
  {
    selector: 'app-cork-cobh-midleton',
    templateUrl: './cork-cobh-midleton.page.html',
    styleUrls: ['./cork-cobh-midleton.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
  }
)

export class CorkCobhMidletonPage implements OnInit
{
  constructor(private router : Router) {}

  ngOnInit() {}

  goToHome()
  {
    this.router.navigate(['/home']);
  }
}
