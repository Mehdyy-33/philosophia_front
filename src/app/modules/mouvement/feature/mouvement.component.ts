import { Component, OnInit } from '@angular/core';
import { MouvementService } from '../../../shared/mouvement.service';
import { ThinkerService } from '../../../shared/thinker.service';
import { Mouvement } from '../../../models/mouvement.model';
import { Thinker } from '../../../models/thinker.model';

@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.component.html',
  styleUrls: ['./mouvement.component.scss']
})
export class MouvementComponent implements OnInit {
  mouvements: Mouvement[] = [];
  thinkers: Thinker[] = [];

  constructor(
    private mouvementService: MouvementService,
    private thinkerService: ThinkerService
  ) {}

  ngOnInit(): void {
    this.loadMouvements();
    this.loadThinkers();
  }

  loadMouvements(): void {
    this.mouvementService.getAllMovements().subscribe(
      (mouvements) => {
        this.mouvements = mouvements;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadThinkers(): void {
    this.thinkerService.getAllThinkers().subscribe(
      (thinkers) => {
        this.thinkers = thinkers;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMouvement(name: string, description: string, thinkerId: string): void {
    const thinker = this.thinkers.find((t) => t.id === parseInt(thinkerId));
    if (!thinker) {
      console.log('Invalid thinker ID');
      return;
    }

    const mouvement = new Mouvement(name, description, thinker);

    this.mouvementService.createMovement(mouvement).subscribe(
      (newMouvement) => {
        this.mouvements.push(newMouvement);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteMouvement(id: number): void {
    this.mouvementService.deleteMovement(id).subscribe(
      () => {
        this.mouvements = this.mouvements.filter((m) => m.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}