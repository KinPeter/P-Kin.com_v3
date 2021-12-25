export function getViewBox(svgString: string): string | null {
  const viewBoxMatches = svgString.match(/(?:viewBox=")([\d\s.]+)(?:")/);
  return viewBoxMatches?.length ? viewBoxMatches[1] : null;
}

export function stripSvg(svgString: string): string {
  return svgString
    .replace(/(<svg[^>]+>)/, '')
    .replace(/(<\/svg>)/, '')
    .trim();
}

export function getSvg(viewBox: string | null, innerHtml: string, size = '24px'): string {
  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${viewBox ?? '0 0 24 24'}"
      width="${size}"
      height="${size}"
    >
      ${innerHtml}
    </svg>`;
}
