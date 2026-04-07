import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{}];
}

export default async function ManualPage() {
  const filePath = path.join(cwd(), 'src/app/manual/UNION-HELPER-MANUAL.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    content = '# Manual\n\nManual file not found.';
  }

  // Simple markdown to HTML-ish conversion
  const html = content
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^\| (.+) \|$/gm, (match, row) => {
      const cells = row.split(' | ').map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    })
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.7 }}>
      <style>{`
        body { background: #0f0f0f; color: #f0f0f0; }
        h1 { color: #fff; border-bottom: 2px solid #333; padding-bottom: 0.5rem; }
        h2 { color: #e0e0e0; margin-top: 2rem; }
        h3 { color: #c0c0c0; }
        code { background: #1a1a1a; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.9em; }
        pre { background: #1a1a1a; padding: 1rem; border-radius: 8px; overflow-x: auto; }
        table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
        td, th { border: 1px solid #333; padding: 0.5rem 1rem; text-align: left; }
        th { background: #1a1a1a; }
        a { color: #6ea6ff; }
        li { margin: 0.3rem 0; }
        img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }} />
    </main>
  );
}
