import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { MainContentComponent } from './main-app/main-content/main-content.component';
import { AppComponent } from './app.component';

const routes: Route[] = [
    { path: '', component: MainAppComponent, children: [
        { path: '', redirectTo: '/search', pathMatch: 'full'},
        { path: 'search', component: MainContentComponent},
    ] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {

}