import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

@Component
(
  {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
  }
)

export class HomePage
{
  constructor(private router: Router) {}

  goToLimerickEnnis()
  {
    this.router.navigate(['/limerick-ennis']);
  }

  goToAthloneWestportBallina()
  {
    this.router.navigate(['/athlone-wesport-ballina']);
  }

  goToBallybrophyLimerick()
  {
    this.router.navigate(['/ballybrophy-limerick']);
  }

  goToCorkCobhMidleton()
  {
    this.router.navigate(['/cork-cobh-midleton']);
  }

  goToDundalkBelfast()
  {
    this.router.navigate(['/dundalk-belfast']);
  }

  goToLimerickWaterford()
  {
    this.router.navigate(['/limerick-waterford']);
  }
}

