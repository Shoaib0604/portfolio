import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Shoaib Bagwan. All rights reserved.
        </p>

        <a
          href="#hero"
          aria-label="Back to top"
          className="
            p-3 rounded-full
            bg-primary/10 text-primary
            transition-all duration-300
            hover:bg-primary hover:text-primary-foreground
            hover:scale-110
            hover:shadow-[0_0_12px_rgba(139,92,246,0.5)]
          "
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
