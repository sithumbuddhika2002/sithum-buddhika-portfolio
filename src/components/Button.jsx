import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  const baseClasses =
    "btn btn-primary flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-500 transition-all duration-300";
  return href ? (
    <a href={href} target={target} className={`${baseClasses} ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded text-lg">{icon}</span>
      )}
    </a>
  ) : (
    <button className={`${baseClasses} ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded text-lg">{icon}</span>
      )}
    </button>
  );
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  const baseClasses =
    "btn btn-outline flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm bg-zinc-800/50 text-zinc-100 border border-zinc-50/20 hover:bg-zinc-700/50 active:bg-zinc-800 transition-all duration-300";
  return href ? (
    <a href={href} target={target} className={`${baseClasses} ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded text-lg">{icon}</span>
      )}
    </a>
  ) : (
    <button className={`${baseClasses} ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded text-lg">{icon}</span>
      )}
    </button>
  );
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };