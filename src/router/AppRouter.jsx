import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes.jsx";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* Definiendo las rutas publicas */}
            <Route path="login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />
            {/* Definiendo las rutas privadas */}
            <Route path="/*" element={
                <PrivateRoute>
                    <HeroesRoutes />
                </PrivateRoute>
            }/>
        </Routes>
    </>  )
}
