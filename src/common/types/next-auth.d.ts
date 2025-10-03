import { DefaultSession, DefaultUser } from 'next-auth';

// Deklarasikan modul untuk "next-auth"
declare module 'next-auth' {
  /**
   * Perluas (extend) tipe Session bawaan
   */
  interface Session {
    user?: {
      id: string; // <-- Tambahkan properti 'id' Anda di sini
    } & DefaultSession['user'];
  }

  /**
   * Perluas (extend) tipe User bawaan
   */
  interface User extends DefaultUser {
    id: string; // <-- Tambahkan properti 'id' Anda di sini
  }
}
