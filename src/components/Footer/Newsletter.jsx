import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Inscreva-se na nossa Newsletter</h1>
      <p className="p__opensans">E não fique de fora de nossas atualizações!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Insira seu e-mail" />
      <button type="button" className="custom__button">Inscrever</button>
    </div>
  </div>
);

export default Newsletter;
