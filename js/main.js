// ==========================================================================
// Sangavi C - Portfolio Main Script
// Interactive Agentic AI Visualizations, Theme Toggle, & UX Micro-Interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Theme Toggle (Dark Mode default for high-end AI engineering aesthetic)
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
        updateThemeIcon(false);
    } else {
        htmlElement.classList.add('dark');
        updateThemeIcon(true);
    }

    function toggleTheme() {
        const isDark = htmlElement.classList.toggle('dark');
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

    function updateThemeIcon(isDark) {
        const sunIcons = [document.getElementById('theme-sun-icon'), document.getElementById('mobile-sun-icon')];
        const moonIcons = [document.getElementById('theme-moon-icon'), document.getElementById('mobile-moon-icon')];
        
        sunIcons.forEach(icon => {
            if (icon) {
                if (isDark) icon.classList.remove('hidden');
                else icon.classList.add('hidden');
            }
        });

        moonIcons.forEach(icon => {
            if (icon) {
                if (isDark) icon.classList.add('hidden');
                else icon.classList.remove('hidden');
            }
        });
    }

    // 3. Mobile Menu Toggle with Hamburger <-> Close Icon Animation
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            if (hamburgerIcon && closeIcon) {
                if (!isHidden) {
                    hamburgerIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    hamburgerIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (hamburgerIcon && closeIcon) {
                    hamburgerIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        });
    }

    // 4. Hero Code / Agent Terminal Tab Switching
    const terminalTabs = document.querySelectorAll('.terminal-tab-btn');
    const terminalCodeBody = document.getElementById('terminal-code-body');

    const terminalSnippets = {
        'profile': `<pre><code><span class="token-keyword">const</span> <span class="token-function">engineerProfile</span> <span class="token-keyword">=</span> {
  <span class="token-property">name</span>: <span class="token-string">"Sangavi C"</span>,
  <span class="token-property">role</span>: <span class="token-string">"Software Development Engineer – AI"</span>,
  <span class="token-property">experience</span>: <span class="token-badge">"2.5+ Years"</span>,
  <span class="token-property">company</span>: <span class="token-string">"HashedIn by Deloitte"</span>,
  <span class="token-property">location</span>: <span class="token-string">"Bengaluru, India"</span>,

  <span class="token-property">specialization</span>: [
    <span class="token-string">"Multi-Agent Orchestration (Google ADK, LangGraph)"</span>,
    <span class="token-string">"Autonomous Systems & Model Context Protocol (MCP)"</span>,
    <span class="token-string">"LLM-as-a-Judge Evaluation & RAG"</span>,
    <span class="token-string">"Distributed Event-Driven Backends (Kafka, FastAPI)"</span>,
    <span class="token-string">"Streaming UI & Full-Stack Systems (React, Angular)"</span>
  ],

  <span class="token-property">leadership</span>: <span class="token-string">"Led team of 5 engineers through design & production rollout"</span>,
  <span class="token-property">impact</span>: <span class="token-string">"95% manual effort cut | 94% evaluation accuracy | 3x Awards"</span>
};</code></pre>`,

        'pipeline': `<pre><code><span class="token-comment">// Live Agent Orchestrator Trace [Google ADK + RAG]</span>
<span class="token-function">[Orchestrator]</span> Input: "Analyze EU AI Act Art. 14 High-Risk Human Oversight"
<span class="token-function">[Discovery-Agent]</span> Scanning 40+ regulatory feeds via Vector Store...
  <span class="token-keyword">↳ Found</span> 3 clauses in pgvector (similarity: 0.941, citation: "Art. 14(4)(b)")
<span class="token-function">[Compliance-Agent]</span> Executing tool <span class="token-property">gap_assessment_tool()</span>...
  <span class="token-keyword">↳ Output Schema:</span> { riskLevel: "HIGH", requiresHITL: true }
<span class="token-function">[QA-Agent (LLM-as-Judge)]</span> Verifying findings against cited legal text...
  <span class="token-keyword">↳ Factuality Score:</span> <span class="token-string">94.8% (Grounding PASS)</span>
<span class="token-function">[HITL-Gateway]</span> Dispatching approval gate to Analyst Review Screen...
  <span class="token-badge">● STATUS: Awaiting Human Authorization [APPROVE / EDIT / REJECT]</span></code></pre>`,

        'controlplane': `<pre><code><span class="token-comment">// Distributed Multi-Agent Control Plane (AWS Bedrock + Kafka + MCP)</span>
<span class="token-keyword">service</span> <span class="token-function">AgentControlPlane</span> {
  <span class="token-property">protocol</span>: <span class="token-string">"Agent-to-Agent (A2A) Discovery v2"</span>,
  <span class="token-property">toolRegistry</span>: <span class="token-string">"Model Context Protocol (MCP) @ DynamoDB"</span>,
  <span class="token-property">eventBus</span>: <span class="token-string">"Apache Kafka Topic: agent.events.domain"</span>,
  <span class="token-property">runtime</span>: <span class="token-string">"AWS Bedrock Claude 3.5 Sonnet + Lambda Workers"</span>,

  <span class="token-property">resiliency</span>: {
    <span class="token-property">retryBackoff</span>: <span class="token-string">"Exponential with Jitter"</span>,
    <span class="token-property">failureReduction</span>: <span class="token-badge">"-30% task dropouts"</span>,
    <span class="token-property">asyncExecution</span>: <span class="token-keyword">true</span>
  }
}</code></pre>`
    };

    terminalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            terminalTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            if (terminalCodeBody && terminalSnippets[target]) {
                terminalCodeBody.innerHTML = terminalSnippets[target];
            }
        });
    });

    // 5. Interactive Multi-Agent Pipeline Simulator Sandbox
    const simScenarios = {
        regulatory: {
            title: "Regulatory Intelligence Platform (Google ADK)",
            stages: [
                { name: "Discovery Agent", detail: "Scraping & pgvector RAG across 40+ regulatory feeds", badge: "Google ADK" },
                { name: "Compliance Agent", detail: "Assessing clause delta, obligations & risks", badge: "FastAPI" },
                { name: "QA Agent (Judge)", detail: "LLM-as-Judge verifying claims vs source citations", badge: "LLM-as-Judge" },
                { name: "HITL Approval", detail: "Human-in-the-loop sign-off before executive reporting", badge: "HITL Gate" }
            ],
            logs: [
                "[12:04:01] [ORCHESTRATOR] Ingested regulatory query: 'Evaluate cross-border AI safety clause'.",
                "[12:04:02] [DISCOVERY AGENT] Queried pgvector index across 40+ regulatory bodies. Retrieved 4 relevant provisions.",
                "[12:04:03] [COMPLIANCE AGENT] Generated structured gap assessment. Estimated impact: Tier 2 Governance requirement.",
                "[12:04:04] [QA AGENT - LLM AS JUDGE] Validating cited clauses. Grounding accuracy score: 94.6% (Verified).",
                "[12:04:05] [HITL GATE] Human Review required. Decision pending analyst confirmation."
            ],
            hitlPrompt: "QA Score 94.6% passed. Approve compliance assessment for regulatory export?",
            resultMetrics: "Turnaround reduced from 5 days → 6 hours (95% manual effort cut)"
        },
        vendor: {
            title: "Agentic Vendor & Expense Platform (BambooHR API)",
            stages: [
                { name: "Invoice Agent", detail: "Extracts vendor line items & validates vs MSA terms", badge: "Vision LLM" },
                { name: "Policy Agent", detail: "Verifies expense receipts vs travel policy limits", badge: "Guardrails" },
                { name: "BambooHR Agent", detail: "Cross-checks timesheets, PTO & project allocation", badge: "BambooHR API" },
                { name: "HITL Gate", detail: "Manager authorization required before financial disbursement", badge: "Human Approval" }
            ],
            logs: [
                "[12:04:01] [ORCHESTRATOR] Received invoice payload: Vendor 'CloudCorp Services' - $12,400.",
                "[12:04:02] [INVOICE AGENT] Parsed 18 line items. All hourly rates conform to Master Services Agreement #901.",
                "[12:04:03] [BAMBOOHR AGENT] Queried BambooHR API: 160 billed hours match engineer timesheet submissions.",
                "[12:04:04] [POLICY AGENT] Verified per-diem policy. No discrepancy detected. 0 policy violations.",
                "[12:04:05] [HITL GATE] Money movement threshold (> $5,000) triggered. Manager sign-off requested."
            ],
            hitlPrompt: "Vendor invoice of $12,400 verified against BambooHR records. Authorize payment?",
            resultMetrics: "Processes 2,000+ requests/month with 70% reduction in processing time."
        },
        swe: {
            title: "Autonomous SWE Platform (LangGraph + Docker)",
            stages: [
                { name: "Planner Agent", detail: "Deconstructs GitHub issue & plans minimal code diff", badge: "LangGraph" },
                { name: "Developer Agent", detail: "Generates code edit in isolated Docker sandbox", badge: "Docker Sandbox" },
                { name: "Tester Agent", detail: "Runs pytest test suite & linter in sandbox", badge: "PyTest" },
                { name: "HITL Gate", detail: "Developer reviews git diff before PR is opened", badge: "GitHub API" }
            ],
            logs: [
                "[12:04:01] [ORCHESTRATOR] Ingested GitHub Issue #108: 'Fix race condition in Bedrock token streamer'.",
                "[12:04:02] [PLANNER AGENT] Retrieved AST context via pgvector. Formulated 3-step patch plan.",
                "[12:04:03] [DEVELOPER AGENT] Spawned Docker sandbox. Modified buffer handling in `streamer.py:L45-L60`.",
                "[12:04:04] [TESTER AGENT] Executed `pytest tests/test_streamer.py`: 14 passed, 0 failed in 1.4s.",
                "[12:04:05] [HITL GATE] Automated PR ready. Awaiting senior developer review to publish branch."
            ],
            hitlPrompt: "All 14 tests passed in Docker sandbox. Open Pull Request to main repository?",
            resultMetrics: "Resolved 32 of 50 test issues autonomously; cut issue-to-PR cycle by 60%."
        }
    };

    let activeSimScenario = 'regulatory';
    let simInterval = null;

    const simSelectBtns = document.querySelectorAll('.sim-scenario-btn');
    const simStagesContainer = document.getElementById('sim-stages-container');
    const simLogOutput = document.getElementById('sim-log-output');
    const simRunBtn = document.getElementById('sim-run-btn');
    const simHitlBox = document.getElementById('sim-hitl-box');
    const simHitlPrompt = document.getElementById('sim-hitl-prompt');
    const simHitlApproveBtn = document.getElementById('sim-hitl-approve');
    const simHitlRejectBtn = document.getElementById('sim-hitl-reject');
    const simMetricsText = document.getElementById('sim-metrics-text');

    function renderSimulator(scenarioKey) {
        activeSimScenario = scenarioKey;
        const data = simScenarios[scenarioKey];
        if (!data) return;

        if (simInterval) clearInterval(simInterval);
        if (simHitlBox) simHitlBox.classList.add('hidden');
        if (simMetricsText) simMetricsText.textContent = data.resultMetrics;

        if (simStagesContainer) {
            simStagesContainer.innerHTML = data.stages.map((st, idx) => `
                <div class="sim-stage-card relative flex flex-col justify-between" id="sim-stage-${idx}">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-mono text-indigo-400 font-semibold">Stage 0${idx + 1}</span>
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${st.badge}</span>
                        </div>
                        <h5 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">${st.name}</h5>
                        <p class="text-xs text-slate-400 leading-snug">${st.detail}</p>
                    </div>
                    <div class="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                        <span class="text-slate-400 sim-status-text">Ready</span>
                        <span class="w-2 h-2 rounded-full bg-slate-600 sim-status-dot"></span>
                    </div>
                </div>
            `).join('');
        }

        if (simLogOutput) {
            simLogOutput.innerHTML = `<span class="text-slate-400">// Select a scenario and click "Run Agent Workflow" to visualize autonomous execution.</span>\n<span class="text-indigo-400">> Scenario loaded: ${data.title}</span>`;
        }
    }

    if (simSelectBtns) {
        simSelectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                simSelectBtns.forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
                btn.classList.add('bg-indigo-600', 'text-white');
                renderSimulator(btn.getAttribute('data-scenario'));
            });
        });
    }

    if (simRunBtn) {
        simRunBtn.addEventListener('click', () => {
            runSimulation();
        });
    }

    function runSimulation() {
        const data = simScenarios[activeSimScenario];
        if (!data) return;

        simRunBtn.disabled = true;
        simRunBtn.classList.add('opacity-50', 'cursor-not-allowed');
        if (simHitlBox) simHitlBox.classList.add('hidden');

        data.stages.forEach((_, idx) => {
            const card = document.getElementById(`sim-stage-${idx}`);
            if (card) {
                card.classList.remove('stage-active', 'stage-complete');
                card.querySelector('.sim-status-text').textContent = 'Waiting';
                card.querySelector('.sim-status-dot').className = 'w-2 h-2 rounded-full bg-slate-600 sim-status-dot';
            }
        });

        if (simLogOutput) {
            simLogOutput.innerHTML = `<span class="text-cyan-400">⚡ Starting Agent Orchestration Pipeline: ${data.title}...</span>\n`;
        }

        let currentStep = 0;
        const totalSteps = data.stages.length;

        simInterval = setInterval(() => {
            if (currentStep < totalSteps) {
                if (currentStep > 0) {
                    const prevCard = document.getElementById(`sim-stage-${currentStep - 1}`);
                    if (prevCard) {
                        prevCard.classList.remove('stage-active');
                        prevCard.classList.add('stage-complete');
                        prevCard.querySelector('.sim-status-text').textContent = 'Completed ✓';
                        prevCard.querySelector('.sim-status-dot').className = 'w-2 h-2 rounded-full bg-emerald-500 sim-status-dot animate-pulse';
                    }
                }

                const currentCard = document.getElementById(`sim-stage-${currentStep}`);
                if (currentCard) {
                    currentCard.classList.add('stage-active');
                    currentCard.querySelector('.sim-status-text').textContent = 'Executing...';
                    currentCard.querySelector('.sim-status-dot').className = 'w-2 h-2 rounded-full bg-indigo-500 sim-status-dot animate-ping';
                }

                if (simLogOutput && data.logs[currentStep]) {
                    simLogOutput.innerHTML += `<div>${data.logs[currentStep]}</div>`;
                    simLogOutput.scrollTop = simLogOutput.scrollHeight;
                }

                currentStep++;
            } else {
                clearInterval(simInterval);
                const finalCard = document.getElementById(`sim-stage-${totalSteps - 1}`);
                if (finalCard) {
                    finalCard.classList.remove('stage-active');
                    finalCard.classList.add('stage-complete');
                    finalCard.querySelector('.sim-status-text').textContent = 'Awaiting HITL';
                    finalCard.querySelector('.sim-status-dot').className = 'w-2 h-2 rounded-full bg-amber-500 sim-status-dot animate-pulse';
                }

                if (simHitlBox && simHitlPrompt) {
                    simHitlPrompt.textContent = data.hitlPrompt;
                    simHitlBox.classList.remove('hidden');
                }

                simRunBtn.disabled = false;
                simRunBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }, 700);
    }

    if (simHitlApproveBtn) {
        simHitlApproveBtn.addEventListener('click', () => {
            if (simLogOutput) {
                simLogOutput.innerHTML += `<div class="text-emerald-400 font-bold">✓ [HUMAN APPROVAL GRANTED] Workflow dispatched successfully. Production records committed.</div>`;
                simLogOutput.scrollTop = simLogOutput.scrollHeight;
            }
            if (simHitlBox) simHitlBox.classList.add('hidden');
            showToast("HITL Approval Granted: Action executed in production!");
        });
    }

    if (simHitlRejectBtn) {
        simHitlRejectBtn.addEventListener('click', () => {
            if (simLogOutput) {
                simLogOutput.innerHTML += `<div class="text-rose-400 font-bold">✕ [HUMAN REJECTED] Action aborted. Reason logged for model reinforcement learning.</div>`;
                simLogOutput.scrollTop = simLogOutput.scrollHeight;
            }
            if (simHitlBox) simHitlBox.classList.add('hidden');
            showToast("HITL Action Rejected: Guardrails enforced.");
        });
    }

    renderSimulator('regulatory');

    // 6. Accordion Functionality (Work Experience)
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isExpanded = item.classList.contains('expanded');

            document.querySelectorAll('.accordion-item').forEach(other => {
                other.classList.remove('expanded');
            });

            if (!isExpanded) {
                item.classList.add('expanded');
            }
        });
    });

    // 7. Skills Category Filter
    const skillFilters = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');

    if (skillFilters.length > 0) {
        skillFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                skillFilters.forEach(b => {
                    b.classList.remove('bg-indigo-600', 'text-white', 'active');
                    b.classList.add('text-slate-400');
                });
                btn.classList.add('bg-indigo-600', 'text-white', 'active');
                btn.classList.remove('text-slate-400');

                const filter = btn.getAttribute('data-filter');
                skillCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // 8. Copy Email to Clipboard with Toast Notification
    const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = "sangavikavic@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                showToast("Copied email (sangavikavic@gmail.com) to clipboard!");
            }).catch(() => {
                showToast("Email: sangavikavic@gmail.com");
            });
        });
    });

    function showToast(message) {
        const toast = document.getElementById('toast-notification');
        const toastText = document.getElementById('toast-message');
        if (toast && toastText) {
            toastText.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }
    }

    // 9. Scroll Animation Observer with Generous Margins
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px 150px 0px',
        threshold: 0.02
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        // If element is already within viewport height on load, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
            el.classList.add('in-view');
        } else {
            scrollObserver.observe(el);
        }
    });
});
