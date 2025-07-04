import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cloud, Train, DollarSign, Euro, Bitcoin, RefreshCw, Calendar, MapPin } from 'lucide-react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Informações Diárias - São Paulo
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">{formatDate(currentTime)}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 mt-1">
            <span className="text-xl font-mono">{formatTime(currentTime)}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Weather Card */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-500" />
                Previsão do Tempo
              </CardTitle>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">11°C - 18°C</div>
                  <div className="text-gray-600 mt-1">Parcialmente nublado</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Hoje:</strong> Possibilidade de garoa de manhã. À tarde o sol aparece, 
                    com pancadas de chuva. Tempo firme à noite.
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  Sensação térmica chegou a 9°C na madrugada
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transport Card */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Train className="w-6 h-6 text-green-500" />
                Transporte Público
              </CardTitle>
              <CardDescription>Linhas de Trem e Metrô</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Status Geral</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Normal
                  </Badge>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Situação Atual:</strong> Todas as linhas de trem e metrô estão 
                    operando normalmente hoje (04/07/2025).
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  <strong>Histórico recente:</strong> Greves planejadas foram suspensas. 
                  Lentidões pontuais podem ocorrer devido a manutenção.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Currency Rates Card */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-yellow-500" />
              Cotações
            </CardTitle>
            <CardDescription>Moedas e Criptomoedas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* USD */}
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Dólar (USD)</span>
                </div>
                <div className="text-2xl font-bold text-green-700">R$ 5,41</div>
                <div className="text-sm text-green-600">Compra: R$ 5,405</div>
              </div>

              {/* EUR */}
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Euro className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Euro (EUR)</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">R$ 6,36</div>
                <div className="text-sm text-blue-600">Compra: R$ 6,350</div>
              </div>

              {/* BTC */}
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Bitcoin className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Bitcoin (BTC)</span>
                </div>
                <div className="text-2xl font-bold text-orange-700">R$ 590k</div>
                <div className="text-sm text-orange-600">≈ US$ 109k</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              As cotações podem variar ao longo do dia. Valores aproximados baseados nas informações mais recentes.
            </div>
          </CardContent>
        </Card>

        {/* Reminder Card */}
        <Card className="shadow-lg bg-yellow-50 border-yellow-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-yellow-800">
              🎒 Lembrete: Preparar as coisas da filha para a escola
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="bolsa" className="rounded" />
                <label htmlFor="bolsa" className="text-yellow-800">Bolsa escolar</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="roupa" className="rounded" />
                <label htmlFor="roupa" className="text-yellow-800">Roupa</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="lanche" className="rounded" />
                <label htmlFor="lanche" className="text-yellow-800">Lanche</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="material" className="rounded" />
                <label htmlFor="material" className="text-yellow-800">Material escolar</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="uniforme" className="rounded" />
                <label htmlFor="uniforme" className="text-yellow-800">Uniforme</label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Última atualização: {formatDate(currentTime)} às {formatTime(currentTime)}</p>
          <p className="mt-1">Informações coletadas automaticamente</p>
        </div>
      </div>
    </div>
  )
}

export default App

