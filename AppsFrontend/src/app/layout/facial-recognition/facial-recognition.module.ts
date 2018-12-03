import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FacialRecognition } from './facial-recognition.component';
import { FacialRecognitionRoutingModule } from './facial-recognition-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FacialRecognitionRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        FacialRecognition
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FacialRecognitionModule { }
