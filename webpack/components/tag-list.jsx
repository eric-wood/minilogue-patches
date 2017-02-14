import React from 'react';

const TagList = ({ tags, onTagSelect, showIcon, showCount }) => {
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
      {showIcon && tagEls.length > 0 &&
        <li><i className="fa fa-tags" /></li>
      }
      {tagEls}
    </ul>
  );
};

TagList.defaultProps = {
  onTagSelect: undefined,
  showIcon: true,
  showCount: false
};

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    taggings_count: React.PropTypes.number
  })).isRequired,
  onTagSelect: React.PropTypes.func,
  showIcon: React.PropTypes.bool,
  showCount: React.PropTypes.bool
};

export default TagList;
