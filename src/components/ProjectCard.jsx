import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={`relative p-5 rounded-3xl bg-zinc-800/50 hover:bg-zinc-800/80 transition-all duration-300 border border-zinc-50/10 group ${classes}`}
    >
      <figure className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="title-1 text-zinc-100 mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="text-xs text-zinc-300 bg-zinc-50/10 px-2 py-1 rounded-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full grid place-items-center bg-sky-400 text-zinc-950 hover:bg-sky-300 transition-colors"
          >
            <span className="material-symbols-rounded">arrow_outward</span>
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;