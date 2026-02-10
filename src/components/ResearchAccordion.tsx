import { useState, ReactNode } from 'react';

interface ResearchAccordionProps {
  title: string;
  image: string;
  children: ReactNode;
}

const ResearchAccordion = ({
  title,
  image,
  children,
}: ResearchAccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300 py-6">

      {/* HEADER */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-2xl font-bold text-black">
          {title}
        </h3>

        <span className="text-2xl font-bold text-black">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {/* CONTENT */}
      {open && (
        <div className="mt-6 space-y-6">

          <img
            src={image}
            alt={title}
            className="w-full max-h-[450px] object-cover"
          />

          <div className="text-gray-800 text-base leading-relaxed space-y-4">
            {children}
          </div>

        </div>
      )}
    </div>
  );
};

export default ResearchAccordion;
