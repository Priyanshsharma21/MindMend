"use client";
import { createContext, useContext, useState } from 'react';

const AnimeContext = createContext()

export const AnimeProvider = ({children})=>{
    
    return (
        <AnimeContext.Provider value={{}}>
          {children}
        </AnimeContext.Provider>
      );
}

export const useAnimeContext = () => useContext(AnimeContext);
