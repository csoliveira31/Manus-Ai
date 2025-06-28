import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cloud, CloudRain, Train, DollarSign, Euro, Bitcoin, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Informações Diárias
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {formatDate(currentTime)}
          </p>
          <div className="text-2xl font-mono text-blue-600 dark:text-blue-400">
            {formatTime(currentTime)}
          </div>
        </div>

        {/* Weather Card */}
        <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <CloudRain className="h-6 w-6" />
              Previsão do Tempo - São Paulo
            </CardTitle>
            <CardDescription className="text-blue-100">
              Condições meteorológicas para hoje
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15°C - 26°C</div>
                <div className="text-sm text-gray-600">Temperatura</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CloudRain className="h-5 w-5 text-blue-500" />
                  <span className="text-2xl font-bold text-blue-600">72%</span>
                </div>
                <div className="text-sm text-gray-600">Chance de Chuva</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">ENE 8km/h</div>
                <div className="text-sm text-gray-600">Vento</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-center text-blue-800 dark:text-blue-200 font-medium">
                ☔ Vai chover hoje! Leve guarda-chuva
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transport Card */}
        <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Train className="h-6 w-6" />
              Transporte Público - SP
            </CardTitle>
            <CardDescription className="text-green-100">
              Status das linhas de trem e metrô
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-green-600">Funcionamento Normal</div>
                <div className="text-sm text-gray-600">Todas as linhas operando</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Status Atual</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  ✅ Sem paralisações<br/>
                  ✅ Sem lentidão<br/>
                  ✅ Sem greves
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Última Atualização</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Greve cancelada em 26/06<br/>
                  Linhas 11, 12, 13 (CPTM)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Card */}
        <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Cotações Financeiras
            </CardTitle>
            <CardDescription className="text-purple-100">
              Valores atualizados das moedas e criptomoedas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">R$ 5,48</div>
                <div className="text-sm text-gray-600 mb-1">Dólar (USD)</div>
                <Badge variant="secondary" className="text-xs">-0,27%</Badge>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                <Euro className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">R$ 6,42</div>
                <div className="text-sm text-gray-600 mb-1">Euro (EUR)</div>
                <Badge variant="secondary" className="text-xs">-0,26%</Badge>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                <Bitcoin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-orange-600">R$ 588.269</div>
                <div className="text-sm text-gray-600 mb-1">Bitcoin (BTC)</div>
                <Badge variant="default" className="text-xs bg-green-500">+1%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reminder Card */}
        <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Lembrete Importante
            </CardTitle>
            <CardDescription className="text-pink-100">
              Não esqueça das tarefas do dia
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">
                📚 Preparar material da filha para escola:
              </h4>
              <ul className="space-y-2 text-pink-700 dark:text-pink-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Arrumar a bolsa escolar
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Separar a roupa
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Verificar material escolar
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Última atualização: {formatDate(currentTime)} às {formatTime(currentTime)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Informações coletadas automaticamente • São Paulo, Brasil
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

