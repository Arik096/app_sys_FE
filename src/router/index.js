import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Apointment from "../views/Apointment.vue";
import FindDoctor from "../views/FindDoctor.vue";
import PatientPortal from "../views/PatientPortal.vue";
import DoctorPortal from "../views/DoctorPortal.vue";

import DoctorHome from "../views/DoctorViews/DoctorHome.vue";
import PatientHome from "../views/PatientViews/PatientHome.vue";


import PatientProfile from "../components/PatientComponent/PatientProfile.vue";
import AppointmentHistoryPatient from "../components/PatientComponent/AppointmentHistoryPatient.vue";

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

  {
    path: "/doctorhome",
    name: "DoctorHome",
    component: DoctorHome,
  },
  {
    path: "/patienthome",
    name: "PatientHome",
    component: PatientHome,
  },

  {
    path: "/patientprofile",
    name: "PatientProfile",
    component: PatientProfile,
  },
  {
    path: "/appointmenthistory",
    name: "AppointmentHistoryPatient",
    component: AppointmentHistoryPatient,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: "history",
});

export default router;
