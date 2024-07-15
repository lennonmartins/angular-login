import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from 'src/app/components/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [DefaultLoginLayoutComponent]
})
export class LoginComponent {

}
