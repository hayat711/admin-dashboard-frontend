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

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className='app'>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout /> } >
                            <Route path='/' element={<Navigate to='/dashboard' replace /> } />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/products' element={<Products /> } />
                            <Route path='/customers' element={<Customer /> } />
                            <Route path='/transactions' element={<Transaction />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
