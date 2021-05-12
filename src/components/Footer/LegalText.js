import React from 'react'

const LegalText = () => {

  const currentYear = () => {
    return new Date().getFullYear();
};
  return (
    <div className="Legal_Text">
      <p>© Copyright <span className="current_year">{currentYear()}</span> - Graine de food, Tous droits réservés.</p>
    </div>
)
   
}

export default LegalText;
