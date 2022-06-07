/* 
    [IMPORT] Angular
    Set main import to define router
*/
    // Angular router module
    import { Routes } from "@angular/router";

    // Route component
    import { HomeViewComponent } from "./views/home-view/home-view.component";
    import { DashboardViewComponent } from "./views/dashboard-view/dashboard-view.component";
    import { SnapshootViewComponent } from "./views/snapshoot-view/snapshoot-view.component";
//

/* 
    [EXPORT] Router
    Define array of object
*/
    export const AppRouterModule: Routes = [
        {
            path: '',
            component: HomeViewComponent
        },
        {
            path: 'dashboard',
            component: DashboardViewComponent
        },
        {
            path: 'snapshoot',
            component: SnapshootViewComponent
        }
    ]
//