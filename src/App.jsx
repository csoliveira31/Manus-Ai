import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Train, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign, 
  Euro, 
  Bitcoin,
  Backpack,
  Clock,
  MapPin,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react'
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
    temperature: "13° - 23°",
    condition: "Nublado com nevoeiro",
    rain: "Sem previsão de chuva",
    description: "Nublado com nevoeiro o dia todo. À noite o tempo abre e o céu fica limpo.",
    icon: Cloud
  }

  const transportData = {
    status: "normal",
    lastUpdate: "23/07/2025",
    incidents: [
      {
        line: "Linha 12-Safira",
        status: "Normalizada",
        description: "Problema entre estações Itaim e Jardim Helena foi resolvido às 7h51",
        type: "resolved"
      }
    ],
    generalStatus: "Todas as linhas do Metrô e CPTM operam normalmente hoje. Não há greves programadas."
  }

  const currencyData = {
    usd: { value: "R$ 5,57", change: "-0,03%", trend: "down" },
    eur: { value: "R$ 6,54", change: "+0,47%", trend: "up" },
    btc: { value: "R$ 658.783", change: "+0,01%", trend: "up" }
  }

  const reminderData = {
    title: "Lembrete: Coisas da escola para sua filha",
    items: [
      "Bolsa escolar",
      "Uniforme limpo",
      "Material escolar (cadernos, lápis, borracha)",
      "Lanche ou dinheiro para lanche",
      "Agenda escolar",
      "Livros do dia"
    ]
  }

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />
      default: return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard Diário</h1>
          <p className="text-lg text-gray-600 mb-4">Suas informações essenciais do dia</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{currentTime.toLocaleString('pt-BR')}</span>
            <MapPin className="h-4 w-4 ml-4" />
            <span>São Paulo, SP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Previsão do Tempo */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <weatherData.icon className="h-5 w-5 text-blue-500" />
                Previsão do Tempo
              </CardTitle>
              <CardDescription>Condições para hoje</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{weatherData.temperature}</div>
                  <div className="text-sm text-gray-600">{weatherData.condition}</div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">{weatherData.rain}</span>
                  </div>
                  <p className="text-sm text-gray-600">{weatherData.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transporte Público */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="h-5 w-5 text-green-500" />
                Transporte Público
              </CardTitle>
              <CardDescription>Metrô e CPTM - São Paulo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Funcionamento Normal
                  </Badge>
                </div>
                <Separator />
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{transportData.generalStatus}</p>
                  {transportData.incidents.map((incident, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-sm">{incident.line}</span>
                      </div>
                      <p className="text-xs text-gray-600">{incident.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cotações */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-500" />
                Cotações
              </CardTitle>
              <CardDescription>Moedas e Criptomoedas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Dólar (USD)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{currencyData.usd.value}</div>
                    <div className="flex items-center gap-1 text-sm">
                      {getTrendIcon(currencyData.usd.trend)}
                      <span className={currencyData.usd.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {currencyData.usd.change}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Euro (EUR)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{currencyData.eur.value}</div>
                    <div className="flex items-center gap-1 text-sm">
                      {getTrendIcon(currencyData.eur.trend)}
                      <span className={currencyData.eur.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {currencyData.eur.change}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">Bitcoin (BTC)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{currencyData.btc.value}</div>
                    <div className="flex items-center gap-1 text-sm">
                      {getTrendIcon(currencyData.btc.trend)}
                      <span className={currencyData.btc.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {currencyData.btc.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lembrete Escolar */}
          <Card className="col-span-1 lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Backpack className="h-5 w-5 text-purple-500" />
                {reminderData.title}
              </CardTitle>
              <CardDescription>Checklist para não esquecer nada importante</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {reminderData.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-4 h-4 border-2 border-purple-300 rounded"></div>
                    <span className="text-sm font-medium text-purple-800">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Dica:</strong> Prepare tudo na noite anterior para evitar correria pela manhã!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Dashboard atualizado automaticamente • Última atualização: {currentTime.toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </div>
  )
}

export default App

