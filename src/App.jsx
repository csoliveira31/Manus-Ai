import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cloud, Train, Backpack, DollarSign, Euro, Bitcoin, RefreshCw, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [reminderChecked, setReminderChecked] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard Informativo</h1>
          <p className="text-lg text-gray-600">{formatDate(currentTime)}</p>
          <p className="text-2xl font-mono text-blue-600">{formatTime(currentTime)}</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Weather Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Previsão do Tempo</CardTitle>
              <Cloud className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Aguardando localização</div>
              <p className="text-xs text-muted-foreground">
                Informe a cidade para obter a previsão
              </p>
              <Badge variant="secondary" className="mt-2">
                Pendente
              </Badge>
            </CardContent>
          </Card>

          {/* Transport Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transporte SP</CardTitle>
              <Train className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Verificando...</div>
              <p className="text-xs text-muted-foreground">
                Status das linhas de trem e metrô
              </p>
              <Badge variant="outline" className="mt-2">
                Carregando
              </Badge>
            </CardContent>
          </Card>

          {/* School Reminder Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lembrete Escolar</CardTitle>
              <Backpack className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Preparar para escola:</p>
                <ul className="text-xs space-y-1">
                  <li>• Bolsa escolar</li>
                  <li>• Uniforme/roupa</li>
                  <li>• Material escolar</li>
                  <li>• Lanche</li>
                </ul>
                <Button 
                  size="sm" 
                  variant={reminderChecked ? "default" : "outline"}
                  onClick={() => setReminderChecked(!reminderChecked)}
                  className="mt-2 w-full"
                >
                  {reminderChecked ? (
                    <>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Concluído
                    </>
                  ) : (
                    "Marcar como feito"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dollar Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dólar (USD)</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 5,59</div>
              <p className="text-xs text-muted-foreground">
                Cotação comercial
              </p>
              <Badge variant="secondary" className="mt-2">
                Atualizado
              </Badge>
            </CardContent>
          </Card>

          {/* Euro Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Euro (EUR)</CardTitle>
              <Euro className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 6,53</div>
              <p className="text-xs text-muted-foreground">
                Cotação comercial
              </p>
              <Badge variant="secondary" className="mt-2">
                Atualizado
              </Badge>
            </CardContent>
          </Card>

          {/* Bitcoin Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bitcoin (BTC)</CardTitle>
              <Bitcoin className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$119,952</div>
              <p className="text-xs text-muted-foreground">
                Preço em USD
              </p>
              <Badge variant="secondary" className="mt-2">
                Atualizado
              </Badge>
            </CardContent>
          </Card>

        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Dashboard criado por Manus AI • Atualizado automaticamente</p>
        </div>
      </div>
    </div>
  )
}

export default App
