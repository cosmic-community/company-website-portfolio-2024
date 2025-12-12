import ReactMarkdown from 'react-markdown';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MarkdownProps {
  content: string;
  className?: string;
}

export default function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={twMerge('prose prose-lg dark:prose-invert max-w-none', className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}