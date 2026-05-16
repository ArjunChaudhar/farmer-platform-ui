import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FarmerService } from 'src/app/core/services/farmer.service';

@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html'
})
export class AddFarmerComponent {

  farmer = {
    name: '',
    mobile: '',
    village: '',
    state: '',
    landArea: 0
  };

  constructor(
    private farmerService: FarmerService,
    private router: Router
  ) {
  }

  saveFarmer() {

    this.farmerService
      .addFarmer(this.farmer)
      .subscribe((response: any) => {

        if (response.success) {

          alert('Farmer Added');

          this.router.navigate(['/farmers']);
        }
      });
  }
}
