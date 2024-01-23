import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TopNavigationPage } from './components/top-navigation/top-navigation.page';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./components/top-navigation/top-navigation.module').then(
        (m) => m.TopNavigationPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then((m) => m.CoursesPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'card-details',
    loadChildren: () =>
      import('./pages/card-details/card-details.module').then(
        (m) => m.CardDetailsPageModule
      ),
  },
  {
    path: 'wish-list',
    loadChildren: () =>
      import('./pages/wish-list/wish-list.module').then(
        (m) => m.WishListPageModule
      ),
  },
  {
    path: 'course-details/:id',
    loadChildren: () =>
      import('./pages/course-details/course-details.module').then(
        (m) => m.CourseDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TopNavigationPage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'courses',
          },
          {
            path: 'courses',
            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesPageModule
              ),
          },
          {
            path: 'wishList',
            loadChildren: () =>
              import('./pages/wish-list/wish-list.module').then(
                (m) => m.WishListPageModule
              ),
          },
          {
            path: 'cardDetails',
            loadChildren: () =>
              import('./pages/card-details/card-details.module').then(
                (m) => m.CardDetailsPageModule
              ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('./pages/profile/profile.module').then(
                (m) => m.ProfilePageModule
              ),
          },
          {
            path: 'course-details/:id',
            loadChildren: () =>
              import('./pages/course-details/course-details.module').then(
                (m) => m.CourseDetailsPageModule
              ),
          },
          // {
          //   path: 'library',
          //   loadChildren: () => import('./library/library-page.module').then((m) => m.LibraryPageModule),
          // },
          // {
          //   path: 'search',
          //   loadChildren: () => import('./search/search-page.module').then((m) => m.SearchPageModule),
          // },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
