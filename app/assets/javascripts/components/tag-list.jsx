const TagList = ({ tags }) => {
  const tagEls = tags.map((tag) => {
    return (
      <li>
        <a href="#">{tag}</a>
      </li>
    );
  });

  return (
    <ul className="tags">
      {tags}
    </ul>
  );
}
