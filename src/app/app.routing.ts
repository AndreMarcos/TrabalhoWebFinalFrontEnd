import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './componentes/login/login.component';
import { CriarcontaComponent } from './componentes/criarconta/criarconta.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { IndexLogadoComponent } from './index-logado/index-logado.component';
import { MeusvinhosComponent } from './componentes/meusvinhos/meusvinhos.component';

// import { ComponentsComponent } from './components/components.component';
// import { LandingComponent } from './examples/landing/landing.component';
// // import { LoginComponent } from './examples/login/login.component';
// import { ProfileComponent } from './examples/profile/profile.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    {
        path: '', redirectTo: 'index', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'criarconta', component: CriarcontaComponent
    },
    {
        path: 'index', component: LandingComponent
    },
    {
        path: 'indexlogado', component: IndexLogadoComponent
    },
    {
        path: 'meusvinhos', component: MeusvinhosComponent
    }
    
    // { path: '', redirectTo: 'index', pathMatch: 'full' },
    // { path: 'index',                component: ComponentsComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },
    // { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
