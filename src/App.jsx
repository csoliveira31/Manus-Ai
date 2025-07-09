import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Cloud, 
  Sun, 
  Thermometer, 
  Droplets, 
  Wind, 
  Train, 
  CheckCircle, 
  DollarSign, 
  Euro, 
  Bitcoin,
  Backpack,
  Shirt,
  BookOpen,
  Apple,
  Activity,
  RefreshCw,
  Calendar,
  Clock
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

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const schoolItems = [
    { icon: Backpack, label: 'Bolsa escolar', checked: true },
    { icon: Shirt, label: 'Roupa adequada (11°C - 20°C)', checked: true },
    { icon: BookOpen, label: 'Material escolar', checked: true },
    { icon: Apple, label: 'Lanche', checked: true },
    { icon: Activity, label: 'Roupa de ginástica (se necessário)', checked: true }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Dashboard de Informações Diárias
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(currentTime)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-mono">{formatTime(currentTime)}</span>
            </div>
          </div>
        </div>

        {/* Weather Section */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sun className="h-6 w-6 text-yellow-500" />
              Previsão do Tempo - São Paulo
            </CardTitle>
            <CardDescription>Condições climáticas para hoje</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Thermometer className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Temperatura</p>
                  <p className="text-xl font-bold">11°C - 20°C</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Droplets className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chuva</p>
                  <p className="text-xl font-bold">0%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/20 rounded-lg">
                <Wind className="h-8 w-8 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Vento</p>
                  <p className="text-xl font-bold">5 km/h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Cloud className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Condição</p>
                  <p className="text-sm font-semibold">Sol com nuvens</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                ☀️ Não vai chover hoje! Sol com muitas nuvens durante o dia.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transport Section */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Train className="h-6 w-6 text-blue-600" />
              Transporte Público - São Paulo
            </CardTitle>
            <CardDescription>Situação atual das linhas de trem e metrô</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200">
                  Todas as linhas operando normalmente
                </p>
                <p className="text-sm text-green-600 dark:text-green-300">
                  Metrô e CPTM funcionando sem intercorrências
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Linhas do Metrô</h4>
                <div className="space-y-1">
                  <Badge variant="outline" className="w-full justify-start">1-Azul: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">2-Verde: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">3-Vermelha: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">4-Amarela: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">15-Prata: Normal</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Linhas da CPTM</h4>
                <div className="space-y-1">
                  <Badge variant="outline" className="w-full justify-start">7-Rubi: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">8-Diamante: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">9-Esmeralda: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">10-Turquesa: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">11-Coral: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">12-Safira: Normal</Badge>
                  <Badge variant="outline" className="w-full justify-start">13-Jade: Normal</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Currency Section */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <DollarSign className="h-6 w-6 text-green-600" />
              Cotações
            </CardTitle>
            <CardDescription>Valores atuais das moedas e criptomoedas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <DollarSign className="h-10 w-10 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dólar (USD)</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">R$ 5,45</p>
                  <p className="text-sm text-red-600">-0,59%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Euro className="h-10 w-10 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Euro (EUR)</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">R$ 6,38</p>
                  <p className="text-sm text-red-600">-0,56%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <Bitcoin className="h-10 w-10 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bitcoin (BTC)</p>
                  <p className="text-xl font-bold text-orange-700 dark:text-orange-300">R$ 592.312</p>
                  <p className="text-sm text-red-600">-0,15%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* School Reminder Section */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Backpack className="h-6 w-6 text-purple-600" />
              Lembrete: Escola da Filha
            </CardTitle>
            <CardDescription>Checklist para arrumar as coisas da escola</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {schoolItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <IconComponent className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
            <Separator className="my-4" />
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                💡 Dica: Como não vai chover hoje (0% de chance), não é necessário levar guarda-chuva ou capa de chuva.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização: {formatTime(currentTime)} | Dashboard criado automaticamente
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar Informações
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App

