import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"dashboard",
        loadComponent: () => import('./dashboard/dashboard.component'),
        children:[
            {
                path: "info-component",
                title: "Info",
                loadComponent: () => import("./dashboard/pages/info-component/info-component.component")
            },
            {
                path: "create-component",
                title: "Create Nursery",
                loadComponent: () => import("./dashboard/pages/create-component/create-component.component")

            },
            {
                path: "care-guide-component",
                title: "Care Guide",
                loadComponent: () => import("./dashboard/pages/care-guide-component/care-guide-component.component")
            },
            {
                path: "", redirectTo:"info-component", pathMatch:"full"
            }
            
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
