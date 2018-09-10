import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'basic',
                loadChildren: './dashboard/basic.module#BasicModule'
            },
            {
                path: 'basic/:id',
                loadChildren: './dashboard/basic.module#BasicModule'
            },
            {
                path: 'parkingmanagement',
                loadChildren: './parking-management/parking-management.module#ParkingManagementModule'
            },
            {
                path: 'parkingmanagement/:id',
                loadChildren: './parking-management/parking-management.module#ParkingManagementModule'
            },
            {
                path: 'chatbot',
                loadChildren: './chat-bot/chat-bot.module#ChatBotModule'
            },
            {
                path: 'chatbotbank',
                loadChildren: './chat-bot-bank/chat-bot-bank.module#ChatBotBankModule'
            },
            {
                path: 'password',
                loadChildren: './password/password.module#PasswordModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
