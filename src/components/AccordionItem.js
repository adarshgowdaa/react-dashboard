import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordionItem">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordionButton"
      >
        <span className="text-lg font-semibold text-slate-700">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordionContent">
          {content}
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default AccordionItem;