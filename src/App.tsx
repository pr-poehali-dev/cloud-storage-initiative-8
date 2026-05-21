import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Manufacturers from "./pages/Manufacturers";
import Importers from "./pages/Importers";
import Sellers from "./pages/Sellers";
import CaseClothing from "./pages/cases/CaseClothing";
import CaseWater from "./pages/cases/CaseWater";
import CasePharma from "./pages/cases/CasePharma";
import CaseDairy from "./pages/cases/CaseDairy";
import CategoryClothing from "./pages/categories/CategoryClothing";
import CategoryWater from "./pages/categories/CategoryWater";
import CategoryPharma from "./pages/categories/CategoryPharma";
import CategoryDairy from "./pages/categories/CategoryDairy";
import CategoryTobacco from "./pages/categories/CategoryTobacco";
import CategoryPerfume from "./pages/categories/CategoryPerfume";
import CategoryFurniture from "./pages/categories/CategoryFurniture";
import CategoryTires from "./pages/categories/CategoryTires";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/manufacturers" element={<Manufacturers />} />
            <Route path="/importers" element={<Importers />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/cases/clothing" element={<CaseClothing />} />
            <Route path="/cases/water" element={<CaseWater />} />
            <Route path="/cases/pharma" element={<CasePharma />} />
            <Route path="/cases/dairy" element={<CaseDairy />} />
            <Route path="/categories/clothing" element={<CategoryClothing />} />
            <Route path="/categories/water" element={<CategoryWater />} />
            <Route path="/categories/pharma" element={<CategoryPharma />} />
            <Route path="/categories/dairy" element={<CategoryDairy />} />
            <Route path="/categories/tobacco" element={<CategoryTobacco />} />
            <Route path="/categories/perfume" element={<CategoryPerfume />} />
            <Route path="/categories/furniture" element={<CategoryFurniture />} />
            <Route path="/categories/tires" element={<CategoryTires />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;