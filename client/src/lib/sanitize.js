import DOMPurify from 'dompurify';

// Reviews support simple formatting, not arbitrary HTML. Keep the allowlist
// narrow so scripts, event handlers, embedded content, and unsafe attributes
// are removed at the HTML rendering boundary.
const reviewHtmlOptions = {
  ALLOWED_TAGS: [
    'a',
    'b',
    'blockquote',
    'br',
    'code',
    'del',
    'em',
    'i',
    'li',
    'ol',
    'p',
    'strong',
    'u',
    'ul',
  ],
  ALLOWED_ATTR: ['href', 'title'],
  ALLOW_DATA_ATTR: false,
  ALLOW_ARIA_ATTR: false,
};

export const sanitizeHtml = (dirty) =>
  DOMPurify.sanitize(typeof dirty === 'string' ? dirty : '', reviewHtmlOptions);
