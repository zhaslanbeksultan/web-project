import {Component, OnInit} from '@angular/core';
import {Actor} from "../models";
import {ActorService} from "../services/actor.service";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-actor-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit{
  actors: Actor[] = [];

  constructor(private actorService: ActorService, private router: Router) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void {
    this.actorService.getActors()
      .subscribe(actors => {
        this.actors = actors;
      });
  }

  onActorClick(actorId: number): void {
    this.router.navigate(['actors', actorId, 'films']);
  }
}
