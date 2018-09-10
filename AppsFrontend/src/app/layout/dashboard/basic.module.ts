import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { BasicComponent } from './basic.component';
import { BasicRoutingModule } from './basic-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BasicRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        BasicComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BasicModule { }
