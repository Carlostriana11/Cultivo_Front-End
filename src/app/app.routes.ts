import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "dashboard",
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            // General Information
            {
                path: "info",
                title: "Info",
                loadComponent: () => import("./dashboard/pages/info-component/info-component.component")
            },
            {
                path: "info/infoDetail/:id",
                title: "Info Detail",
                loadComponent: () => import("./components/public/pages_3plague/plague-detail/plague-detail.component")
            },

            // Create New Entries
            {
                path: "create",
                title: "Create Nursery",
                loadComponent: () => import("./dashboard/pages/create-component/create-component.component")
            },
            {
                path: "create-new-info-plague",
                title: "New Info Plague",
                loadComponent: () => import("./components/public/pages_3plague/form-new-plague/form-new-plague.component")
            },
            {
                path: "create-new-info-climate",
                title: "New Info Climate",
                loadComponent: () => import("./components/public/pages_2RYF/component-card-climas/form-new-climate/form-new-climate.component")
            },
            {
                path: "create-new-info-fertilizer",
                title: "New Info Fertilizer",
                loadComponent: () => import("./components/public/pages_2RYF/component-card-fertilizer/form-new-fertilizer/form-new-fertilizer.component")
            },
            {
                path: "create-new-care-guide",
                title: "New Care Guide",
                loadComponent: () => import("./components/public/pages_1/new-card-creator/new-card-creator.component")
            },

            // Care Guide
            {
                path: "care-guide",
                title: "Care Guide",
                loadComponent: () => import("./dashboard/pages/care-guide-component/care-guide-component.component")
            },
            {
                path: "care-guide/infoDetail/:id",
                title: "Care Guide Detail",
                loadComponent: () => import("./components/public/pages_1/card-detail-component/card-detail-component.component")
            },

            // Card Detail
            {
                path: "card-detail",
                title: "Care Guide Detail",
                loadComponent: () => import("./components/public/pages_1/card-detail-component/card-detail-component.component")
            },

            // Default Route
            {
                path: "",
                redirectTo: "care-guide",
                pathMatch: "full"
            },
        ]
    },
    // Root Route
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    // Wildcard Route (404)
    {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full"
    }
];
