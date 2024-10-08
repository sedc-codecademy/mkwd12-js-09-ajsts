import { Component, OnInit, signal } from '@angular/core';
import { Room } from '../../types/room.interface';
import roomsJson from '../../data/rooms.json';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsService } from '../../services/rooms.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [RoomsComponent, AsyncPipe, JsonPipe],
  providers: [RoomsService],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css',
})
export class RoomsPageComponent implements OnInit {
  rooms: Observable<Room[]> = new Observable<Room[]>();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.rooms = this.roomsService.rooms;
  }
}
