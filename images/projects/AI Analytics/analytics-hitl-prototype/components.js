// Components for building the pipeline UI programmatically

const UI = {
    createStepCard: (stepNum, title, aiSuggestionHTML, explanationText, actionsHTML, hasAmbiguity = false) => {
        const cardId = `card-step-${stepNum}`;
        const card = document.createElement('div');
        card.className = `hitl-card state-pending`;
        card.id = cardId;
        
        let ambiguityBlock = '';
        if (hasAmbiguity) {
            ambiguityBlock = `
                <div class="ambiguity-alert">
                    <div class="ambiguity-alert-header">
                        <i class="fa-solid fa-triangle-exclamation"></i> Ambiguity Detected
                    </div>
                    <div class="alert-text">
                        "Commando" is not a standard schema variant.
                    </div>
                    <div class="ambiguity-search-ui">
                        <span class="canonical-mapping">Map to canonical schema:</span>
                        <select class="dropdown-styled" id="${cardId}-schema-select">
                            <option value="">-- Select Schema --</option>
                            <option value="cs_v3">CS V3</option>
                            <option value="criticalstrikenetwork">Critical Strike Network</option>
                        </select>
                    </div>
                </div>
            `;
        }

        const html = `
            <div class="card-header">
                <div class="step-badge">Step ${stepNum}</div>
                <h3>${title}</h3>
                <div class="status-badge status-warning" id="${cardId}-status"><i class="fa-solid fa-clock"></i> Needs Approval</div>
            </div>
            
            <div class="card-body">
                <div class="ai-suggestion">
                    <div class="section-label"><i class="fa-solid fa-robot"></i> AI Suggestion</div>
                    ${aiSuggestionHTML}
                    ${ambiguityBlock}
                </div>

                <div class="explanation-box">
                    <div class="explanation-toggle" onclick="this.classList.toggle('open'); const content = this.nextElementSibling; content.style.display = content.style.display === 'none' ? 'block' : 'none';">
                        <i class="fa-solid fa-lightbulb"></i> Why this? <i class="fa-solid fa-chevron-down fold-icon"></i>
                    </div>
                    <div class="explanation-content" style="display: none;">
                        ${explanationText}
                    </div>
                </div>
            </div>
            
            <div class="card-actions" id="${cardId}-actions">
                ${actionsHTML}
            </div>
        `;
        
        card.innerHTML = html;
        return card;
    },

    markCardApproved: (cardId) => {
        const card = document.getElementById(cardId);
        if (!card) return;
        
        card.classList.remove('state-pending');
        card.classList.add('state-approved');
        
        const statusBadge = card.querySelector('.status-badge');
        statusBadge.className = 'status-badge status-success';
        statusBadge.innerHTML = '<i class="fa-solid fa-check"></i> Approved';
        
        const actions = card.querySelector('.card-actions');
        // Hide edit/approve, maybe retain edit
        actions.innerHTML = `<button class="btn btn-ghost btn-edit" onclick="handleCascadeEdit(${cardId.split('-').pop()})"><i class="fa-solid fa-pen"></i> Edit</button>`;
        
        // Disable inner selects
        card.querySelectorAll('select, input, textarea').forEach(el => el.disabled = true);
    },
    
    // Generates the Code block container
    createCodeBlock: (lang, code) => {
        return `
            <div class="code-block-container">
                <div class="code-block-header">
                    <span>${lang.toUpperCase()}</span>
                    <button class="icon-btn" title="Copy"><i class="fa-regular fa-copy"></i></button>
                </div>
                <pre><code class="language-${lang}">${code}</code></pre>
            </div>
        `;
    }
};

window.UI = UI;
