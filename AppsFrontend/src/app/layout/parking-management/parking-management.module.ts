import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ParkingManagement } from './parking-management.component';
import { ParkingManagementRoutingModule } from './parking-management-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ParkingManagementRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ParkingManagement
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParkingManagementModule { }
