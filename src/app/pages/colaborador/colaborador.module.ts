import { ColaboradorRoutes } from './colaborador.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { ColaboradorComponent } from './colaborador.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ColaboradorRoutes)
    ],
    declarations: [
        ColaboradorComponent
    ],

    providers: [

    ]
})

export class ColaboradorModule{}