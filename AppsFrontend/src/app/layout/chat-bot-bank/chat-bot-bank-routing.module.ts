import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBotBank } from './chat-bot-bank.component';

const routes: Routes = [
    { path: '', component: ChatBotBank }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChatBotBankRoutingModule { }
