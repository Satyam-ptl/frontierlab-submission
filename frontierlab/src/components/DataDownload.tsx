import type { BenchmarkPoint } from '../types/benchmark';
export default function DataDownload({ points }: { points: BenchmarkPoint[] }) {
  function download() {
    const keys = ['system_name','cost_usd_per_task','adjusted_cost','accuracy_percent','evidence_type','source_url','comparability_status','limitations'];
    const rows = [keys.join(','), ...points.map(p => keys.map(k => JSON.stringify((p as unknown as Record<string, unknown>)[k] ?? '')).join(','))];
    const url = URL.createObjectURL(new Blob([rows.join('\n')], { type: 'text/csv' }));
    const a = document.createElement('a'); a.href = url; a.download = 'frontierlab-active-comparison.csv'; a.click(); URL.revokeObjectURL(url);
  }
  return <section className="panel"><h2>Export and inspect</h2><button onClick={download}>Download active comparison as CSV</button><a className="button-link" href="./data/benchmark_snapshot.csv" download>Download full source snapshot</a><a className="button-link" href="./data/data_dictionary.md" download>Download methodology notes</a></section>;
}
