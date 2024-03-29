import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import { Layout } from './pages/Layout';
import Products from './pages/Products';
import Customer from './pages/customers';
import Transaction from './pages/transactions';
import Geography from './pages/geography';
import Overview from './pages/overview';
import Daily from './pages/daily';
import Monthly from './pages/monthly';
import Breakdown from './pages/breakdown';
import Admin from './pages/admin';
import Performance from './pages/performance';

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className='app'>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' element={<Navigate to='/dashboard' replace />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/customers' element={<Customer />} />
                            <Route path='/transactions' element={<Transaction />} />
                            <Route path='/geography' element={<Geography />} />
                            <Route path='/overview' element={<Overview />} />
                            <Route path='/daily' element={<Daily />} />
                            <Route path='/monthly' element={<Monthly />} />
                            <Route path='/breakdown' element={<Breakdown />} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/performance' element={<performance />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
