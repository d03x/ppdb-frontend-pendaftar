import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContextProvider } from "@/contexts/AppContextProvider";
import { Result } from "antd";
import ProtectedRoute from "@/router/ProtectedRoute";
const Login = lazy(() => import("@pages/Login"));
const PendaftaranPage = lazy(() => import("@/pages/pendaftaran/Pendaftaran"));
const DaftarAkun = lazy(() => import("@pages/DaftarAkun"));
const Dashboard = lazy(()=>import("@pages/Dashboard"))
function App() {

  return <React.Fragment>
    <BrowserRouter>
      <AppContextProvider>
        <Suspense>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="daftar" element={<DaftarAkun />} />
            {/** Private route */}
            <Route element={<ProtectedRoute user={true} />}>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/pendaftaran" element={<PendaftaranPage />} />
              <Route path="/berkas/upload" element={<h1>Upload Berkas</h1>} />
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
            <Route path="/*" element={<Result status={404} title={"404"} subTitle={"Halaman yang anda cari tidak tersedia"} />} />
            {/** Private route */}
          </Routes>
        </Suspense>
      </AppContextProvider>
    </BrowserRouter>
  </React.Fragment>
}
export default App
