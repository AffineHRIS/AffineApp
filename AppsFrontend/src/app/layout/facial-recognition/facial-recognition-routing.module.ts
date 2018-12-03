import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacialRecognition } from './facial-recognition.component';

const routes: Routes = [
    { path: '', component: FacialRecognition }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FacialRecognitionRoutingModule { }
