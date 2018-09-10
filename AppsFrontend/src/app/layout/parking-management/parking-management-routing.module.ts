import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingManagement } from './parking-management.component';

const routes: Routes = [
    { path: '', component: ParkingManagement }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ParkingManagementRoutingModule { }
