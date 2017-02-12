import React from 'react';

const TagList = ({ tags, onTagSelect }) => {
  const tagEls = tags.map((tag) => {
    let tagEl;

    if (onTagSelect) {
      tagEl = (
        <a onClick={(e) => { e.preventDefault(); onTagSelect(tag.name); }} href="">
          {tag.name}
        </a>
      );
    } else {
      tagEl = tag.name;
    }

    return (
      <li key={tag.name}>
        {tagEl}
      </li>
    );
  });

  return (
    <ul className="tags">
      {tagEls}
    </ul>
  );
};

TagList.defaultProps = {
  onTagSelect: undefined
};

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    taggings_count: React.PropTypes.number
  })).isRequired,
  onTagSelect: React.PropTypes.func
};

export default TagList;
