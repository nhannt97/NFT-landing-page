import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Building() {
  const { t } = useTranslation();
  return (
    <div id="building">
      <Header />
      Building
      <Footer />
    </div>
  );
}
