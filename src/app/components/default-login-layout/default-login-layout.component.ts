import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  imports: [],
  styleUrls: ['./default-login-layout.component.scss'],
  standalone: true
})
export class DefaultLoginLayoutComponent {
    @Input()  title: string = "";
    @Input()  primaryBtnText: string = "";
    @Input()  secondaryBtnText: string = "";
}
