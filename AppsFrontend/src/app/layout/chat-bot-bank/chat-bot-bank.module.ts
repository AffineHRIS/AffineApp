import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ChatBotBank } from './chat-bot-bank.component';
import { ChatBotBankRoutingModule } from './chat-bot-bank-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChatBotBankRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ChatBotBank
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatBotBankModule { }
