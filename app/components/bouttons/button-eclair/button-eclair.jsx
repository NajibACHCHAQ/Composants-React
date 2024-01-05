"use client"
import React, { useEffect } from "react";
import './style.css'

/* eslint-disable react/no-unescaped-entities */


export const ButtonEclair = () => {
    
  return (
    <>
        <header className="entete navbar ">
        <div className="myname">ACHCHAQ</div><div className="myname1">Najib.</div>
            <div className="navigation">
                <nav class="menu-nav">
                    <a href="projets.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Projets
                    </a>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        A propos
                    </a>
                    <a href="contact.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Contact
                    </a>
                </nav>
        </div>
    </header>
    </>
  );
};
