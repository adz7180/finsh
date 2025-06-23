import Vue from 'vue';
import Router from 'vue-router';
import Customization from '@/views/Customization.vue';
import Home from '@/views/Home.vue';
import ExplorePreview from '../views/explorepreview.vue';
import SubscriptionPlans from '../views/subscriptionplans.vue';
import SceneViewer from '../components/sceneviewer.vue';
import FloorPlanUploader from '../components/floorplanuploader.vue';
import AdminPanel from '../components/adminpanel.vue';
import ContractorConnect from '../components/contractorconnect.vue';
import PaymentScreen from '../components/paymentscreen.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/customize', name: 'Customization', component: Customization },
  { path: '/preview', name: 'ExplorePreview', component: ExplorePreview },
  { path: '/subscribe', name: 'SubscriptionPlans', component: SubscriptionPlans },
  { path: '/scene', name: 'SceneViewer', component: SceneViewer },
  { path: '/upload', name: 'FloorPlanUploader', component: FloorPlanUploader },
  { path: '/admin', name: 'AdminPanel', component: AdminPanel, meta: { requiresAdmin: true } },
  { path: '/contractor', name: 'ContractorConnect', component: ContractorConnect },
  { path: '/payment', name: 'PaymentScreen', component: PaymentScreen },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
