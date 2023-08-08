// src/index.js
//AdminLTE

import React, { useState, useEffect, useRef } from 'react';
//Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FooterDash } from '../../componentes/Administrador/Dash/Fooder';
import { BodyDash } from '../../componentes/Administrador/Dash/Body';
import { MenuDash } from '../../componentes/Administrador/Dash/Menu';
import { HeaderDash } from '../../componentes/Administrador/Dash/Header';

export function Dashboard() {
   return(<>
        <HeaderDash/>
        <MenuDash/>
        <BodyDash/>
        <FooterDash/>
    </>
  );
}
