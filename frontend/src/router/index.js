import { createRouter, createWebHistory } from "vue-router"; 

const router = createRouter({  
    history: createWebHistory(""),  
    routes: [    
        {      
            path: "/",      
            name: "main",      
            component: () => import("../views/main.vue"),
        },    
        {      
            path: "/chart",
            name: "main2",
            component: () => import("../views/main2.vue"),
        },
        {      
            path: "/info",
            name: "main3",
            component: () => import("../views/main3.vue"),
        },     
    ],
}); 

export default router;
