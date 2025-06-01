"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mantenimiento Mecánico CHTP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <h1>Mantenimiento Mecánico</h1>
        <h2>CHTP</h2>

        <a href="https://reportesdiarios.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Reportes Diarios de Mantenimiento</a>
        <a href="https://horasextras.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Ingreso de Horas Extras</a>
        <a href="https://turnosfiltros.vercel.app/" className="button filtros" target="_blank" rel="noopener noreferrer">Limpieza de Filtros</a>
        <a href="https://problemas.abacusai.app/" className="button" target="_blank" rel="noopener noreferrer">Gestión de Problemas y Mejoras</a>

        <div className="separator">
          <a href="https://miconexionh.vercel.app/" className="button special" target="_blank" rel="noopener noreferrer">Mi Conexión Interna (CNV)</a>
        </div>

      </main>

      <style jsx>{`
        .container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 30px 10px;
          text-align: center;
          background-color: #f0f2f5;
          color: #222;
          transition: background-color 0.3s ease, color 0.3s ease;
          min-height: 100vh;
          padding-bottom: 40px;
        }
        h1 {
          font-weight: 700;
          font-size: 2.8rem;
          margin-bottom: 0;
          color: inherit;
        }
        h2 {
          font-weight: 500;
          font-size: 1.2rem;
          margin-top: 4px;
          margin-bottom: 40px;
          color: #555;
        }
        a.button {
          display: block;
          width: 90%;
          max-width: 420px;
          margin: 14px auto;
          padding: 18px 0;
          background-color: #007BFF;
          color: white;
          text-decoration: none;
          border-radius: 14px;
          font-size: 20px;
          font-weight: 600;
          box-shadow: 0 6px 14px rgba(0, 123, 255, 0.3);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        a.button:hover,
        a.button:focus {
          background-color: #0056b3;
          box-shadow: 0 8px 18px rgba(0, 86, 179, 0.5);
          outline: none;
        }
        .separator {
          margin-top: 60px;
        }
        a.button.special {
          background-color: #005cbf;
          box-shadow: 0 6px 14px rgba(0, 92, 191, 0.3);
        }
        a.button.special:hover,
        a.button.special:focus {
          background-color: #004a99;
          box-shadow: 0 8px 18px rgba(0, 74, 153, 0.5);
        }

a.button.filtros {
  background-color: #28a745; /* verde */
  box-shadow: 0 6px 14px rgba(40, 167, 69, 0.4);
}

a.button.filtros:hover,
a.button.filtros:focus {
  background-color: #218838;
  box-shadow: 0 8px 18px rgba(33, 136, 56, 0.6);
}






        @media (prefers-color-scheme: dark) {
          .container {
            background-color: #121212;
            color: #e0e0e0;
          }
          h2 {
            color: #bbb;
          }
          a.button {
            background-color: #3399ff;
            box-shadow: 0 6px 14px rgba(51, 153, 255, 0.5);
            color: #fff;
          }
          a.button:hover,
          a.button:focus {
            background-color: #1a73e8;
            box-shadow: 0 8px 18px rgba(26, 115, 232, 0.7);
          }
          a.button.special {
            background-color: #2673cc;
            box-shadow: 0 6px 14px rgba(38, 115, 204, 0.5);
          }
          a.button.special:hover,
          a.button.special:focus {
            background-color: #1a4f99;
            box-shadow: 0 8px 18px rgba(26, 79, 153, 0.7);
          }
        }
      `}</style>
    </>
  );
}