import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-primary',
  templateUrl: './input-primary.component.html', imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./input-primary.component.scss'],
  standalone: true,

})
export class InputPrimaryComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
}
