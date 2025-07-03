// Atualizar data e hora
function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo'
    };
    
    const dateTimeString = now.toLocaleDateString('pt-BR', options);
    document.getElementById('lastUpdate').textContent = dateTimeString;
}

// Salvar estado do checklist no localStorage
function saveChecklistState() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checklistState = {};
    
    checkboxes.forEach(checkbox => {
        checklistState[checkbox.id] = checkbox.checked;
    });
    
    localStorage.setItem('checklistState', JSON.stringify(checklistState));
}

// Carregar estado do checklist do localStorage
function loadChecklistState() {
    const savedState = localStorage.getItem('checklistState');
    
    if (savedState) {
        const checklistState = JSON.parse(savedState);
        
        Object.keys(checklistState).forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = checklistState[checkboxId];
            }
        });
    }
}

// Adicionar animação de entrada aos cards
function animateCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Adicionar efeito de digitação ao título
function typewriterEffect() {
    const title = document.querySelector('.header h1');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

// Atualizar cotações com animação (simulação)
function animateQuoteChanges() {
    const quoteValues = document.querySelectorAll('.quote-value');
    
    quoteValues.forEach(value => {
        value.addEventListener('mouseenter', () => {
            value.style.transform = 'scale(1.1)';
            value.style.transition = 'transform 0.2s ease';
        });
        
        value.addEventListener('mouseleave', () => {
            value.style.transform = 'scale(1)';
        });
    });
}

// Adicionar notificação quando todos os itens do checklist estão marcados
function checkCompletedTasks() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    if (allChecked && checkboxes.length > 0) {
        showNotification('🎉 Parabéns! Todos os itens foram verificados!');
    }
}

// Mostrar notificação
function showNotification(message) {
    // Remover notificação existente se houver
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00b894;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Adicionar animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Adicionar efeito de hover nos cards de transporte
function addTransportHoverEffects() {
    const transportItems = document.querySelectorAll('.transport-news li');
    
    transportItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

// Atualizar informações meteorológicas com base na hora
function updateWeatherByTime() {
    const now = new Date();
    const hour = now.getHours();
    const weatherAlert = document.querySelector('.weather-alert span');
    
    if (hour >= 6 && hour < 12) {
        weatherAlert.textContent = 'Manhã fria e chuvosa. Leve guarda-chuva e agasalho!';
    } else if (hour >= 12 && hour < 18) {
        weatherAlert.textContent = 'Tarde com chuva. Mantenha-se aquecido e seco!';
    } else {
        weatherAlert.textContent = 'Noite fria e chuvosa. Cuidado ao sair de casa!';
    }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar data/hora
    updateDateTime();
    setInterval(updateDateTime, 60000); // Atualizar a cada minuto
    
    // Carregar estado do checklist
    loadChecklistState();
    
    // Adicionar event listeners aos checkboxes
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            saveChecklistState();
            checkCompletedTasks();
        });
    });
    
    // Animações e efeitos
    setTimeout(animateCards, 500);
    setTimeout(typewriterEffect, 1000);
    animateQuoteChanges();
    addTransportHoverEffects();
    updateWeatherByTime();
    
    // Atualizar informações meteorológicas a cada hora
    setInterval(updateWeatherByTime, 3600000);
    
    console.log('Dashboard São Paulo carregado com sucesso!');
});

// Adicionar funcionalidade de refresh manual
function refreshData() {
    showNotification('🔄 Dados atualizados!');
    updateDateTime();
    updateWeatherByTime();
}

// Adicionar botão de refresh (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const refreshButton = document.createElement('button');
    refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar';
    refreshButton.style.cssText = `
        background: rgba(255,255,255,0.2);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        margin-top: 15px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    `;
    
    refreshButton.addEventListener('mouseenter', () => {
        refreshButton.style.background = 'rgba(255,255,255,0.3)';
        refreshButton.style.transform = 'scale(1.05)';
    });
    
    refreshButton.addEventListener('mouseleave', () => {
        refreshButton.style.background = 'rgba(255,255,255,0.2)';
        refreshButton.style.transform = 'scale(1)';
    });
    
    refreshButton.addEventListener('click', refreshData);
    header.appendChild(refreshButton);
});

