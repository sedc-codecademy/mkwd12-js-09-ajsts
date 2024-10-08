import { Component, input, signal } from '@angular/core';
import { ReviewComment } from '../../review.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss',
})
export class CommentsListComponent {
  comments = input.required<ReviewComment[]>();
}
