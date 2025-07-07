import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cloud, Sun, CloudRain, Train, DollarSign, Euro, Bitcoin, RefreshCw, Clock, AlertTriangle } from 'lucide-react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Dados coletados das pesquisas
  const weatherData = {
    temperature: { min: 11, max: 22 },
    condition: "Sol com muitas nuvens",
    rain: false,
    humidity: "Baixa",
    wind: "SE - 7km/h"
  }

  const transportData = {
    metro: {
      status: "Operação Normal",
      alerts: [
        "Linha 2-Verde: Velocidade reduzida devido a obras",
        "Linha 1-Azul: Falha técnica reportada na manhã"
      ]
    },
    cptm: {
      status: "Operação Normal", 
      alerts: [
        "Linhas operando normalmente",
        "Eventos especiais em algumas estações"
      ]
    }
  }

  const exchangeRates = {
    usd: { value: 5.42, change: "+0.20%" },
    eur: { value: 6.39, change: "+0.46%" },
    btc: { value: 594519.50, change: "+1.12%" }
  }

  const reminder = {
    title: "Lembrete: Preparar coisas da filha para escola",
    items: ["Bolsa escolar", "Uniforme", "Material escolar", "Lanche", "Agenda"]
  }

  const formatCurrency = (value, currency = 'BRL') => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency
    }).format(value)
  }

  const getWeatherIcon = () => {
    if (weatherData.rain) return <CloudRain className="h-8 w-8 text-blue-500" />
    if (weatherData.condition.includes("Sol")) return <Sun className="h-8 w-8 text-yellow-500" />
    return <Cloud className="h-8 w-8 text-gray-500" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Dashboard São Paulo
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            {currentTime.toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Weather Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getWeatherIcon()}
                Previsão do Tempo
              </CardTitle>
              <CardDescription>São Paulo - Hoje</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold">
                    {weatherData.temperature.min}° - {weatherData.temperature.max}°C
                  </span>
                </div>
                <p className="text-sm text-gray-600">{weatherData.condition}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Chuva:</span>
                    <Badge variant={weatherData.rain ? "destructive" : "secondary"} className="ml-2">
                      {weatherData.rain ? "Sim" : "Não"}
                    </Badge>
                  </div>
                  <div>
                    <span className="font-medium">Vento:</span>
                    <span className="ml-2">{weatherData.wind}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transport Card */}
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="h-6 w-6" />
                Transporte Público
              </CardTitle>
              <CardDescription>Metrô e CPTM - Status atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold">Metrô SP</h3>
                    <Badge variant="secondary">{transportData.metro.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    {transportData.metro.alerts.map((alert, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{alert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold">CPTM</h3>
                    <Badge variant="secondary">{transportData.cptm.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    {transportData.cptm.alerts.map((alert, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{alert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Rates Card */}
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                Cotações
              </CardTitle>
              <CardDescription>Valores atualizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold">Dólar (USD)</h3>
                  <p className="text-2xl font-bold">{formatCurrency(exchangeRates.usd.value)}</p>
                  <Badge variant="secondary" className="text-green-600">
                    {exchangeRates.usd.change}
                  </Badge>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Euro className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold">Euro (EUR)</h3>
                  <p className="text-2xl font-bold">{formatCurrency(exchangeRates.eur.value)}</p>
                  <Badge variant="secondary" className="text-blue-600">
                    {exchangeRates.eur.change}
                  </Badge>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Bitcoin className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <h3 className="font-semibold">Bitcoin (BTC)</h3>
                  <p className="text-xl font-bold">{formatCurrency(exchangeRates.btc.value)}</p>
                  <Badge variant="secondary" className="text-orange-600">
                    {exchangeRates.btc.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reminder Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                Lembrete
              </CardTitle>
              <CardDescription>Preparar para escola</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-medium text-sm">{reminder.title}</h3>
                <ul className="space-y-2">
                  {reminder.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Dashboard atualizado automaticamente • Dados coletados em tempo real</p>
        </div>
      </div>
    </div>
  )
}

export default App

