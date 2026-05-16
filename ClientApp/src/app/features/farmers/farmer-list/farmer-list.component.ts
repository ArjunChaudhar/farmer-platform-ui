import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FarmerService } from 'src/app/core/services/farmer.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css']
})
export class FarmerListComponent implements OnInit {

  farmers: any[] = [];

  allFarmers: any[] = [];

  searchText = '';

  constructor(
    private farmerService: FarmerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.loadFarmers();
  }

  loadFarmers() {

    this.farmerService
      .getFarmers()
      .subscribe((response: any) => {

        this.farmers = response.data;

        this.allFarmers = response.data;
      });
  }

  editFarmer(id: number) {

    this.router.navigate([
      '/edit-farmer',
      id
    ]);
  }

  deleteFarmer(id: number) {

    const confirmed =
      confirm('Delete farmer?');

    if (!confirmed) {
      return;
    }

    this.farmerService
      .deleteFarmer(id)
      .subscribe((response: any) => {

        if (response.success) {

          alert('Farmer deleted');

          this.loadFarmers();
        }
      });
  }

  searchFarmers() {

    this.farmers =
      this.allFarmers.filter(x =>
        x.name.toLowerCase()
          .includes(
            this.searchText.toLowerCase()
          ));
  }
}
