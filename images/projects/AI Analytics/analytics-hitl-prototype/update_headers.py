import re

html_path = 'case-study.html'
with open(html_path, 'r') as f:
    html = f.read()

def replace_h2(html, section_id, new_label, new_statement):
    pattern = r'(<section[^>]*id="' + re.escape(section_id) + r'"[^>]*>)\s*<h2 class="section-title">.*?</h2>'
    replacement = r'\1\n                <div class="section-header">\n                    <span class="section-label">' + new_label + r'</span>\n                    <h2 class="section-statement">' + new_statement + r'</h2>\n                </div>'
    
    if re.search(pattern, html):
        html = re.sub(pattern, replacement, html, count=1)
        print(f"Replaced {section_id}")
    else:
        print(f"NOT FOUND: {section_id}")
    return html

ctx_pattern = r'(<section class="section" id="context"[^>]*>)'
ctx_repl = r'\1\n                <div class="section-header" style="text-align: center; margin-bottom: 2rem;">\n                    <span class="section-label">Context</span>\n                    <h2 class="section-statement" style="margin: 0 auto;">A fast-moving team making slow decisions</h2>\n                </div>'
html = re.sub(ctx_pattern, ctx_repl, html, count=1)

updates = [
    ("problem", "The Translation Problem", "The problem wasn’t data. It was translation."),
    ("who-is-this-for", "Who is this for", "People making decisions under uncertainty"),
    ("reframing", "Reframing the Challenge", "The system wasn’t failing. It was working — incorrectly."),
    ("the-idea", "The Idea (Ask → Understand → Act)", "From questions to decisions — without losing intent"),
    ("system-design", "System Architecture", "A pipeline where every step is visible, validated, and editable"),
    ("behavior-change", "System in Motion", "What looks simple is a deeply governed system underneath"),
    ("ux-architecture", "AI UX Principles", "Designing for AI that can be wrong — safely"),
    ("hitl", "Human-in-the-loop", "Humans don’t assist the system. They validate it."),
    ("impact", "Impact", "From blocked insights to real-time, trusted decisions"),
    ("explainability", "Known Gaps", "What still breaks — and why it matters"),
    ("learnings", "Key Learnings", "Designing for AI is designing for uncertainty"),
    ("final-pov", "Final POV", "AI shouldn’t replace thinking. It should make thinking safer.")
]

for section_id, label, statement in updates:
    html = replace_h2(html, section_id, label, statement)

with open(html_path, 'w') as f:
    f.write(html)
