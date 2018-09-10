import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ChatBot } from './chat-bot.component';
import { ChatBotRoutingModule } from './chat-bot-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChatBotRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ChatBot
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatBotModule { }
