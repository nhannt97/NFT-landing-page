import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Team() {
  const { t } = useTranslation();
  return (
    <div id="team">
      <Header />
      <div id="title">OUR TEAM</div>
      <Footer />
    </div>
  );
}
