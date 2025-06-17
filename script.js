// Atualizar data atual
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('pt-BR', options);
    document.getElementById('current-date').textContent = dateString;
}

// Funcionalidade do checklist
function initializeChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    
    // Carregar estado salvo do localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(`checklist_${checkbox.id}`);
        if (savedState === 'true') {
            checkbox.checked = true;
            updateChecklistItem(checkbox);
        }
    });
    
    // Adicionar event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Salvar estado no localStorage
            localStorage.setItem(`checklist_${this.id}`, this.checked);
            updateChecklistItem(this);
        });
    });
}

function updateChecklistItem(checkbox) {
    const label = checkbox.nextElementSibling;
    const item = checkbox.parentElement;
    
    if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
        label.style.opacity = '0.6';
        item.style.background = '#d4edda';
    } else {
        label.style.textDecoration = 'none';
        label.style.opacity = '1';
        item.style.background = '';
    }
}

// Animações de entrada
function animateCards() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Atualização automática de dados (simulação)
function simulateDataUpdate() {
    // Simular atualização de dados a cada 5 minutos
    setInterval(() => {
        const lastUpdate = document.querySelector('.last-update');
        if (lastUpdate) {
            const now = new Date();
            const timeString = now.toLocaleString('pt-BR');
            lastUpdate.textContent = `Última atualização: ${timeString}`;
        }
    }, 300000); // 5 minutos
}

// Funcionalidade de notificação
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Adicionar funcionalidade de fechar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }
    }, 5000);
}

// Verificar progresso do checklist
function checkProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    
    if (checkedBoxes.length === checkboxes.length && checkboxes.length > 0) {
        showNotification('Parabéns! Todos os itens foram verificados!', 'success');
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    initializeChecklist();
    animateCards();
    simulateDataUpdate();
    
    // Verificar progresso do checklist quando houver mudanças
    document.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox' && e.target.closest('.checklist-item')) {
            setTimeout(checkProgress, 100);
        }
    });
    
    // Mostrar notificação de boas-vindas
    setTimeout(() => {
        showNotification('Bem-vindo! Suas informações diárias estão atualizadas.', 'info');
    }, 1000);
});

// Adicionar funcionalidade de refresh manual
function refreshData() {
    showNotification('Atualizando dados...', 'info');
    
    // Simular carregamento
    setTimeout(() => {
        updateCurrentDate();
        showNotification('Dados atualizados com sucesso!', 'success');
    }, 2000);
}

// Adicionar botão de refresh (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header .container');
    const refreshBtn = document.createElement('button');
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar';
    refreshBtn.className = 'refresh-btn';
    refreshBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 1rem;
        transition: all 0.3s ease;
    `;
    
    refreshBtn.addEventListener('click', refreshData);
    refreshBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.3)';
    });
    refreshBtn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    header.appendChild(refreshBtn);
});

