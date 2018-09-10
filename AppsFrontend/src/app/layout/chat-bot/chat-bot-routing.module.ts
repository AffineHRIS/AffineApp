import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBot } from './chat-bot.component';

const routes: Routes = [
    { path: '', component: ChatBot }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChatBotRoutingModule { }
