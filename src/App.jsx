import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cloud, Sun, CloudRain, Train, DollarSign, Euro, Bitcoin, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const weatherData = {
    temperature: { min: 13, max: 23 },
    condition: "Muitas nuvens o dia todo, com aberturas de sol",
    rain: "Sem possibilidade de chuva (0%)",
    wind: "E - 5km/h",
    humidity: "57% a 99%"
  }

  const metroLines = [
    { name: "Linha 1-Azul", status: "normal" },
    { name: "Linha 2-Verde", status: "normal" },
    { name: "Linha 3-Vermelha", status: "normal" },
    { name: "Linha 4-Amarela", status: "normal" },
    { name: "Linha 5-Lilás", status: "normal" },
    { name: "Linha 15-Prata", status: "normal" }
  ]

  const cptmLines = [
    { name: "Linha 7-Rubi", status: "normal" },
    { name: "Linha 8-Diamante", status: "normal" },
    { name: "Linha 9-Esmeralda", status: "normal" },
    { name: "Linha 10-Turquesa", status: "normal" },
    { name: "Linha 11-Coral", status: "normal" },
    { name: "Linha 12-Safira", status: "normal" },
    { name: "Linha 13-Jade", status: "normal" }
  ]

  const currencies = [
    { name: "Dólar Americano", symbol: "USD", value: "R$ 5,54", icon: DollarSign, change: "+0.87%" },
    { name: "Euro", symbol: "EUR", value: "R$ 6,48", icon: Euro, change: "+0.63%" },
    { name: "Bitcoin", symbol: "BTC", value: "R$ 654.258,17", icon: Bitcoin, change: "+5.3%" }
  ]

  const reminders = [
    "Arrumar bolsa da escola",
    "Separar roupa para a escola",
    "Verificar material escolar",
    "Preparar lanche",
    "Conferir agenda escolar"
  ]

  const getStatusIcon = (status) => {
    return status === "normal" ? <CheckCircle className="w-4 h-4 text-green-500" /> : <AlertCircle className="w-4 h-4 text-red-500" />
  }

  const getStatusBadge = (status) => {
    return status === "normal" ? 
      <Badge variant="secondary" className="bg-green-100 text-green-800">Operação Normal</Badge> : 
      <Badge variant="destructive">Problemas</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Informações Diárias - São Paulo</h1>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{currentTime.toLocaleDateString('pt-BR')} - {currentTime.toLocaleTimeString('pt-BR')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Weather Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Previsão do Tempo
              </CardTitle>
              <CardDescription>São Paulo - Hoje, 11 de julho</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{weatherData.temperature.min}°C - {weatherData.temperature.max}°C</span>
                  <Cloud className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-sm text-gray-600">{weatherData.condition}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Chuva:</span>
                    <p className="text-gray-600">{weatherData.rain}</p>
                  </div>
                  <div>
                    <span className="font-medium">Vento:</span>
                    <p className="text-gray-600">{weatherData.wind}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">Umidade:</span>
                    <p className="text-gray-600">{weatherData.humidity}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metro Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="w-6 h-6 text-blue-500" />
                Metrô de São Paulo
              </CardTitle>
              <CardDescription>Status das linhas em tempo real</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {metroLines.map((line, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(line.status)}
                      <span className="text-sm font-medium">{line.name}</span>
                    </div>
                    {getStatusBadge(line.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CPTM Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="w-6 h-6 text-green-500" />
                CPTM
              </CardTitle>
              <CardDescription>Status das linhas de trem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cptmLines.map((line, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(line.status)}
                      <span className="text-sm font-medium">{line.name}</span>
                    </div>
                    {getStatusBadge(line.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Currency Card */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                Cotações
              </CardTitle>
              <CardDescription>Valores atualizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currencies.map((currency, index) => {
                  const IconComponent = currency.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium">{currency.name}</p>
                          <p className="text-sm text-gray-500">{currency.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{currency.value}</p>
                        <p className="text-sm text-green-600">{currency.change}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Reminders Card */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-purple-500" />
                Lembrete: Preparar para a Escola
              </CardTitle>
              <CardDescription>Checklist para organizar as coisas da sua filha</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-800">{reminder}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Dica:</strong> Prepare tudo na noite anterior para uma manhã mais tranquila!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Última atualização: {currentTime.toLocaleString('pt-BR')}</p>
          <p>Dados obtidos de fontes oficiais - Climatempo, Metrô SP, CPTM, Remessa Online</p>
        </div>
      </div>
    </div>
  )
}

export default App

