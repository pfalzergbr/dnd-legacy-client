import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface RouteWithSuspenseProps extends RouteProps {
  fallback: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null
}

const RouteWithSuspense: React.FC<RouteWithSuspenseProps> = ({fallback, children, ...props}) => {
  return (
    <Route {...props} >
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </Route>
  );
};

export default RouteWithSuspense;
 