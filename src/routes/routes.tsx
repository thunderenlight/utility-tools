import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { HomePage } from '../pages/HomePage';
import { PasswordGenerator } from '../pages/PasswordGenerator';
import { ColorPalette } from '@/pages/ColorPalette';
import { UnitConverter } from '@/pages/UnitConverter'

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/color-palette" element={<ColorPalette />} />
          <Route path="/unit-converter" element={<UnitConverter />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRoutes;
