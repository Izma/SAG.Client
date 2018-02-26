import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './shared/layout/auth';
import { MainComponent } from './shared/layout/main/main.component';

export const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            {
                path: '', redirectTo: 'account/login', pathMatch: 'full'
            },
            { path: 'account', loadChildren: 'app/security/security.module#SecurityModule' }]
    }, {
        path: 'home',
        component: MainComponent,
        loadChildren: 'app/home/home.module#HomeModule'
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
