const TagList = ({ tags }) => {
  const tagEls = tags.map((tag) => {
    return (
      <li key={tag}>
        <a href="#">{tag}</a>
      </li>
    );
  });

  return (
    <ul className="tags">
      {tagEls}
    </ul>
  );
}
