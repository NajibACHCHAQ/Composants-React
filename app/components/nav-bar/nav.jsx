"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image.js";


import "./style.css";
/* eslint-disable react/no-unescaped-entities */


export const NavBar = () => {
    useEffect(() => {
      // Vérifie si le code s'exécute côté client
      if (typeof window !== 'undefined') {
        const hamburgerToggler = document.querySelector(".hamburger");
        const navLinksContainer = document.querySelector(".navlinks-container");
  
        const toggleNav = () => {
          hamburgerToggler.classList.toggle("open");
  
          const ariaToggle =
            hamburgerToggler.getAttribute("aria-expanded") === "true"
              ? "false"
              : "true";
          hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
          navLinksContainer.classList.toggle("open");
        };
  
        // Vérifiez si les éléments existent avant d'attacher l'événement
        if (hamburgerToggler) {
          hamburgerToggler.addEventListener("click", toggleNav);
        }
  
        // ...
  
        return () => {
          // Assurez-vous de supprimer l'événement lors du démontage du composant
          if (hamburgerToggler) {
            hamburgerToggler.removeEventListener("click", toggleNav);
          }
        };
      }
    }, []); // Le tableau de dépendances vide assure que le hook s'exécute une seule fois après le montage du composant
  return (
    <nav>
      <Link href="#" className="nav-icon" aria-label="visit homepage" aria-current="page">
        <Image src="/logo.png" alt="icon" width={100} height={100} />
        <span>ANCreative</span>
      </Link>

      <div className="main-navlinks">
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navlinks-container">
          <Link href="#" aria-current="page">
            Home
          </Link>
          <Link href="#">Services</Link>
          <Link href="#">Prix</Link>
          <Link href="#">Cummunautée</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>

      <div className="nav-authentication">
        <a href="#" className="sign-user" aria-label="Sign in page">
          <Image src="/logo.png" alt="icon" width={100} height={100} />
        </a>
        <div className="sign-btns">
          <button type="button">Sign In</button>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};
