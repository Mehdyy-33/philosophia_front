import { Component } from '@angular/core';
import { ThinkerService } from '../../../shared/thinker.service';
import { Thinker } from '../../../models/thinker.model';

@Component({
  selector: 'app-thinker',
  templateUrl: './thinker.component.html',
  styleUrls: ['./thinker.component.scss']
})
export class ThinkerComponent {
  thinkers: Thinker[] = [];
  thinker: Thinker = new Thinker('', '', []);

  constructor(private thinkerService: ThinkerService) { }

  ngOnInit() {
    this.loadThinkers();
  }

  loadThinkers() {
    this.thinkerService.getAllThinkers().subscribe(
      (data: Thinker[]) => {
        this.thinkers = data;
      },
      (error) => {
        console.log('Error loading thinkers:', error);
      }
    );
  }

  createThinker() {
    this.thinkerService.createThinker(this.thinker).subscribe(
      (data: Thinker) => {
        console.log('Thinker created:', data);
        this.loadThinkers();
        this.thinker = new Thinker('', '', []);
      },
      (error) => {
        console.log('Error creating thinker:', error);
      }
    );
  }

  updateThinker(thinker: Thinker) {
    this.thinkerService.updateThinker(thinker).subscribe(
      (data: Thinker) => {
        console.log('Thinker updated:', data);
        this.loadThinkers();
      },
      (error) => {
        console.log('Error updating thinker:', error);
      }
    );
  }

  deleteThinker(id: number) {
    this.thinkerService.deleteThinker(id).subscribe(
      () => {
        console.log('Thinker deleted');
        this.loadThinkers();
      },
      (error) => {
        console.log('Error deleting thinker:', error);
      }
    );
  }
}