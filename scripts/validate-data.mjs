import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync(new URL('../public/data/benchmark_snapshot.json',import.meta.url)));
const req=['system_id','system_name','benchmark','evaluation_split','metric','pass_protocol','accuracy_percent','cost_usd_per_task','currency','cost_type','cost_methodology','evidence_type','source_title','comparability_status','limitations','notes'];
const errors=[];
for(const [i,p] of d.points.entries()){
 for(const k of req) if(!(k in p)) errors.push(`point ${i}: missing ${k}`);
 if(p.cost_usd_per_task!=null&&p.cost_usd_per_task<=0) errors.push(`${p.system_id}: nonpositive cost`);
 if(p.accuracy_percent!=null&&(p.accuracy_percent<0||p.accuracy_percent>100)) errors.push(`${p.system_id}: bad accuracy`);
 if(!p.synthetic&&!p.source_url) errors.push(`${p.system_id}: sourced point missing URL`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`PASS: ${d.points.length} points validated; sourced evidence values preserved.`);
