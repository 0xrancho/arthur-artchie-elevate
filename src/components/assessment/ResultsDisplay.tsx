import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScoringResult } from '@/lib/scoring';
import { QuadrantVisualization } from './QuadrantVisualization';
import { submitToAirtable, updateAssessmentInAirtable } from '@/lib/airtable';

interface ResultsDisplayProps {
  results: ScoringResult;
  accountName: string;
  userName: string;
  userEmail: string;
  userCompany: string;
  assessmentRecordId: string | null;
}

export const ResultsDisplay = ({ results, accountName, userName, userEmail, userCompany, assessmentRecordId }: ResultsDisplayProps) => {
  const [visibleLayers, setVisibleLayers] = useState<number[]>([]);
  const [showCTA, setShowCTA] = useState(false);

  // Contact form state
  const [yourRead, setYourRead] = useState('');

  // Animated layer reveal (4 layers: Trust Positioning, Revenue Opportunity, Growth Strategy, Narrative)
  useEffect(() => {
    const delays = [300, 600, 900, 1200];
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleLayers((prev) => [...prev, index]);
      }, delay);
    });

    // Show CTA after all layers
    setTimeout(() => {
      setShowCTA(true);
    }, 1800);
  }, []);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${Math.round(value / 1000)}K`;
  };

  const getDeltaArrow = (delta: 'up' | 'stable' | 'down') => {
    return { 'up': '↑', 'stable': '→', 'down': '↓' }[delta];
  };

  const getDeltaLabel = (delta: 'up' | 'stable' | 'down', type: 'rr' | 'rrp') => {
    if (type === 'rr') {
      return { 'up': 'Increasing', 'stable': 'Stable', 'down': 'Decreasing' }[delta];
    }
    return { 'up': 'Increasing', 'stable': 'Stable', 'down': 'Decreasing' }[delta];
  };

  const getDeltaColor = (delta: 'up' | 'stable' | 'down') => {
    return { 'up': '#4ADE80', 'stable': '#F59E0B', 'down': '#EF4444' }[delta];
  };

  const handleBookCall = async () => {
    // Update Assessment record with "Your Read" if we have a recordId
    if (assessmentRecordId && yourRead) {
      await updateAssessmentInAirtable({
        recordId: assessmentRecordId,
        yourRead: yourRead,
      });
    }

    // Also submit to Contact table for CRM tracking
    await submitToAirtable({
      name: userName,
      email: userEmail,
      company: userCompany,
      teamSize: '',
      industry: '',
      description: `Assessment completed. Client Account: ${accountName}. Strategy: ${results.strategy}. Your read: ${yourRead}`,
      source: 'assessment',
      sourceUrl: window.location.href,
      sourceCta: 'Book a Strategy Call (Assessment Results)',
    });

    // Open Calendly in new tab
    window.open('https://calendly.com/joelaustin/30min', '_blank');
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">
            GROWTH INTELLIGENCE REPORT
          </h1>
          <p className="text-lg text-gray-300 font-mono">
            {accountName}
          </p>
        </div>

        {/* Layer 1: Trust Positioning */}
        {visibleLayers.includes(0) && (
          <div
            className="mb-6 bg-[#1E293B] rounded-lg p-6 animate-fadeIn"
            style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="font-mono text-xs font-bold text-[#22D3EE] tracking-wider mb-4">
              TRUST POSITIONING
            </div>
            <div className="border-t border-gray-700 pt-4">
              {/* Grid layout: Quadrant visualization on left, metrics on right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Left: Quadrant Visualization */}
                <div className="flex flex-col items-center">
                  <QuadrantVisualization
                    rrScore={results.rrScore}
                    rrpScore={results.rrpScore}
                    quadrant={results.quadrant}
                    trajectory={results.trajectory}
                  />
                </div>

                {/* Right: Trust Scores */}
                <div className="space-y-4 font-mono text-sm">
                  {/* RR Score */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400">RR Score</span>
                      <span className="text-white">
                        <span className="font-bold text-lg">{results.rrScore}</span>
                        <span className="text-gray-400 ml-3">{results.rrBand}</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Relationship depth — how often contacts share signals, refer, advocate
                    </p>
                  </div>

                  {/* RRP Score */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400">RRP Score</span>
                      <span className="text-white">
                        <span className="font-bold text-lg">{results.rrpScore}</span>
                        <span className="text-gray-400 ml-3">{results.rrpBand}</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Risk delegation — business impact vs. fees paid
                    </p>
                  </div>

                  {/* Quadrant */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400">Quadrant</span>
                      <span className="text-white font-bold">{results.quadrant}</span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Strategic position based on relationship depth and risk entrusted
                    </p>
                  </div>

                  {/* Coverage */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400">Coverage</span>
                      <span className="text-white">
                        <span className="font-bold text-lg">{results.coverage}%</span>
                        <span className="text-gray-400 ml-3">({Math.round(results.totalBuyers * results.coverage / 100)} of {results.totalBuyers})</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Buyer penetration — known contacts vs. estimated decision-makers
                    </p>
                  </div>

                  {/* Trajectory */}
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400">Trajectory</span>
                      <span className="text-white font-bold">{results.trajectory}</span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Direction of account movement based on engagement and risk trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Layer 2: Revenue Opportunity */}
        {visibleLayers.includes(1) && (
          <div
            className="mb-6 bg-[#1E293B] rounded-lg p-6 animate-fadeIn"
            style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="font-mono text-xs font-bold text-[#22D3EE] tracking-wider mb-4">
              REVENUE OPPORTUNITY
            </div>
            <div className="border-t border-gray-700 pt-4">
              {(() => {
                const knownContacts = Math.round(results.totalBuyers * results.coverage / 100);
                const revenuePerContact = results.currentFees / knownContacts;
                const unmappedBuyers = results.totalBuyers - knownContacts;
                const coveragePercent = results.coverage;
                const conservativeWhitespace = unmappedBuyers * revenuePerContact * 0.5;
                const optimisticWhitespace = unmappedBuyers * revenuePerContact * 1.0;
                const riskManaged = results.currentFees * results.rrpScore;
                const rrp = results.rrpScore;

                // Determine value alignment state
                let valueState: 'gap' | 'aligned' | 'pricing' | 'underpriced';
                let healthyFees = 0;
                let healthyRisk = 0;
                let scopeGap = 0;
                let pricingHeadroom = 0;

                if (rrp < 8) {
                  valueState = 'gap';
                  healthyRisk = results.currentFees * 10;
                  scopeGap = healthyRisk - riskManaged;
                } else if (rrp <= 15) {
                  valueState = 'aligned';
                } else if (rrp <= 30) {
                  valueState = 'pricing';
                  healthyFees = riskManaged / 10;
                  pricingHeadroom = healthyFees - results.currentFees;
                } else {
                  valueState = 'underpriced';
                  healthyFees = riskManaged / 10;
                  pricingHeadroom = healthyFees - results.currentFees;
                }

                return (
                  <div className="space-y-6">
                    {/* Part 1: Current State */}
                    <div>
                      <div className="font-mono text-xs font-bold text-white tracking-wider mb-3">
                        CURRENT STATE
                      </div>
                      <div className="bg-[#0F172A] rounded-lg p-4 border border-[#22D3EE] border-opacity-30">
                        <div className="font-mono text-sm">
                          <div className="flex items-center gap-3">
                            <span className="text-white font-bold">{knownContacts} buyers</span>
                            <span className="text-gray-500">→</span>
                            <span className="text-white font-bold">{formatCurrency(results.currentFees)}/year</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-2 ml-12">
                            {formatCurrency(revenuePerContact)} avg per relationship
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Part 2: Coverage Gap */}
                    <div>
                      <div className="font-mono text-xs font-bold text-white tracking-wider mb-3">
                        COVERAGE GAP
                      </div>
                      <div className="bg-[#0F172A] rounded-lg p-4 border border-gray-700">
                        <div className="space-y-3 font-mono text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">You Know</span>
                            <span className="text-white">{knownContacts} buyers <span className="text-gray-500">({coveragePercent}%)</span></span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">You Don't Know</span>
                            <span className="text-white">{unmappedBuyers} buyers <span className="text-gray-500">({100 - coveragePercent}%)</span></span>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full transition-all duration-300"
                              style={{
                                width: `${coveragePercent}%`,
                                backgroundColor: coveragePercent < 50 ? '#F59E0B' : '#4ADE80'
                              }}
                            />
                          </div>

                          <div className="border-t border-gray-700 pt-3 mt-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-xs">Whitespace</span>
                              <span className="text-[#F59E0B] font-bold">
                                {formatCurrency(conservativeWhitespace)} – {formatCurrency(optimisticWhitespace)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                          At {formatCurrency(revenuePerContact)} per buyer, unmapped relationships represent{' '}
                          <span className="text-[#F59E0B] font-bold">
                            {formatCurrency(conservativeWhitespace)}–{formatCurrency(optimisticWhitespace)}
                          </span>{' '}
                          in potential revenue.
                        </p>
                      </div>
                    </div>

                    {/* Part 3: Value Alignment */}
                    <div>
                      <div className="font-mono text-xs font-bold text-white tracking-wider mb-3">
                        VALUE ALIGNMENT
                      </div>

                      {valueState === 'gap' && (
                        <div className="bg-[#F59E0B] bg-opacity-10 border border-[#F59E0B] border-opacity-30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">⚠</span>
                            <span className="font-mono text-sm font-bold text-[#F59E0B]">VALUE GAP</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-300">
                              You're earning <span className="text-white font-bold">{formatCurrency(results.currentFees)}</span> on ~<span className="text-white font-bold">{formatCurrency(riskManaged)}</span> in client risk.
                            </p>
                            <p className="text-gray-300">
                              At healthy 10x ratios, that fee level should manage <span className="text-white font-bold">{formatCurrency(healthyRisk)}</span>.
                            </p>
                            <div className="border-t border-[#F59E0B] border-opacity-30 pt-2 mt-2">
                              <p className="text-gray-300">
                                <span className="text-gray-400">Gap:</span> <span className="text-[#F59E0B] font-bold">+{formatCurrency(scopeGap)}</span> in critical scope needed
                              </p>
                            </div>
                            <p className="text-xs text-gray-400 italic mt-3">
                              Without expanding to more mission-critical systems, you're vulnerable to price pressure at renewal.
                            </p>
                          </div>
                        </div>
                      )}

                      {valueState === 'aligned' && (
                        <div className="bg-[#4ADE80] bg-opacity-10 border border-[#4ADE80] border-opacity-30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">✓</span>
                            <span className="font-mono text-sm font-bold text-[#4ADE80]">VALUE ALIGNED</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-300">
                              You're earning <span className="text-white font-bold">{formatCurrency(results.currentFees)}</span> on ~<span className="text-white font-bold">{formatCurrency(riskManaged)}</span> in client risk.
                            </p>
                            <p className="text-gray-300">
                              That's a healthy <span className="text-[#4ADE80] font-bold">{rrp.toFixed(1)}x</span> ratio—you're delivering appropriate value for your fees.
                            </p>
                          </div>
                        </div>
                      )}

                      {valueState === 'pricing' && (
                        <div className="bg-[#22D3EE] bg-opacity-10 border border-[#22D3EE] border-opacity-30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">↑</span>
                            <span className="font-mono text-sm font-bold text-[#22D3EE]">PRICING POWER</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-300">
                              You manage <span className="text-white font-bold">{formatCurrency(riskManaged)}</span> in client risk for <span className="text-white font-bold">{formatCurrency(results.currentFees)}</span>.
                            </p>
                            <p className="text-gray-300">
                              At industry-standard 10x, you could charge <span className="text-white font-bold">{formatCurrency(healthyFees)}</span>.
                            </p>
                            <div className="border-t border-[#22D3EE] border-opacity-30 pt-2 mt-2">
                              <p className="text-gray-300">
                                <span className="text-gray-400">Headroom:</span> <span className="text-[#22D3EE] font-bold">+{formatCurrency(pricingHeadroom)}</span> in potential fees
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {valueState === 'underpriced' && (
                        <div className="bg-[#22D3EE] bg-opacity-10 border border-[#22D3EE] border-opacity-30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">↑↑</span>
                            <span className="font-mono text-sm font-bold text-[#22D3EE]">VALUE CAPTURE OPPORTUNITY</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-300">
                              You manage <span className="text-white font-bold">{formatCurrency(riskManaged)}</span> in client risk for only <span className="text-white font-bold">{formatCurrency(results.currentFees)}</span>.
                            </p>
                            <p className="text-gray-300">
                              That's a <span className="text-[#22D3EE] font-bold">{rrp.toFixed(1)}x</span> ratio—well above the 10x benchmark.
                            </p>
                            <div className="border-t border-[#22D3EE] border-opacity-30 pt-2 mt-2">
                              <p className="text-gray-300">
                                <span className="text-gray-400">Potential increase:</span> <span className="text-[#22D3EE] font-bold">+{formatCurrency(pricingHeadroom)}</span>
                              </p>
                            </div>
                            <p className="text-xs text-gray-400 italic mt-3">
                              Consider a value-based pricing conversation at renewal.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Layer 3: Growth Strategy (Unified with Enrichment) */}
        {visibleLayers.includes(2) && (
          <div
            className="mb-6 bg-[#1E293B] rounded-lg p-6 animate-fadeIn"
            style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="font-mono text-xs font-bold text-[#22D3EE] tracking-wider mb-4">
              GROWTH STRATEGY
            </div>
            <div className="border-t border-gray-700 pt-4">
              {(() => {
                const unmappedPercent = 100 - results.coverage;
                const knownContacts = Math.round(results.totalBuyers * results.coverage / 100);
                const unmappedContacts = results.totalBuyers - knownContacts;
                const warmIntroPaths = knownContacts * 2;

                // Strategy one-liners
                const oneLiners: Record<string, string> = {
                  'EXPAND': 'Trusted but narrow—find adjacent opportunities',
                  'RE-ENGAGE': 'Relationship cooling—rebuild engagement first',
                  'PROTECT': 'Early warning signs—shore up what you have',
                  'RETAIN': 'Stable and low-risk—maintain with minimal investment',
                  'NURTURE': 'Operational trust building—deepen relationships first',
                  'TRIAGE': 'Decision point—invest heavily or manage exit'
                };

                // Context paragraphs
                const contexts: Record<string, string> = {
                  'EXPAND': `You've built strong relationships with the buyers you know, but ${unmappedPercent}% of decision-makers are unmapped. The opportunity is coverage expansion, not deeper trust.`,
                  'RE-ENGAGE': `Relationship cooling while operational trust remains high. Without intervention, you're 12-18 months from price pressure or displacement. Rebuild engagement before expanding.`,
                  'PROTECT': `This account shows early warning signs. Focus on retention and risk mitigation before any expansion plays. Shore up the relationships you have.`,
                  'RETAIN': `Stable, low-risk account. Maintain with minimal investment—focus growth energy elsewhere. Monitor for changes.`,
                  'NURTURE': `Operational trust is building but relationships are still shallow. Invest in relationship depth before expanding scope.`,
                  'TRIAGE': `This account requires a decision: invest heavily to rescue, or manage a graceful exit. Current trajectory is unsustainable.`
                };

                // Enrichment checklists
                const checklists: Record<string, string[]> = {
                  'EXPAND': [
                    'Org chart gaps — who else should you know?',
                    'Hiring signals — are they growing teams you serve?',
                    'Budget cycles — when do they plan spend?',
                    'Adjacent business units — where else could you add value?'
                  ],
                  'RE-ENGAGE': [
                    'Champion status — still in seat? Still engaged?',
                    'New stakeholders — who joined in last 6 months?',
                    'Competitor signals — are they evaluating alternatives?',
                    'Org restructure — any consolidation risk?'
                  ],
                  'PROTECT': [
                    'Contract timing — when is renewal?',
                    'Churn signals — engagement declining?',
                    'Competitive threats — who\'s circling?',
                    'Key contact stability — anyone leaving?'
                  ],
                  'RETAIN': [
                    'Contract dates — when to check in',
                    'Company health — any red flags?',
                    'Primary contact — still in role?'
                  ],
                  'NURTURE': [
                    'Champion candidates — who could advocate?',
                    'Relationship paths — warm intro routes?',
                    'Interest alignment — shared priorities?'
                  ],
                  'TRIAGE': [
                    'Salvageability — any path to recovery?',
                    'Exit cost — revenue at risk?',
                    'Rescue options — executive reset possible?'
                  ]
                };

                // Data sources
                const sources: Record<string, string> = {
                  'EXPAND': 'LinkedIn Sales Nav, Apollo, Clay job scraping, BuiltWith, company careers page',
                  'RE-ENGAGE': 'LinkedIn (job changes), Apollo org chart, G2 reviews, news alerts',
                  'PROTECT': 'Internal CRM, LinkedIn alerts, earnings calls, news monitoring',
                  'RETAIN': 'Contract database, company news (minimal)',
                  'NURTURE': 'LinkedIn, Apollo, internal engagement data',
                  'TRIAGE': 'All sources — full assessment needed'
                };

                const oneLiner = oneLiners[results.strategy] || '';
                const context = contexts[results.strategy] || '';
                const checklist = checklists[results.strategy] || [];
                const dataSource = sources[results.strategy] || '';

                return (
                  <div className="space-y-6">
                    {/* Strategy Badge */}
                    <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border rounded-lg p-4 flex items-center justify-between"
                      style={{ borderColor: results.color }}
                    >
                      <span className="font-mono text-2xl font-bold" style={{ color: results.color }}>
                        {results.strategy}
                      </span>
                      <span className="font-mono text-lg font-bold px-4 py-1 rounded"
                        style={{
                          backgroundColor: `${results.color}20`,
                          color: results.color
                        }}
                      >
                        {results.strategyPriority}
                      </span>
                    </div>

                    {/* One-liner */}
                    <div className="text-lg font-semibold text-white">
                      {oneLiner}
                    </div>

                    {/* Context Paragraph */}
                    <div className="text-[15px] leading-relaxed text-gray-300">
                      {context}
                    </div>

                    {/* Separator */}
                    <div className="border-t border-gray-700"></div>

                    {/* Enrichment Checklist */}
                    <div>
                      <div className="font-mono text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase">
                        To Execute This Strategy, You Need:
                      </div>
                      <div className="space-y-2 font-mono text-sm text-gray-300">
                        {checklist.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <span className="text-[#22D3EE] mr-2">☐</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Sources */}
                      <div className="mt-4 text-xs text-gray-500 italic">
                        <span className="text-gray-400">Sources:</span> {dataSource}
                      </div>
                    </div>

                    {/* Dashed Separator */}
                    <div className="border-t border-dashed border-gray-700"></div>

                    {/* Enrichment Preview Dashboard */}
                    <div className="relative bg-[#0F172A] border border-gray-600 rounded-lg p-5 overflow-hidden">
                      <div className="absolute -top-3 left-4 bg-[#1E293B] px-2 py-0.5 z-10">
                        <span className="font-mono text-[10px] tracking-wider text-gray-400">ENRICHMENT PREVIEW</span>
                      </div>

                      {/* Gradient Fade Mask Overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none z-[5]"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(15, 23, 42, 0.5) 40%, rgba(15, 23, 42, 0.85) 60%, rgba(15, 23, 42, 0.98) 100%)'
                        }}
                      />
                      {/* Blur layer that increases toward bottom */}
                      <div
                        className="absolute inset-0 pointer-events-none z-[4]"
                        style={{
                          backdropFilter: 'blur(2.5px)',
                          WebkitBackdropFilter: 'blur(2.5px)',
                          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 60%, black 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 60%, black 100%)'
                        }}
                      />

                      {/* Unlock CTA - positioned over blurred section */}
                      <div className="absolute bottom-4 left-4 right-4 z-[6]">
                        <button
                          className="w-full py-3 bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0284C7] rounded-lg text-[12px] font-mono font-bold text-[#0F172A] transition-all transform hover:scale-[1.02]"
                          style={{ boxShadow: '0 4px 14px rgba(34, 211, 238, 0.4)' }}
                          onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Unlock Full Enrichment →
                        </button>
                      </div>

                      {(() => {
                        // Strategy-specific dashboard content
                        const strategy = results.strategy;

                        // EXPAND Strategy Dashboard
                        if (strategy === 'EXPAND') {
                          return (
                            <div className="space-y-4">
                              {/* Summary Stats Bar */}
                              <div className="flex gap-4 justify-between font-mono text-xs">
                                <div className="text-center">
                                  <div className="text-[#22D3EE] font-bold text-lg">{unmappedContacts}</div>
                                  <div className="text-gray-400">unmapped</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#4ADE80] font-bold text-lg">{Math.round(unmappedContacts * 0.4)}</div>
                                  <div className="text-gray-400">hiring signals</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#F59E0B] font-bold text-lg">{warmIntroPaths}</div>
                                  <div className="text-gray-400">intro paths</div>
                                </div>
                              </div>

                              {/* Filters */}
                              <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-[#22D3EE] bg-opacity-20 border border-[#22D3EE] border-opacity-40 rounded text-[10px] text-[#22D3EE] font-mono">All</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Unmapped</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Department</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Seniority</span>
                              </div>

                              {/* Contact Table */}
                              <div className="border border-gray-600 rounded overflow-hidden">
                                <table className="w-full text-[10px] font-mono">
                                  <thead className="bg-[#1E293B] border-b border-gray-600">
                                    <tr>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Title</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Intro Path</th>
                                      <th className="px-2 py-1.5 text-center text-gray-300 font-semibold">Authority</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Sarah Chen</td>
                                      <td className="px-2 py-2 text-gray-300">VP Engineering</td>
                                      <td className="px-2 py-2 text-[#4ADE80] text-[9px]">via Marcus Webb</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#EF4444] bg-opacity-20 text-[#EF4444] rounded text-[9px]">High</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">David Park</td>
                                      <td className="px-2 py-2 text-gray-300">Dir. Product</td>
                                      <td className="px-2 py-2 text-[#4ADE80] text-[9px]">via Lisa Torres</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#F59E0B] bg-opacity-20 text-[#F59E0B] rounded text-[9px]">Med</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">James Rodriguez</td>
                                      <td className="px-2 py-2 text-gray-300">Head of Data</td>
                                      <td className="px-2 py-2 text-gray-400 text-[9px]">2nd degree</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#EF4444] bg-opacity-20 text-[#EF4444] rounded text-[9px]">High</span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Signals Panel */}
                              <div className="bg-[#1E293B] border border-[#4ADE80] border-opacity-30 rounded p-3 space-y-2">
                                <div className="font-mono text-[10px] text-[#4ADE80] font-semibold">EXPANSION SIGNALS</div>
                                <div className="text-[10px] text-gray-300 leading-relaxed">
                                  <span className="text-[#4ADE80]">•</span> 3 open roles in teams you serve<br />
                                  <span className="text-[#22D3EE]">•</span> Q1 budget cycle starts in 6 weeks<br />
                                  <span className="text-[#F59E0B]">•</span> Adjacent BU (Sales Ops) has similar needs
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="text-center text-[9px] text-gray-500 italic">
                                Powered by Clay + custom inference flows
                              </div>
                            </div>
                          );
                        }

                        // RE-ENGAGE Strategy Dashboard
                        if (strategy === 'RE-ENGAGE') {
                          return (
                            <div className="space-y-4">
                              {/* Summary Stats Bar */}
                              <div className="flex gap-4 justify-between font-mono text-xs">
                                <div className="text-center">
                                  <div className="text-[#F472B6] font-bold text-lg">{Math.round(knownContacts * 0.3)}</div>
                                  <div className="text-gray-400">at risk</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#F59E0B] font-bold text-lg">{Math.round(knownContacts * 0.2)}</div>
                                  <div className="text-gray-400">role changes</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#4ADE80] font-bold text-lg">{Math.round(unmappedContacts * 0.25)}</div>
                                  <div className="text-gray-400">new joiners</div>
                                </div>
                              </div>

                              {/* Filters */}
                              <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-[#F472B6] bg-opacity-20 border border-[#F472B6] border-opacity-40 rounded text-[10px] text-[#F472B6] font-mono">All Contacts</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">At Risk</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Champions</span>
                              </div>

                              {/* Contact Table */}
                              <div className="border border-gray-600 rounded overflow-hidden">
                                <table className="w-full text-[10px] font-mono">
                                  <thead className="bg-[#1E293B] border-b border-gray-600">
                                    <tr>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Status</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Last Engaged</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Risk</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Rachel Kim</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#22D3EE] bg-opacity-20 text-[#22D3EE] rounded text-[9px]">Champion</span></td>
                                      <td className="px-2 py-2 text-[#EF4444]">120d ago</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#EF4444] bg-opacity-20 text-[#EF4444] rounded text-[9px]">High</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Tom Bradley</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-gray-600 text-gray-300 rounded text-[9px]">User</span></td>
                                      <td className="px-2 py-2 text-[#F59E0B]">90d ago</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#F59E0B] bg-opacity-20 text-[#F59E0B] rounded text-[9px]">Med</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Nina Patel</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">New Hire</span></td>
                                      <td className="px-2 py-2 text-gray-400">Never</td>
                                      <td className="px-2 py-2 text-gray-500">-</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Signals Panel */}
                              <div className="bg-[#1E293B] border border-[#F472B6] border-opacity-30 rounded p-3 space-y-2">
                                <div className="font-mono text-[10px] text-[#F472B6] font-semibold">ENGAGEMENT GAPS</div>
                                <div className="text-[10px] text-gray-300 leading-relaxed">
                                  <span className="text-[#EF4444]">•</span> Champion hasn't responded in 4 months<br />
                                  <span className="text-[#4ADE80]">•</span> 2 new decision-makers joined recently<br />
                                  <span className="text-[#F59E0B]">•</span> Competitor mentioned in recent G2 review
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="text-center text-[9px] text-gray-500 italic">
                                Powered by Clay + custom inference flows
                              </div>
                            </div>
                          );
                        }

                        // PROTECT Strategy Dashboard
                        if (strategy === 'PROTECT') {
                          return (
                            <div className="space-y-4">
                              {/* Summary Stats Bar */}
                              <div className="flex gap-4 justify-between font-mono text-xs">
                                <div className="text-center">
                                  <div className="text-[#EF4444] font-bold text-lg">{Math.round(knownContacts * 0.4)}</div>
                                  <div className="text-gray-400">churn signals</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#F59E0B] font-bold text-lg">87d</div>
                                  <div className="text-gray-400">until renewal</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#EF4444] font-bold text-lg">2</div>
                                  <div className="text-gray-400">competitors</div>
                                </div>
                              </div>

                              {/* Filters */}
                              <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-[#EF4444] bg-opacity-20 border border-[#EF4444] border-opacity-40 rounded text-[10px] text-[#EF4444] font-mono">All Signals</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">High Risk</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Urgent</span>
                              </div>

                              {/* Contact Table */}
                              <div className="border border-gray-600 rounded overflow-hidden">
                                <table className="w-full text-[10px] font-mono">
                                  <thead className="bg-[#1E293B] border-b border-gray-600">
                                    <tr>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Role</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Signal</th>
                                      <th className="px-2 py-1.5 text-center text-gray-300 font-semibold">Risk</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Mike Thompson</td>
                                      <td className="px-2 py-2 text-gray-300">Champion</td>
                                      <td className="px-2 py-2 text-[#EF4444] text-[9px]">No response 90d</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#EF4444] bg-opacity-20 text-[#EF4444] rounded text-[9px]">High</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Jennifer Walsh</td>
                                      <td className="px-2 py-2 text-gray-300">Exec Sponsor</td>
                                      <td className="px-2 py-2 text-[#EF4444] text-[9px]">Leaving role</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#DC2626] text-white rounded text-[9px] font-bold">Critical</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Carlos Mendez</td>
                                      <td className="px-2 py-2 text-gray-300">Buyer</td>
                                      <td className="px-2 py-2 text-[#F59E0B] text-[9px]">Budget cuts</td>
                                      <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#F59E0B] bg-opacity-20 text-[#F59E0B] rounded text-[9px]">Med</span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Signals Panel - Warning Style */}
                              <div className="bg-[#1E293B] border border-[#EF4444] border-opacity-30 rounded p-3 space-y-2">
                                <div className="font-mono text-[10px] text-[#EF4444] font-semibold">⚠ CHURN INDICATORS</div>
                                <div className="text-[10px] text-gray-300 leading-relaxed">
                                  <span className="text-[#EF4444]">•</span> Exec sponsor announced departure<br />
                                  <span className="text-[#EF4444]">•</span> Competitors mentioned in Slack (via 6sense)<br />
                                  <span className="text-[#F59E0B]">•</span> Usage down 35% from Q2 baseline
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="text-center text-[9px] text-gray-500 italic">
                                Powered by Clay + custom inference flows
                              </div>
                            </div>
                          );
                        }

                        // NURTURE Strategy Dashboard
                        if (strategy === 'NURTURE') {
                          return (
                            <div className="space-y-4">
                              {/* Summary Stats Bar */}
                              <div className="flex gap-4 justify-between font-mono text-xs">
                                <div className="text-center">
                                  <div className="text-[#A78BFA] font-bold text-lg">{Math.round(knownContacts * 0.6)}</div>
                                  <div className="text-gray-400">candidates</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#4ADE80] font-bold text-lg">{warmIntroPaths}</div>
                                  <div className="text-gray-400">intro paths</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#22D3EE] font-bold text-lg">{Math.round(knownContacts * 1.5)}</div>
                                  <div className="text-gray-400">shared interests</div>
                                </div>
                              </div>

                              {/* Filters */}
                              <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-[#A78BFA] bg-opacity-20 border border-[#A78BFA] border-opacity-40 rounded text-[10px] text-[#A78BFA] font-mono">All</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">High Potential</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Influence</span>
                              </div>

                              {/* Contact Table */}
                              <div className="border border-gray-600 rounded overflow-hidden">
                                <table className="w-full text-[10px] font-mono">
                                  <thead className="bg-[#1E293B] border-b border-gray-600">
                                    <tr>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Title</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Potential</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Path</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Amanda Foster</td>
                                      <td className="px-2 py-2 text-gray-300">Sr. Manager</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#22D3EE] bg-opacity-20 text-[#22D3EE] rounded text-[9px]">Champion</span></td>
                                      <td className="px-2 py-2 text-[#4ADE80] text-[9px]">2 shared contacts</td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Kevin Nguyen</td>
                                      <td className="px-2 py-2 text-gray-300">Director</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#A78BFA] bg-opacity-20 text-[#A78BFA] rounded text-[9px]">Influencer</span></td>
                                      <td className="px-2 py-2 text-[#4ADE80] text-[9px]">Alumni network</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Emily Santos</td>
                                      <td className="px-2 py-2 text-gray-300">Lead</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-gray-600 text-gray-300 rounded text-[9px]">User</span></td>
                                      <td className="px-2 py-2 text-gray-400 text-[9px]">Direct reach</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Signals Panel */}
                              <div className="bg-[#1E293B] border border-[#A78BFA] border-opacity-30 rounded p-3 space-y-2">
                                <div className="font-mono text-[10px] text-[#A78BFA] font-semibold">RELATIONSHIP INTELLIGENCE</div>
                                <div className="text-[10px] text-gray-300 leading-relaxed">
                                  <span className="text-[#A78BFA]">•</span> 3 power users with growing influence<br />
                                  <span className="text-[#4ADE80]">•</span> 2 alumni connections for warm intros<br />
                                  <span className="text-[#22D3EE]">•</span> Shared interests: DevOps, ML/AI, SaaS metrics
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="text-center text-[9px] text-gray-500 italic">
                                Powered by Clay + custom inference flows
                              </div>
                            </div>
                          );
                        }

                        // TRIAGE Strategy Dashboard
                        if (strategy === 'TRIAGE') {
                          return (
                            <div className="space-y-4">
                              {/* Summary Stats Bar */}
                              <div className="flex gap-4 justify-between font-mono text-xs">
                                <div className="text-center">
                                  <div className="text-[#F59E0B] font-bold text-lg">23%</div>
                                  <div className="text-gray-400">salvage odds</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#EF4444] font-bold text-lg">{formatCurrency(results.currentFees * 0.8)}</div>
                                  <div className="text-gray-400">at risk</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[#F59E0B] font-bold text-lg">6-9mo</div>
                                  <div className="text-gray-400">rescue window</div>
                                </div>
                              </div>

                              {/* Filters */}
                              <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-[#F59E0B] bg-opacity-20 border border-[#F59E0B] border-opacity-40 rounded text-[10px] text-[#F59E0B] font-mono">All Contacts</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Lost</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">At Risk</span>
                                <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Potential Allies</span>
                              </div>

                              {/* Contact Table */}
                              <div className="border border-gray-600 rounded overflow-hidden">
                                <table className="w-full text-[10px] font-mono">
                                  <thead className="bg-[#1E293B] border-b border-gray-600">
                                    <tr>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Role</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Status</th>
                                      <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Signal</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Marcus Webb</td>
                                      <td className="px-2 py-2 text-gray-300">VP Operations</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#DC2626] text-white rounded text-[9px] font-bold">Gone</span></td>
                                      <td className="px-2 py-2 text-[#EF4444] text-[9px]">Left company 6mo ago</td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Steve Harrison</td>
                                      <td className="px-2 py-2 text-gray-300">Dir. Engineering</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#EF4444] bg-opacity-20 text-[#EF4444] rounded text-[9px]">Disengaged</span></td>
                                      <td className="px-2 py-2 text-[#F59E0B] text-[9px]">No response 4mo</td>
                                    </tr>
                                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Diana Reyes</td>
                                      <td className="px-2 py-2 text-gray-300">New CTO</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#F59E0B] bg-opacity-20 text-[#F59E0B] rounded text-[9px]">Unknown</span></td>
                                      <td className="px-2 py-2 text-gray-400 text-[9px]">Hired from competitor</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50">
                                      <td className="px-2 py-2 text-white">Alex Turner</td>
                                      <td className="px-2 py-2 text-gray-300">Sr. Manager</td>
                                      <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Ally?</span></td>
                                      <td className="px-2 py-2 text-[#4ADE80] text-[9px]">Still engaged, junior</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Signals Panel - Warning Style */}
                              <div className="bg-[#1E293B] border border-[#F59E0B] border-opacity-30 rounded p-3 space-y-2">
                                <div className="font-mono text-[10px] text-[#F59E0B] font-semibold">⚠ TRIAGE ASSESSMENT</div>
                                <div className="text-[10px] text-gray-300 leading-relaxed">
                                  <span className="text-[#EF4444]">•</span> Executive sponsor departed 6 months ago<br />
                                  <span className="text-[#EF4444]">•</span> New CTO has competitor relationships<br />
                                  <span className="text-[#4ADE80]">•</span> 1 potential ally — needs executive air cover
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="text-center text-[9px] text-gray-500 italic">
                                Powered by Clay + custom inference flows
                              </div>
                            </div>
                          );
                        }

                        // RETAIN Strategy Dashboard (default fallback)
                        return (
                          <div className="space-y-4">
                            {/* Summary Stats Bar */}
                            <div className="flex gap-4 justify-between font-mono text-xs">
                              <div className="text-center">
                                <div className="text-[#4ADE80] font-bold text-lg">{knownContacts}</div>
                                <div className="text-gray-400">stable contacts</div>
                              </div>
                              <div className="text-center">
                                <div className="text-[#4ADE80] font-bold text-lg">0</div>
                                <div className="text-gray-400">risk signals</div>
                              </div>
                              <div className="text-center">
                                <div className="text-[#4ADE80] font-bold text-lg">Good</div>
                                <div className="text-gray-400">health</div>
                              </div>
                            </div>

                            {/* Filters */}
                            <div className="flex gap-2 flex-wrap">
                              <span className="px-2 py-1 bg-[#4ADE80] bg-opacity-20 border border-[#4ADE80] border-opacity-40 rounded text-[10px] text-[#4ADE80] font-mono">All Contacts</span>
                              <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Active</span>
                              <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 font-mono">Stable</span>
                            </div>

                            {/* Contact Table */}
                            <div className="border border-gray-600 rounded overflow-hidden">
                              <table className="w-full text-[10px] font-mono">
                                <thead className="bg-[#1E293B] border-b border-gray-600">
                                  <tr>
                                    <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Name</th>
                                    <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Title</th>
                                    <th className="px-2 py-1.5 text-left text-gray-300 font-semibold">Status</th>
                                    <th className="px-2 py-1.5 text-center text-gray-300 font-semibold">Health</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                    <td className="px-2 py-2 text-white">Lisa Morgan</td>
                                    <td className="px-2 py-2 text-gray-300">Buyer</td>
                                    <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Active</span></td>
                                    <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Good</span></td>
                                  </tr>
                                  <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                                    <td className="px-2 py-2 text-white">Brian Cooper</td>
                                    <td className="px-2 py-2 text-gray-300">User</td>
                                    <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Active</span></td>
                                    <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Good</span></td>
                                  </tr>
                                  <tr className="hover:bg-gray-800/50">
                                    <td className="px-2 py-2 text-white">Janet Lee</td>
                                    <td className="px-2 py-2 text-gray-300">Champion</td>
                                    <td className="px-2 py-2"><span className="px-1.5 py-0.5 bg-[#22D3EE] bg-opacity-20 text-[#22D3EE] rounded text-[9px]">Stable</span></td>
                                    <td className="px-2 py-2 text-center"><span className="px-1.5 py-0.5 bg-[#4ADE80] bg-opacity-20 text-[#4ADE80] rounded text-[9px]">Good</span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {/* Signals Panel - Success Style */}
                            <div className="bg-[#1E293B] border border-[#4ADE80] border-opacity-30 rounded p-3 space-y-2">
                              <div className="font-mono text-[10px] text-[#4ADE80] font-semibold">✓ STABLE ACCOUNT</div>
                              <div className="text-[10px] text-gray-300 leading-relaxed">
                                <span className="text-[#4ADE80]">•</span> All contacts stable in role<br />
                                <span className="text-[#4ADE80]">•</span> No churn signals detected<br />
                                <span className="text-[#22D3EE]">•</span> Maintain current relationship cadence
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="text-center text-[9px] text-gray-500 italic">
                              Powered by Clay + custom inference flows
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Layer 4: AI-Generated Narrative */}
        {visibleLayers.includes(3) && (
          <div
            className="mb-8 bg-[#1E293B] rounded-lg p-6 animate-fadeIn"
            style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="font-mono text-xs font-bold text-[#22D3EE] tracking-wider mb-4">
              STRATEGIC NARRATIVE
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="bg-[#0F172A] rounded p-4 border border-gray-700">
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  Your {results.quadrant.toLowerCase()} position at {accountName} shows a {results.trajectory.toLowerCase()} trajectory.
                  With an RR score of {results.rrScore} and RRP of {results.rrpScore}, you've built {results.rrBand.toLowerCase()} trust
                  while managing {results.rrpBand.toLowerCase()} risk delegation. The {formatCurrency(results.revenueGap)} expansion gap
                  suggests untapped revenue potential through your {results.strategy.toLowerCase()} strategy.
                  Your current {results.coverage}% coverage leaves significant whitespace —
                  {results.totalBuyers - Math.round(results.totalBuyers * results.coverage / 100)} additional decision-makers
                  could deepen this relationship and accelerate growth.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Results Sent Confirmation */}
        {showCTA && (
          <div className="bg-[#0F172A] border border-gray-700 rounded-lg p-4 mb-6 animate-fadeIn">
            <p className="text-sm text-gray-300 text-center">
              <span className="text-[#4ADE80]">✓</span> These results have been sent to <span className="text-[#22D3EE] font-mono">{userEmail}</span>
            </p>
          </div>
        )}

        {/* CTA Form */}
        {showCTA && (
          <div
            className="bg-[#1E293B] rounded-lg p-8 animate-fadeIn"
            style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="mb-6">
              <h3 className="font-mono text-xl font-bold text-white mb-3 tracking-wider">
                WHAT'S NEXT?
              </h3>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  You've seen how trust metrics reveal account trajectory and revenue gaps. Now let's talk about what to do with it.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To make our conversation productive, share a bit more about this account and what you're trying to solve.
                </p>
              </div>
            </div>

            <div className="space-y-6" id="cta-section">
              {/* Your Read */}
              <div>
                <label className="block font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Your Read
                </label>
                <p className="text-xs text-gray-400 mb-3">
                  What resonates from your assessment? What's driving the trajectory? What outcome would matter most?
                </p>
                <textarea
                  value={yourRead}
                  onChange={(e) => setYourRead(e.target.value)}
                  className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] min-h-[120px]"
                  placeholder="Share your perspective..."
                />
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Examples of what's helpful:<br />
                  • Strategic context we can't see from outside<br />
                  • Internal dynamics or initiatives affecting the account<br />
                  • What you've tried, what's worked, what hasn't<br />
                  • What a win looks like for you
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-gray-700">
                <Button
                  onClick={handleBookCall}
                  className="w-full bg-[#22D3EE] hover:bg-[#0EA5E9] text-[#0F172A] font-mono font-bold py-4 text-sm uppercase tracking-wider transition-all"
                >
                  Book a Strategy Call
                </Button>
                <div className="mt-4 text-center space-y-2">
                  <p className="text-xs text-gray-400 font-mono">We'll discuss:</p>
                  <p className="text-xs text-gray-300">• Running assessments across your portfolio</p>
                  <p className="text-xs text-gray-300">• Custom enrichment for priority accounts</p>
                  <p className="text-xs text-gray-300">• Full diagnostic + action planning</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="pt-6 mt-6 border-t border-gray-700 flex flex-row gap-4">
                <a
                  href="/"
                  className="flex-1 text-center py-3 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 font-mono text-sm transition-all"
                >
                  ← Home
                </a>
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 py-3 border border-[#22D3EE] rounded-lg text-[#22D3EE] hover:bg-[#22D3EE]/10 font-mono text-sm transition-all"
                >
                  Generate New Report →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
