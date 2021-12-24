import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Database from "./pages/database.vue";
import DatabaseHome from "./pages/database/home.vue";
import DatabaseCreate from "./pages/database/create.vue";
import DatabaseDetail from "./pages/database/_database/home.vue";
import DbSchema from "./pages/database/_database/schema.vue";
import DbTable from "./pages/database/_database/table.vue";

import Actions from "./pages/actions.vue";
import ActionHome from "./pages/actions/home.vue";
import ActionConfig from "./pages/actions/config.vue";
import ActionCreate from "./pages/actions/create.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/database",
    component: Database,
    children: [
      { path: "", name: "database", component: DatabaseHome },
      { path: "create", name: "database-create", component: DatabaseCreate },
      { path: ":id", name: "database-detail", component: DatabaseDetail },
      { path: ":id/:schema", name: "db-schema", component: DbSchema },
      { path: ":id/:schema/:table", name: "db-table", component: DbTable },
    ],
  },
  {
    path: "/actions/:action?",
    name: "actions",
    component: Actions,
    children: [
      { path: "", name: "actions-home", component: ActionHome },
      {
        path: "config",
        name: "actions-config",
        component: ActionConfig,
      },
      {
        path: "create",
        name: "actions-create",
        component: ActionCreate,
      },
    ],
  },
  { path: "/about", name: "about", component: About },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
