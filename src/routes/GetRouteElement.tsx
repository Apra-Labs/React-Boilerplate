import { Suspense, lazy } from "react";
const SpinnerComponent = lazy(() => import('../components/SpinnerComponent'));

const GetRouteElement = (Component: React.ElementType): React.ReactNode => (
    <Suspense fallback={
        <SpinnerComponent
            animation='border'
            fullPage style={{ height: "10rem", width: "10rem" }}
        />
    }>
        <Component />
    </Suspense>
);

export default GetRouteElement;