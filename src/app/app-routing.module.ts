import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [/*ver RouterModule.forRoot( routes ) en @NgModule*/
    {
        path: '',
        component: PorPaisComponent,/*para usar PorPaisComponent, debe estar importado en app.module.ts y exportado en respectivo módulo en pais(carpeta)*/
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',/*Hacerlo dinámico */
        component: VerPaisComponent
    },
    {
        path: '**', /*Cualquier otro path*/
        redirectTo: ''
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot( routes )/*RouterModule hace la configuracion de las rutas *** forRoot es para las rutas principales*/
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule {}