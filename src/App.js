import React from 'react';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Dashboard Diário</h1>
        <p className="date">{currentDate}</p>
      </header>

      <main className="dashboard">
        {/* Previsão do Tempo */}
        <section className="card weather-card">
          <div className="card-header">
            <h2>🌤️ Previsão do Tempo - São Paulo</h2>
          </div>
          <div className="card-content">
            <div className="weather-main">
              <div className="temperature">
                <span className="temp-max">27°C</span>
                <span className="temp-separator">/</span>
                <span className="temp-min">13°C</span>
              </div>
              <div className="weather-condition">
                <strong>Sol o dia todo</strong>
                <p>Céu claro sem nuvens</p>
                <p className="no-rain">🚫 Sem possibilidade de chuva</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transporte Público */}
        <section className="card transport-card">
          <div className="card-header">
            <h2>🚇 Transporte Público - SP</h2>
          </div>
          <div className="card-content">
            <div className="status-indicator">
              <span className="status-dot status-normal"></span>
              <strong>Operação Normal</strong>
            </div>
            <div className="transport-details">
              <p>✅ Metrô e CPTM funcionando normalmente</p>
              <p>✅ Linha 3-Vermelha normalizada às 7h25</p>
              <p>✅ Sem paralisações ou greves ativas</p>
            </div>
          </div>
        </section>

        {/* Cotações */}
        <section className="card quotes-card">
          <div className="card-header">
            <h2>💰 Cotações</h2>
          </div>
          <div className="card-content">
            <div className="quotes-grid">
              <div className="quote-item">
                <div className="quote-header">
                  <span className="currency-flag">🇺🇸</span>
                  <span className="currency-name">Dólar</span>
                </div>
                <div className="quote-value">R$ 5,50</div>
                <div className="quote-change positive">+0,04%</div>
              </div>
              
              <div className="quote-item">
                <div className="quote-header">
                  <span className="currency-flag">🇪🇺</span>
                  <span className="currency-name">Euro</span>
                </div>
                <div className="quote-value">R$ 6,31</div>
                <div className="quote-change negative">-0,03%</div>
              </div>
              
              <div className="quote-item">
                <div className="quote-header">
                  <span className="currency-flag">₿</span>
                  <span className="currency-name">Bitcoin</span>
                </div>
                <div className="quote-value">R$ 575.433</div>
                <div className="quote-change positive">+0,22%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lembrete */}
        <section className="card reminder-card">
          <div className="card-header">
            <h2>📝 Lembrete</h2>
          </div>
          <div className="card-content">
            <h3>Arrumar coisas da filha para escola:</h3>
            <div className="checklist">
              <label className="checklist-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Bolsa escolar
              </label>
              <label className="checklist-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Roupa do uniforme
              </label>
              <label className="checklist-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Material escolar
              </label>
              <label className="checklist-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Lanche
              </label>
              <label className="checklist-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Agenda escolar
              </label>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Última atualização: {new Date().toLocaleTimeString('pt-BR')}</p>
      </footer>
    </div>
  );
}

export default App;

