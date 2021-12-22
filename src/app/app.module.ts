import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { CriarcontaComponent } from './componentes/criarconta/criarconta.component';
import { LandingComponent } from './componentes/landing/landing.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarlogadoComponent } from './componenetes/navbarlogado/navbarlogado.component';
import { IndexLogadoComponent } from './index-logado/index-logado.component';
import { MeusvinhosComponent } from './componentes/meusvinhos/meusvinhos.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        CriarcontaComponent,
        LandingComponent,
        NavbarlogadoComponent,
        IndexLogadoComponent,
        MeusvinhosComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
