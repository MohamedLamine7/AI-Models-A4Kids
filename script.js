const aiModels = [
    {
        name: "ComfyUI",
        price: "$100/mois",
        numericPrice: 100,
        quality: "Logique Pro / ADN Personnage",
        length: "Limité",
        res: "4K+ (Upscale Nodes)",
        method: "Nodes Uniquement",
        pros: "Utilise des Nodes (Noeuds).",
        cons: "Peut être difficile à prendre en main.",
        link: "https://www.comfy.org",
        pricingLink: "https://www.comfy.org/cloud/pricing"
    },
    {
        name: "Freepik Pro",
        price: "$189/mois",
        numericPrice: 189,
        quality: "Design & Vidéo Rapide",
        length: "Accès Premium Illimité",
        res: "4K (Upscalé)",
        method: "Prompt Uniquement",
        pros: "Mode"+ ' "Pikaso" '+ "en Temps Réel.",
        cons: "Mouvements 3D simplistes.",
        link: "https://freepik.com",
        pricingLink: "https://freepik.com/pricing"
    },
{
    name: "Leonardo Maestro",
    price: "$60/mois",
    numericPrice: 60,
    quality: "2D stylisé",
    length: "Illimité (modèles internes uniquement)",
    res: "2K",
    method: "Prompt",
    pros: "Bon pour la production intensive.",
    cons: "Pas illimité pour vidéo / modèles externes.",
    link: "https://leonardo.ai",
    pricingLink: "https://leonardo.ai/pricing"
},
{
    name: "Runway Unlimited",
    price: "$95/mois",
    numericPrice: 95,
    quality: "Vidéo pro",
    length: "Illimité (throttling actif)",
    res: "4K (upsample)",
    method: "Prompt + timeline + nodes",
    pros: "Pipeline complet vidéo.",
    cons: "Ralentissements en usage intensif.",
    link: "https://runwayml.com",
    pricingLink: "https://runwayml.com/pricing"
},
{
    name: "Envato Elements Ultimate",
    price: "$169/mois",
    numericPrice: 169,
    quality: "Toolkit IA + assets",
    length: "Illimité (fair use, très permissif)",
    res: "HD–4K",
    method: "Prompt",
    pros: "Un des seuls vrais 'illimités' utilisables en production.",
    cons: "Qualité vidéo moins cinématique.",
    link: "https://elements.envato.com",
    pricingLink: "https://elements.envato.com/pricing"
},
{
    name: "Kling AI",
    price: "$100/mois",
    numericPrice: 100,
    quality: "Vidéo réaliste",
    length: "Limité (crédits)",
    res: "1080p",
    method: "Prompt",
    pros: "Très bonne qualité vidéo.",
    cons: "PAS illimité.",
    link: "https://klingai.com",
    pricingLink: "https://kling.ai/dev/pricing"
},
{
    name: "Google Veo (AI Ultra)",
    price: "$249.99/mois",
    numericPrice: 249.99,
    quality: "Cinématique réaliste + audio natif",
    length: "LIMITÉ (compute-based)",
    res: "4K natif",
    method: "Prompt",
    pros: "Image ultra réaliste.",
    cons: "Coûteux et très limité en volume.",
    link: "https://deepmind.google/technologies/veo/",
    pricingLink: "https://one.google.com/about/google-ai-plans/"
    
}
];

function render(data) {
    const grid = document.getElementById('model-grid');
    grid.innerHTML = data.map(item => {
        const hasNodes = item.method.includes("Nodes");
        const hasPrompt = item.method.includes("Prompt");
        
        
        // let bgClass = (hasNodes && hasPrompt) ? "bg-hybrid" : (hasNodes ? "bg-nodes-only" : "bg-prompt-only");
        // let nodeIcon = hasNodes ? '<span class="icon-node"><img src="nodes.svg" color="red"></span>' : '';
        // let promptIcon = hasPrompt ? '<span class="icon-prompt"><></span>' : '';
let nodeIcon = hasNodes ? '<span class="icon-node tech-icon-mask node-mask"></span>' : '';
let promptIcon = hasPrompt ? '<span class="icon-prompt tech-icon-mask prompt-mask"></span>' : '';


        return `
        <article class="card">
            <div class="card-header">
                <span class="quality-badge">${item.quality}</span>
                <h2>${item.name} ${nodeIcon}${promptIcon}</h2>
            </div>
            <div class="card-body">
                <div class="price-box">${item.price}</div>
                <a href="${item.pricingLink}" target="_blank" class="price-details-link">Consulter les<span id="price">&nbsp Prix &nbsp</span></a>
                <div class="stats-grid">
                    <div><strong>Résolution</strong><br>${item.res}</div>
                    
                    <div><strong>Durée Max</strong><br>
                    ${item.length.replace(/illimité/gi, `<span style="color: var(--accent-node); font-weight: 500;">$&</span>`).replace(/Limité/gi, (match) => {
                        return match.toLowerCase() === 'limité' && !item.length.toLowerCase().includes('illimité') ? `<span style="color: var(--status-limit); font-weight: 500;">${match}</span>` : match;
                    })}
                    </div>
                    
                </div>
                <div class="pros"><strong>AVANTAGES :</strong> ${item.pros}</div>
                <div class="cons"><strong>INCONVÉNIENTS :</strong> ${item.cons}</div>
                <a href="${item.link}" target="_blank" class="btn-launch">${item.link}</a>
            </div>
        </article>
        `;
    }).join('');
}


    const sorted = [...aiModels].sort((a, b) => a.numericPrice - b.numericPrice);
    
    
    render(aiModels);
    render(sorted);
