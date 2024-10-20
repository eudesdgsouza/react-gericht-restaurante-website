import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contato" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Localização</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Brasil</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horário de Funcionamento</p>
        <p className="p__opensans">Seg - Sex: 08:00 am - 02:00 am</p>
        <p className="p__opensans">Sab - Dom: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visite-nos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
