import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Apointment from "../views/Apointment.vue";
import FindDoctor from "../views/FindDoctor.vue";
import PatientPortal from "../views/PatientPortal.vue";
import DoctorPortal from "../views/DoctorPortal.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/apointment",
    name: "Apointment",
    component: Apointment,
  },
  {
    path: "/finddoctor",
    name: "FindDoctor",
    component: FindDoctor,
  },
  {
    path: "/patientportal",
    name: "PatientPortal",
    component: PatientPortal,
  },
  {
    path: "/doctorportal",
    name: "DoctorPortal",
    component: DoctorPortal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
