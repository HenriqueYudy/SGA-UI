import { Routes } from '@angular/router';
import { PatrimoniosComponent } from './patrimonios.component';
import { GerenciarModeloComponent } from './gerenciar-modelo/gerenciar-modelo.component';
import { GerenciarMarcasComponent } from './gerenciar-marcas/gerenciar-marcas.component';
import { GerenciarCelularComponent } from './gerenciar-celular/gerenciar-celular.component';
import { GerenciadorAlocaoMobileComponent } from './gerenciador-alocao-mobile/gerenciador-alocao-mobile.component';


export const PatrimoniosRoutes: Routes = [
    {path: 'patrimonio' , component: PatrimoniosComponent},
    {path: 'gerenciar-modelos' , component: GerenciarModeloComponent},
    {path: 'gerenciar-marcas', component: GerenciarMarcasComponent},
    {path: 'gerenciar-celular', component: GerenciarCelularComponent},
    {path: 'mobile-manager', component: GerenciadorAlocaoMobileComponent}
]