import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cvExperience } from 'src/cvExperience';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  experiences: cvExperience[];

  constructor(private cv: CurriculumService) {
    this.experiences = null;
   }

  private getExperiences(): void {
    this.cv.getExperiences().subscribe(elems => this.experiences = elems);
  }

  ngOnInit(): void {
    this.getExperiences();
  }

}
