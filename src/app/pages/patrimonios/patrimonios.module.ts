import { PatrimoniosRoutes } from './patrimonios.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PatrimoniosComponent } from "./patrimonios.component";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(PatrimoniosRoutes)
    ],
    declarations: [
        PatrimoniosComponent
    ],
    providers: [

    ]
})

export class PatrimoniosModule {}