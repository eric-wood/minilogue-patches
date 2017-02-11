import React from 'react';

const TagList = ({ tags }) => {
  const tagEls = tags.map((tag) => {
    return (
      <li key={tag}>
        <a href="">{tag}</a>
      </li>
    );
  });

  return (
    <ul className="tags">
      {tagEls}
    </ul>
  );
};

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default TagList;
