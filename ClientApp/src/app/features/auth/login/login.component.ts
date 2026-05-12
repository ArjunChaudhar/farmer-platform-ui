import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginData = {
    mobile: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  login() {

    this.authService.login(this.loginData)
      .subscribe((response: any) => {

        if (response.success) {

          this.authService
            .saveToken(response.data.token);

          this.router.navigate(['/dashboard']);
        }
      });
  }
}
