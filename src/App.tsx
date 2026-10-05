import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import LoadingPage from "./pages/loading";
import { routes } from "./lib/routes";
import RootLayout from "./components/layouts/RootLayout";
const NotFoundPage = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <RootLayout>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={() => <route.component />}
              />
            );
          })}
        </RootLayout>

        {/* Not found */}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
