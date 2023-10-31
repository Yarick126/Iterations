import { AboutUs } from "@/components/screens/about-us/about-us.component";
import { BookMe } from "@/components/screens/book-me/book-me.component";
import { Gallery } from "@/components/screens/gallery/gallery.component";
import { Home } from "@/components/screens/home/home.component";
import { Services } from "@/components/screens/services/services.component";

export const ROUTES = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/gallery',
    component: Gallery
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/book-me',
    component: BookMe
  },
  {
    path: '/about-us',
    component: AboutUs
  }
]