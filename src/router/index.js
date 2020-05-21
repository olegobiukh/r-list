import List from "../containers/List";
import Update from "../containers/Update";

export default [
  {
    url: "/r-list/",
    component: List,
  },
  {
    url: "/r-list/new",
    component: Update,
  },
  {
    url: "/r-list/update/:id",
    component: Update,
  },
];
