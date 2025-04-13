import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800/80 transition-all duration-300 border border-zinc-50/10 ${classes}`}
    >
      <figure className="w-12 h-12 p-2 rounded-lg bg-zinc-900/50 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} className="object-contain" />
      </figure>
      <div>
        <h3 className="text-zinc-100 font-medium">{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;