import { useEffect, useMemo, useState } from 'react';
import type { BenchmarkPoint } from './types/benchmark';
import { frontier, dominates } from './lib/pareto';
import Hero from './components/Hero';
import GuidedJourney from './components/GuidedJourney';
import ParetoChart from './components/ParetoChart';
import DominanceInspector from './components/DominanceInspector';
import EffortSelector from './components/EffortSelector';
import CostAssumptionControl from './components/CostAssumptionControl';
import ComparisonSetControl from './components/ComparisonSetControl';
import ChallengerBuilder from './components/ChallengerBuilder';
import EfficiencyRatioPanel from './components/EfficiencyRatioPanel';
import BDHCQModule from './components/BDHCQModule';
import ExplainItBack from './components/ExplainItBack';
import KnowledgeCheck from './components/KnowledgeCheck';
import LimitationPanel from './components/LimitationPanel';
import MethodologyDrawer from './components/MethodologyDrawer';
import DataDownload from './components/DataDownload';
import Footer from './components/Footer';

export default function App() {
  const [all, setAll] = useState<BenchmarkPoint[]>([]);
  const [mode, setMode] = useState<'strict' | 'exploratory'>('strict');
  const [enabled, setEnabled] = useState(new Set<string>());
  const [mult, setMult] = useState(1);
  const [selected, setSelected] = useState('bdh-cq-150m');

  useEffect(() => {
    fetch('./data/benchmark_snapshot.json').then(r => r.json()).then(d => {
      setAll(d.points);
      setEnabled(new Set(d.points.map((p: BenchmarkPoint) => p.system_id)));
    });
  }, []);

  const active = useMemo(() => all
    .filter(p => enabled.has(p.system_id) && (mode === 'exploratory' || p.directly_comparable))
    .map(p => ({ ...p, adjusted_cost: p.cost_usd_per_task == null ? undefined : p.cost_usd_per_task * mult })),
    [all, enabled, mode, mult]);
  const bdh = active.find(p => p.system_id === 'bdh-cq-150m');
  const selectedPoint = active.find(p => p.system_id === selected) || bdh;
  const dom = bdh ? active.find(p => p.system_id !== bdh.system_id && dominates(p, bdh)) : undefined;
  const survives = Boolean(bdh && frontier(active).some(p => p.system_id === bdh.system_id));
  const add = (p: BenchmarkPoint) => {
    setAll(xs => [...xs.filter(x => x.system_id !== p.system_id), p]);
    setEnabled(s => new Set([...s, p.system_id]));
    setSelected(p.system_id);
  };

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Hero />
    <GuidedJourney />
    <main id="main">
      <section id="lab" className="panel">
        <p className="snapshot">Snapshot 2026-09-07 · BDH-CQ evidence: developer-reported</p>
        <div className={survives ? 'claim good' : 'claim bad'} role="status">
          <strong>{survives ? 'Claim survives the active test.' : 'Claim falsified for the active comparison set.'}</strong>
          {dom && bdh && ` ${dom.system_name} dominates BDH-CQ because its scenario cost is no greater and its accuracy is ${((dom.accuracy_percent ?? 0) - (bdh.accuracy_percent ?? 0)).toFixed(1)} percentage points higher.`}
        </div>
        <ParetoChart points={active} selected={selected} onSelect={setSelected} />
      </section>
      <section className="controls">
        <fieldset><legend>1. Operating point</legend><EffortSelector /></fieldset>
        <CostAssumptionControl value={mult} onChange={setMult} />
        <ComparisonSetControl all={all} enabled={enabled} setEnabled={setEnabled} mode={mode} setMode={setMode} />
      </section>
      <ChallengerBuilder onAdd={add} />
      <div className="grid"><DominanceInspector point={selectedPoint} all={active} /><EfficiencyRatioPanel p={selectedPoint} /></div>
      <BDHCQModule />
      <div className="grid"><ExplainItBack /><KnowledgeCheck /></div>
      <div className="grid"><LimitationPanel /><DataDownload points={active} /></div>
      <MethodologyDrawer />
    </main>
    <Footer />
  </>;
}
