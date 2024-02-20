import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FirstComponent } from "./componemts/first/first.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponent]
})
export class AppComponent {
  title = 'todo-stal-ngrx';
}
