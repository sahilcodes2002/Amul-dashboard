import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import OperationalDashboard from "@/pages/operational-dashboard";
import NotFound from "@/pages/not-found";

// function Router() {
//   return (
//     <Switch>
//       <Route path="/Amul-dashboard/" component={Dashboard} />
//       {/* <Route path="/operational-dashboard" component={OperationalDashboard} /> */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

function Router() {
  return (
    <WouterRouter base="/Amul-dashboard">
      <Switch>
        <Route path="/" component={Dashboard} />
        {/* <Route path="/operational-dashboard" component={OperationalDashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
