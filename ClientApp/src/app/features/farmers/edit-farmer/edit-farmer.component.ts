import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { FarmerService } from 'src/app/core/services/farmer.service';

@Component({
  selector: 'app-edit-farmer',
  templateUrl: './edit-farmer.component.html'
})
export class EditFarmerComponent
  implements OnInit {

  farmerId = 0;

  farmer = {
    name: '',
    mobile: '',
    village: '',
    state: '',
    landArea: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private farmerService: FarmerService
  ) {
  }

  ngOnInit(): void {

    this.farmerId =
      Number(this.route.snapshot.paramMap.get('id'));

    this.loadFarmer();
  }

  loadFarmer() {

    this.farmerService
      .getFarmers()
      .subscribe((response: any) => {

        const data =
          response.data.find(
            (x: any) => x.id == this.farmerId);

        this.farmer = data;
      });
  }

  updateFarmer() {

    this.farmerService
      .updateFarmer(
        this.farmerId,
        this.farmer)
      .subscribe((response: any) => {

        if (response.success) {

          alert('Farmer updated');

          this.router.navigate(['/farmers']);
        }
      });
  }
}
