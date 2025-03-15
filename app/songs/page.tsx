'use client';
import Link from 'next/link';
import { useState } from 'react';

// Define the Song type
type Song = {
  title: string;
  artist: string;
  album: string;
  albumNumber: string;
  label: string;
  year: number;
  fhmUses?: { film: string; time: string }[];
};
