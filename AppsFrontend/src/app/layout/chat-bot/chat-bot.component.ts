import { Component, Input, OnInit,OnChanges, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '../../shared';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'chatbot',
    templateUrl: './chat-bot.component.html',
    styleUrls: ['./chat-bot.component.scss']
})

export class ChatBot implements OnInit {

    closeResult: string;
    headername: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
    ) {
     }


    ngOnInit(): void {
    }

}
