import { Component, Input, OnInit,OnChanges, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '../../shared';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
    selector: 'facialrecognition',
    templateUrl: './facial-recognition.component.html',
    styleUrls: ['./facial-recognition.component.scss']
})

export class FacialRecognition implements OnInit {

    closeResult: string;
    headername: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
    ) {
        sessionStorage.removeItem('headername');
     }


    ngOnInit(): void {

        this.headername = sessionStorage.setItem('headername', 'Facial Recognition System');
    }

}
