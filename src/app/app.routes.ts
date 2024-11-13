import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"dashboard",
        loadComponent: () => import('./dashboard/dashboard.component'),
        children:[
            {
                path: "info",
                title: "Info",
                loadComponent: () => import("./dashboard/pages/info-component/info-component.component")
            },
            {
                path: "create",
                title: "Create Nursery",
                loadComponent: () => import("./dashboard/pages/create-component/create-component.component")

            },
            {
                path: "care-guide",
                title: "Care Guide",
                loadComponent: () => import("./dashboard/pages/care-guide-component/care-guide-component.component")
            },
            {
                path: "care-guide/infoDetail/:id",
                title: "Care Guide",
                loadComponent: () => import("./dashboard/pages/card-detail-component/card-detail-component.component")
            },
            {
                path: "create-new-care-guide",
                title: "new Care Guide",
                loadComponent: () => import("./dashboard/pages/new-card-creator/new-card-creator.component")
            },
            {
                path: "card-detail",
                title: "new Care Guide",
                loadComponent: () => import("./dashboard/pages/card-detail-component/card-detail-component.component")
            },
            {
                path: "", redirectTo:"info-component", pathMatch:"full"
            },
            
            
        ]
    },
    {
        path:"",
        redirectTo:"/dashboard",
        pathMatch:"full"
    },
    {
        path:"**",
        redirectTo:"dashboard",
        pathMatch:"full"
    }
];
