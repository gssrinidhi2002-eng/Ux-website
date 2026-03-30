// App state (HITL Flow)
let appState = "START"; 
let lastUserQuery = "";
let lastRecommendedEvents = [];
let lastTimeRange = "Past 30 Days";
let hardcodeMode = true;
let tempDateInput = "";
const chatFeed = document.getElementById('chat-feed');
const inputField = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const introScreen = document.getElementById('intro-screen');
const modalOverlay = document.getElementById('learning-modal');

// Sidebar logic
const leftSidebar = document.getElementById('left-sidebar');
const collapseBtn = document.getElementById('collapse-btn');
const brandToggle = document.getElementById('brand-toggle');
const projectDropdownBtn = document.getElementById('project-dropdown-btn');
const projectOptions = document.getElementById('project-options');
const selectedProject = document.getElementById('selected-project');

function toggleSidebar() {
    leftSidebar.classList.toggle('collapsed');
}
collapseBtn.addEventListener('click', toggleSidebar);
brandToggle.addEventListener('click', () => {
    if (leftSidebar.classList.contains('collapsed')) {
        leftSidebar.classList.remove('collapsed');
    }
});

projectOptions.style.display = 'none';
projectDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    projectOptions.style.display = projectOptions.style.display === 'none' ? 'block' : 'none';
});
projectOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
        selectedProject.textContent = e.target.textContent;
        projectOptions.style.display = 'none';
    }
});
document.addEventListener('click', (e) => {
    if (!projectDropdownBtn.contains(e.target) && !projectOptions.contains(e.target)) {
        projectOptions.style.display = 'none';
    }
});

function scrollToBottom() {
    setTimeout(() => {
        chatFeed.scrollTo({
            top: chatFeed.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

function adjustTextareaHeight() {
    inputField.style.height = 'auto';
    inputField.style.height = (inputField.scrollHeight) + 'px';
}
inputField.addEventListener('input', adjustTextareaHeight);

function getCurrentTimeStr() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function updateTracker(stepId, state, description) {
    const el = document.querySelector(`.step[data-step="${stepId}"]`);
    if (!el) return;
    el.className = `step step-${state}`;
    if (description) {
        el.querySelector('.step-description').textContent = description;
    }
}

function appendUserMessage(text) {
    if(introScreen) introScreen.style.display = 'none';
    
    const div = document.createElement('div');
    div.className = 'message-row user-row';
    const timeStr = getCurrentTimeStr();
    
    div.innerHTML = `
        <div class="user-message-wrapper" style="width: 100%; justify-content: flex-end;">
            <div class="user-content-column">
                <div class="user-bubble">
                    <span class="bubble-text">${text.replace(/\n/g, '<br>')}</span>
                    <div class="bubble-edit-container" style="display:none;">
                        <textarea class="bubble-edit-input">${text}</textarea>
                        <div class="edit-action-group">
                            <button class="btn-edit-cancel">Cancel</button>
                            <button class="btn-edit-save">Save & Submit</button>
                        </div>
                    </div>
                </div>
                <div class="user-actions">
                    <span class="user-edit-btn" style="cursor: pointer;"><i class="fa-solid fa-pen"></i> Edit</span>
                    <span class="remember-action" style="cursor: pointer;"><i class="fa-regular fa-heart"></i> Remember this</span>
                    <span class="user-time" style="color: var(--text-muted);">${timeStr}</span>
                </div>
            </div>
            <div class="user-info-column">
                <div class="user-avatar-mini"><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
    `;
    chatFeed.appendChild(div);
    scrollToBottom();
    
    const rememberBtn = div.querySelector('.remember-action');
    if (rememberBtn) {
        rememberBtn.addEventListener('click', () => {
            if(modalOverlay) modalOverlay.classList.add('active');
        });
    }

    const editBtn = div.querySelector('.user-edit-btn');
    const bubbleTextSpan = div.querySelector('.bubble-text');
    const editContainer = div.querySelector('.bubble-edit-container');
    const bubbleEditInput = div.querySelector('.bubble-edit-input');
    const btnCancel = div.querySelector('.btn-edit-cancel');
    const btnSave = div.querySelector('.btn-edit-save');
    const userBubble = div.querySelector('.user-bubble');
    const userActions = div.querySelector('.user-actions');

    if (editBtn) {
        editBtn.addEventListener('click', () => {
            bubbleTextSpan.style.display = 'none';
            userActions.style.display = 'none';
            editContainer.style.display = 'block';
            userBubble.classList.add('is-editing');
            
            bubbleEditInput.style.height = 'auto';
            bubbleEditInput.style.height = (bubbleEditInput.scrollHeight) + 'px';
            bubbleEditInput.focus();
            
            // Move cursor to end
            const val = bubbleEditInput.value;
            bubbleEditInput.value = '';
            bubbleEditInput.value = val;
        });

        let currentText = text;
        
        const closeEdit = () => {
            editContainer.style.display = 'none';
            bubbleTextSpan.style.display = 'block';
            userActions.style.display = 'flex';
            userBubble.classList.remove('is-editing');
        };

        const saveEdit = () => {
            const newVal = bubbleEditInput.value.trim();
            if(!newVal) {
                closeEdit();
                return;
            }
            bubbleTextSpan.innerHTML = newVal.replace(/\n/g, '<br>');
            closeEdit();

            if (newVal !== currentText && appState !== "START") {
                currentText = newVal;
                appendAIMessageRAW(`<em>Changes detected. Regenerating pipeline from query modification...</em>`);
                appState = "STAGE2";
                updateTracker(2, 'ai-suggested', 'Regenerating Proposal');
                updateTracker(3, 'pending', 'Pending');
                updateTracker(4, 'pending', 'Pending');
                updateTracker(5, 'pending', 'Pending');
                setTimeout(() => simulateHITLResponse(2), 1500);
            }
        };

        btnSave.addEventListener('click', saveEdit);
        btnCancel.addEventListener('click', () => {
            bubbleEditInput.value = currentText;
            closeEdit();
        });

        bubbleEditInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                saveEdit();
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                bubbleEditInput.value = currentText;
                closeEdit();
            }
        });
        
        bubbleEditInput.addEventListener('input', () => {
            bubbleEditInput.style.height = 'auto';
            bubbleEditInput.style.height = (bubbleEditInput.scrollHeight) + 'px';
        });
    }
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'message-row ai typing-row';
    div.innerHTML = `
        <div class="ai-icon"><i class="fa-solid fa-robot"></i></div>
        <div class="ai-content">
            <div class="typing-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    chatFeed.appendChild(div);
    scrollToBottom();
    return div;
}

function appendAIMessage(htmlContent, isCardOverride = false, showFeedback = false) {
    const div = document.createElement('div');
    div.className = 'message-row ai';
    const timeStr = getCurrentTimeStr();
    
    const overrideClass = isCardOverride ? "hitl-override" : "";

    div.innerHTML = `
        <div class="ai-icon"><i class="fa-solid fa-robot"></i></div>
        <div class="ai-content">
            <div class="ai-header-info">
                <span>Code Assistant</span>
                <span class="ai-badge"><i class="fa-solid fa-microchip"></i> agent</span>
                <span class="ai-time">${timeStr}</span>
            </div>
            <div class="ai-bubble ${overrideClass}">
                ${htmlContent}
            </div>
            ${showFeedback ? `
            <div class="ai-feedback">
                <button class="thumb-btn"><i class="fa-solid fa-thumbs-up" style="color:var(--color-yellow);"></i> 1</button>
            </div>
            ` : ''}
        </div>
    `;
    chatFeed.appendChild(div);
    
    div.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
    scrollToBottom();
}

function classifyIntent(query) {
    const q = query.toLowerCase();
    if (q.includes('retention') || q.includes('bring back') || q.includes('return') || q.includes('stick')) return 'RETENTION';
    if (q.includes('unique') || q.includes('dau') || q.includes('mau')) return 'UNIQUE_USERS';
    if (q.includes('engage') || q.includes('session') || q.includes('time spent')) return 'ENGAGEMENT';
    if (q.includes('convers') || q.includes('convert') || q.includes('rate')) return 'CONVERSION';
    if (q.includes('funnel') || q.includes('drop') || q.includes('churn')) return 'FUNNEL';
    if (q.includes('feature') || q.includes('use') || q.includes('click')) return 'FEATURE_USAGE';
    if (q.includes('revenu') || q.includes('monetiz') || q.includes('purchas') || q.includes('buy') || q.includes('paid') || q.includes('spend')) return 'REVENUE';
    if (q.includes('cohort') || q.includes('group')) return 'COHORT';
    return 'UNSURE';
}

function getEventMapping(intent) {
    const mappings = {
        'RETENTION': {
            title: 'For retention analysis, these events are typically used:',
            recommended: ['GameExited'],
            alternative: ['AppLaunch'],
            reason: 'Retention measures whether users return after a time gap.\nSo we track a "return action" event such as GameExited or AppLaunch.'
        },
        'UNIQUE_USERS': {
            title: 'For unique users analysis, these events are typically used:',
            recommended: ['AppLaunch'],
            alternative: ['FirstOpen', 'LoginComplete'],
            reason: 'Unique users analysis counts participation.\nWe track broad entry events to see who was active.'
        },
        'ENGAGEMENT': {
            title: 'For engagement analysis, these events are typically used:',
            recommended: ['SessionStart', 'SessionEnd'],
            alternative: ['Heartbeat'],
            reason: 'Engagement defines activity boundaries.\nWe look at session start or end events to measure time spent.'
        },
        'CONVERSION': {
            title: 'For conversion analysis, these events are typically used:',
            recommended: ['CheckOutStarted', 'PurchaseComplete'],
            alternative: ['LevelStarted', 'LevelCompleted'],
            reason: 'Conversion tracks movement between steps.\nWe monitor the starting action and the final goal.'
        },
        'FUNNEL': {
            title: 'For funnel analysis, these events are typically used:',
            recommended: ['TutorialStarted', 'TutorialStep', 'TutorialCompleted'],
            alternative: ['ScreenViewed'],
            reason: 'Funnels track progression and drop-offs.\nWe look at a sequence of events to see where users leave.'
        },
        'FEATURE_USAGE': {
            title: 'For feature usage analysis, these events are typically used:',
            recommended: ['FeatureOpened'],
            alternative: ['ButtonClicked'],
            reason: 'Feature usage measures engagement with specific tools.\nWe track exact interaction events.'
        },
        'REVENUE': {
            title: 'For revenue analysis, these events are typically used:',
            recommended: ['Purchase'],
            alternative: ['SubscriptionStarted'],
            reason: 'Revenue analysis is tied to monetization.\nWe track proven transaction events.'
        },
        'COHORT': {
            title: 'For cohort analysis, these events are typically used:',
            recommended: ['InstallEvent', 'GameExited'],
            alternative: ['FirstPurchase', 'GameExited'],
            reason: 'Cohort analysis defines a group and their behavior over time.\nWe need a starting event and a tracking event.'
        },
        'UNSURE': {
            title: 'We’re not fully confident about the event selection.\nHere are possible options:',
            options: ['AppLaunch', 'GameExited', 'Purchase', 'SessionStart'],
            reason: 'Your query didn\'t strongly match a standard category, so we are suggesting a mix of common events.'
        }
    };
    return mappings[intent] || mappings['UNSURE'];
}

function simulateHITLResponse(stageNumber) {
    const typingRow = showTypingIndicator();
    let htmlContent = '';
    
    setTimeout(() => {
        typingRow.remove();
        
        if (stageNumber === 1) {
            const intent = classifyIntent(lastUserQuery);
            const mapping = getEventMapping(intent);
            
            if (intent === 'UNSURE') {
                htmlContent = `
                    <p>${mapping.title.replace('\n', '<br>')}</p>
                    <div class="quick-select-group" style="margin-top: 12px; margin-bottom: 12px;">
                        ${mapping.options.map(o => `<button class="btn-quick-select s1-alt-btn">${o}</button>`).join('')}
                    </div>
                `;
            } else {
                lastRecommendedEvents = mapping.recommended;
                htmlContent = `
                    <p>${mapping.title}</p>
                    <ul style="margin: 12px 0 16px 20px; line-height: 1.6; color: var(--text-primary); list-style: none; padding-left: 0;">
                        ${mapping.recommended.map(r => `<li style="margin-bottom: 8px;"><span style="display:inline-block; padding: 2px 8px; border-radius: 4px; background: rgba(16,185,129,0.1); color: var(--color-green); font-size: 0.75rem; font-weight: 600; margin-right: 8px;">Recommended</span> <strong style="font-family: var(--font-mono);">${r}</strong></li>`).join('')}
                        ${mapping.alternative.map(a => `<li style="margin-bottom: 8px;"><span style="display:inline-block; padding: 2px 8px; border-radius: 4px; background: rgba(100,116,139,0.1); color: var(--text-muted); font-size: 0.75rem; font-weight: 600; margin-right: 8px;">Alternative</span> <span style="font-family: var(--font-mono);">${a}</span></li>`).join('')}
                    </ul>
                    
                    <details class="why-this" style="margin-top: 12px; margin-bottom: 12px;">
                        <summary><i class="fa-solid fa-lightbulb"></i> Reason</summary>
                        <div class="details-content">${mapping.reason.replace('\n', '<br>')}</div>
                    </details>
                    
                    <div class="action-group-chat" style="gap: 12px; align-items: center; flex-wrap: wrap;">
                        <button class="btn-approve s1-approve">Approve Recommended</button>
                        <div class="project-dropdown-container" style="display: inline-block;">
                            <button class="btn-edit" onclick="const m = this.nextElementSibling; m.style.display = m.style.display === 'none' ? 'block' : 'none'">Select Alternative <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; margin-left: 4px;"></i></button>
                            <div class="dropdown-menu" style="display: none; min-width: 150px; bottom: 100%; top: auto; margin-bottom: 4px; z-index: 100;">
                                ${mapping.alternative.map(a => `<div class="dropdown-item s1-select-alt">${a}</div>`).join('')}
                            </div>
                        </div>
                        <button class="btn-edit s1-edit-manual">Edit Manually</button>
                        <button class="btn-edit s1-ask-ai" style="border: 1px solid var(--accent-purple); color: var(--accent-purple); border-radius: 6px;"><i class="fa-solid fa-sparkles"></i> Explain more</button>
                    </div>
                    <div class="explain-more-content" style="display: none; margin-top: 12px; padding: 12px; background: var(--bg-main); border-radius: var(--radius-md); font-size: 0.85rem; color: var(--text-secondary); border: 1px solid var(--border-color); animation: fadeIn 0.3s ease;">
                        We selected these events based on industry standards for analyzing this type of user behavior. These events strongly correlate with standard lifecycle benchmarks.
                    </div>
                `;
            }
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'ask_time') {
            htmlContent = `
                <p>Great. Now, please select the <strong>start and end date</strong> for your analysis.</p>
                <div class="structured-form" style="margin-top: 12px; margin-bottom: 12px; max-width: 320px;">
                    <div class="form-row">
                        <span class="form-label">Start Date</span>
                        <input type="date" id="time-start-date" class="editable-input">
                    </div>
                    <div class="form-row" style="margin-top: 8px;">
                        <span class="form-label">End Date</span>
                        <input type="date" id="time-end-date" class="editable-input">
                    </div>
                    <button class="btn-primary" id="time-submit-btn" style="margin-top: 12px; width: 100%;">Apply Time Range</button>
                </div>
            `;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'hardcode_game') {
            htmlContent = `<p>I couldn't find the game referenced (e.g. "CS"). Which game do you mean?</p>`;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'hardcode_time') {
            htmlContent = `<p>Got it. What time range would you like to analyze?</p>`;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'hardcode_boundary') {
            htmlContent = `
                <p>Is this the start date or the end date?</p>
                <div class="action-group-chat" style="gap:12px; align-items:center;">
                    <button class="btn-approve mock-start-date">Start Date</button>
                    <button class="btn-edit mock-end-date">End Date</button>
                </div>
            `;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'hardcode_end') {
            htmlContent = `<p>Understood. And what is the end date?</p>`;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 'hardcode_start') {
            htmlContent = `<p>Understood. And what is the start date?</p>`;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 2) {
            htmlContent = `
                <p>I suggest using the <strong>GameExited</strong> event.</p>
                <details class="why-this" style="margin-top: 8px; margin-bottom: 12px;">
                    <summary><i class="fa-solid fa-lightbulb"></i> Why this?</summary>
                    <div class="details-content">GameExited uniformly captures the end of the first session, which is statistically the most robust baseline initialization metric for tracking new cohorts in this datalake.</div>
                </details>
                
                <div class="meta-badge conf-high" style="display:inline-flex; margin-bottom: 12px;">Confidence: High</div>
                
                <div class="action-group-chat">
                    <button class="btn-approve s2-approve">Approve</button>
                    <button class="btn-edit">Edit</button>
                    <button class="btn-reject">Reject</button>
                </div>
            `;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 3) {
            const eventName = (lastRecommendedEvents && lastRecommendedEvents.length > 0) ? lastRecommendedEvents[0] : 'GameExited';
            htmlContent = `
                <p>Here is the validation configuration for your technical query:</p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.6; color: var(--text-primary);">
                    <li><strong>Event:</strong> ${eventName}</li>
                    <li><strong>Time Range:</strong> ${lastTimeRange}</li>
                    <li><strong>Cohort:</strong> All Users</li>
                </ul>
                
                <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                    <span class="meta-badge review-needed"><i class="fa-solid fa-triangle-exclamation"></i> Review before execution</span>
                    <span class="meta-badge" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-secondary);">Confidence: 92%</span>
                </div>

                <div class="action-group-chat">
                    <button class="btn-approve s3-approve">Approve & Execute</button>
                    <button class="btn-edit">Edit settings</button>
                    <button class="btn-reject">Reject design</button>
                </div>
            `;
            appendAIMessage(htmlContent, false);
        }
        else if (stageNumber === 4) {
             const eventName = (lastRecommendedEvents && lastRecommendedEvents.length > 0) ? lastRecommendedEvents[0] : 'GameExited';
             const jqlCode = `function main() {
  return Events({
    from_date: "/* ${lastTimeRange} */", 
    to_date: "/* ${lastTimeRange} */",
    event_selectors: [{
      event: "${eventName}"
    }]
  })
}`;
            htmlContent = `
                <p><strong>Analysis Complete</strong></p>
                <p style="margin-top: 8px;">The correlation coefficient between D1 and D7 retention is <strong>0.84</strong>.</p>
                <p style="margin-top: 8px; color: var(--text-secondary);">Insight: Users who survive day 1 are highly likely to stick around by day 7.</p>
                
                <div class="code-container" style="margin-top: 12px; margin-bottom: 12px;">
                    <div class="code-header">
                        <span>javascript</span>
                        <span style="cursor: pointer;"><i class="fa-regular fa-copy"></i> Copy</span>
                    </div>
                    <pre><code class="language-javascript">${jqlCode}</code></pre>
                </div>
                
                <div class="action-group-chat" style="flex-direction: column; gap: 8px;">
                    <div class="meta-badge conf-high" style="display:inline-flex;">Confidence: 95%</div>
                    <details class="debug-details debug-full" style="margin-top: 4px;">
                        <summary>View Developer Telemetry <i class="fa-solid fa-code"></i></summary>
                        <div class="details-content" style="font-family: var(--font-mono); font-size: 0.75rem;">
                            <div><strong>Model:</strong> GPT-4</div>
                            <div><strong>Tokens:</strong> 340</div>
                            <div><strong>Latency:</strong> 1.2s</div>
                            <div><strong>Execution Steps:</strong></div>
                            <div>1. Query mapped visually via UI form.<br>2. Transformed to native JQL syntax.<br>3. Correlated retention arrays over 120k records.</div>
                        </div>
                    </details>
                </div>
            `;
            appendAIMessage(htmlContent, false, true);
            updateTracker(5, 'completed', 'Analysis Complete');
        }
    }, 1500);
}

// ---------------------------
// Strict State Machine router
// ---------------------------
function handleSend() {
    const val = inputField.value.trim();
    if (!val) return;
    
    lastUserQuery = val;
    appendUserMessage(val);
    inputField.value = '';
    inputField.style.height = 'auto';
    
    if (appState === "START") {
        updateTracker(1, 'completed', 'Query received');
        lastTimeRange = "Past 30 Days";
        if (hardcodeMode) {
            updateTracker(2, 'needs-approval', 'Game Clarification');
            appState = "HARDCODE_GAME";
            simulateHITLResponse('hardcode_game');
            hardcodeMode = false; // Only once
        } else {
            updateTracker(2, 'needs-approval', 'Event Selection');
            appState = "STAGE1";
            simulateHITLResponse(1);
        }
    } 
    else if (appState === "HARDCODE_GAME") {
        updateTracker(2, 'needs-approval', 'Time Range Clarification');
        appState = "HARDCODE_TIME";
        simulateHITLResponse('hardcode_time');
    }
    else if (appState === "HARDCODE_TIME") {
        tempDateInput = val; 
        updateTracker(2, 'needs-approval', 'Time Bound Clarification');
        appState = "HARDCODE_BOUNDARY";
        simulateHITLResponse('hardcode_boundary');
    }
    else if (appState === "HARDCODE_END") {
        lastTimeRange = `${tempDateInput} to ${val}`;
        updateTracker(2, 'needs-approval', 'Event Selection');
        appState = "STAGE1";
        if (!lastUserQuery.toLowerCase().includes('retention') && !lastUserQuery.toLowerCase().includes('d7')) {
            lastUserQuery = "Give me D7 retention for Critical Strike"; 
        }
        simulateHITLResponse(1);
    }
    else if (appState === "HARDCODE_START") {
        lastTimeRange = `${val} to ${tempDateInput}`;
        updateTracker(2, 'needs-approval', 'Event Selection');
        appState = "STAGE1";
        if (!lastUserQuery.toLowerCase().includes('retention') && !lastUserQuery.toLowerCase().includes('d7')) {
            lastUserQuery = "Give me D7 retention for Critical Strike"; 
        }
        simulateHITLResponse(1);
    }
    else if (appState === "AWAIT_MANUAL_EVENT") {
        lastRecommendedEvents = [val];
        appState = "ASK_TIME";
        updateTracker(2, 'ai-suggested', 'Time Range Selection');
        simulateHITLResponse('ask_time');
    }
    else if (appState === "ASK_TIME") {
        lastTimeRange = val;
        updateTracker(2, 'needs-approval', 'Validation Configured');
        appState = "STAGE3";
        simulateHITLResponse(3);
    }
    else if (appState === "STAGE1") {
        lastRecommendedEvents = [val];
        appState = "ASK_TIME";
        updateTracker(2, 'ai-suggested', 'Time Range Selection');
        simulateHITLResponse('ask_time');
    }
}

// Delegate button clicks for AI hitl cards universally
chatFeed.addEventListener('click', (e) => {
    // Hardcode flow boundary buttons
    if (e.target.closest('.mock-start-date')) {
        appendUserMessage("Start Date");
        appState = "HARDCODE_END";
        updateTracker(2, 'needs-approval', 'Time Bound Clarification');
        simulateHITLResponse('hardcode_end');
        return;
    }
    if (e.target.closest('.mock-end-date')) {
        appendUserMessage("End Date");
        appState = "HARDCODE_START";
        updateTracker(2, 'needs-approval', 'Time Bound Clarification');
        simulateHITLResponse('hardcode_start');
        return;
    }

    // Time Select Action Form Submit
    if (e.target.closest('#time-submit-btn')) {
        const start = document.getElementById('time-start-date').value;
        const end = document.getElementById('time-end-date').value;
        if (!start || !end) return;

        const val = `${start} to ${end}`;
        appendUserMessage(val);
        lastTimeRange = val;
        appState = "STAGE3";
        updateTracker(2, 'needs-approval', 'Validation Configured');
        simulateHITLResponse(3);
        return;
    }

    // Legacy mapping support for alt uncatched buttons inside quick select
    if (e.target.closest('.s1-alt-btn')) {
        const val = e.target.textContent;
        lastRecommendedEvents = [val];
        appendUserMessage(`Selected: ${val}`);
        if (lastTimeRange !== "Past 30 Days") {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Validation Configured');
            simulateHITLResponse(3);
        } else {
            appState = "ASK_TIME";
            updateTracker(2, 'ai-suggested', 'Time Range Selection');
            simulateHITLResponse('ask_time');
        }
        return;
    }

    if (e.target.closest('.s1-approve')) {
        appendUserMessage(`Approved Recommended: ${lastRecommendedEvents.join(', ')}`);
        if (lastTimeRange !== "Past 30 Days") {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Validation Configured');
            simulateHITLResponse(3);
        } else {
            appState = "ASK_TIME";
            updateTracker(2, 'ai-suggested', 'Time Range Selection');
            simulateHITLResponse('ask_time');
        }
        return;
    }

    if (e.target.closest('.s1-select-alt')) {
        const val = e.target.textContent;
        lastRecommendedEvents = [val];
        // Hide dropdown
        const menu = e.target.closest('.dropdown-menu');
        if(menu) menu.style.display = 'none';
        appendUserMessage(`Selected Alternative: ${val}`);
        if (lastTimeRange !== "Past 30 Days") {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Validation Configured');
            simulateHITLResponse(3);
        } else {
            appState = "ASK_TIME";
            updateTracker(2, 'ai-suggested', 'Time Range Selection');
            simulateHITLResponse('ask_time');
        }
        return;
    }

    if (e.target.closest('.s1-edit-manual')) {
        appendUserMessage(`Edit Manually`);
        appendAIMessageRAW(`<p>Please type the exact event name(s) you would like to use.</p>`);
        appState = "AWAIT_MANUAL_EVENT";
        return;
    }

    if (e.target.closest('.s1-ask-ai')) {
        const btn = e.target.closest('.s1-ask-ai');
        const container = btn.closest('.action-group-chat');
        if (container && container.nextElementSibling && container.nextElementSibling.classList.contains('explain-more-content')) {
            const content = container.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
                btn.style.backgroundColor = 'var(--lt-bg-active)';
            } else {
                content.style.display = 'none';
                btn.style.backgroundColor = 'transparent';
            }
        }
        return;
    }

    // Stage 1: Quick select inputs (legacy fallback)
    if (e.target.closest('.btn-quick-select') && !e.target.classList.contains('s1-alt-btn') && !e.target.classList.contains('time-select-btn')) {
        const val = e.target.textContent;
        lastRecommendedEvents = [val];
        appendUserMessage(val);
        if (lastTimeRange !== "Past 30 Days") {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Validation Configured');
            simulateHITLResponse(3);
        } else {
            appState = "ASK_TIME";
            updateTracker(2, 'ai-suggested', 'Time Range Selection');
            simulateHITLResponse('ask_time');
        }
    }
    
    // Stage 2: Approve Action (Legacy)
    if (e.target.closest('.s2-approve')) {
        appendUserMessage("Approve Suggestion");
        if (lastTimeRange !== "Past 30 Days") {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Validation Configured');
            simulateHITLResponse(3);
        } else {
            appState = "ASK_TIME";
            updateTracker(2, 'ai-suggested', 'Time Range Selection');
            simulateHITLResponse('ask_time');
        }
    }
    
    // Stage 3: Approve Execution
    if (e.target.closest('.s3-approve')) {
        appendUserMessage("Approve Execution");
        appState = "STAGE4";
        updateTracker(2, 'completed', 'Transformation Done');
        
        // Simulate Data Extraction timeframe
        updateTracker(3, 'ai-suggested', 'Extracting Data...');
        setTimeout(() => {
            updateTracker(3, 'completed', 'Data Extracted');
            
            // Simulate Data Processing timeframe
            updateTracker(4, 'ai-suggested', 'Processing Data...');
            setTimeout(() => {
                updateTracker(4, 'completed', 'Data Processed');
                updateTracker(5, 'ai-suggested', 'Generating Output...');
                
                // Trigger the final simulated chatbot message
                simulateHITLResponse(4);
            }, 1500); // 1.5s for processing
            
        }, 1500); // 1.5s for extraction
    }

    // Cascading Edits / Rejects functionality
    if (e.target.closest('.btn-reject') || e.target.closest('.btn-edit')) {
        // Find which stage this button belongs to by checking the HTML content implicitly
        // Since we removed hitl-card wrapper, we can check the button class to deduce
        let stageNum = 0;
        if (e.target.closest('.s2-approve') || e.target.closest('.action-group-chat').querySelector('.s2-approve')) stageNum = 2;
        if (e.target.closest('.s3-approve') || e.target.closest('.action-group-chat').querySelector('.s3-approve')) stageNum = 3;
        
        if (stageNum === 0) return; // safety
        
        appendAIMessageRAW(`<em>Changes detected. Regenerating pipeline from stage ${stageNum}...</em>`);
        
        // Reset Logic
        if (stageNum === 2) {
            appState = "STAGE2";
            updateTracker(2, 'ai-suggested', 'Regenerating Proposal');
            updateTracker(3, 'pending', 'Pending');
            updateTracker(4, 'pending', 'Pending');
            updateTracker(5, 'pending', 'Pending');
            setTimeout(() => simulateHITLResponse(2), 1500);
        }
        else if (stageNum === 3) {
            appState = "STAGE3";
            updateTracker(2, 'needs-approval', 'Regenerating Validation Rules');
            updateTracker(3, 'pending', 'Pending');
            updateTracker(4, 'pending', 'Pending');
            updateTracker(5, 'pending', 'Pending');
            setTimeout(() => simulateHITLResponse(3), 1500);
        }
    }
});

function appendAIMessageRAW(htmlContent) {
    appendAIMessage(htmlContent, false);
}

// Root listeners
sendBtn.addEventListener('click', handleSend);
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

// Remember this Handlers 
document.getElementById('close-modal-btn')?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});
document.getElementById('cancel-learning')?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});
document.getElementById('confirm-learning')?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    updateTracker(5, 'needs-approval', 'Submitting feedback...');
    setTimeout(() => {
        updateTracker(5, 'completed', 'Feedback requested');
    }, 1000);
});

window.addEventListener('load', () => {
    inputField.focus();
});
