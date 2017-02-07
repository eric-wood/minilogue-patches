class PatchListItem extends React.Component {
  render() {
    const patch = this.props.patch;

    return (
      <li className="patch">
        <div className="patch-section">
          <h2><a href="/patches/{patch.id}">{patch.name}</a></h2>
          <h5 className="subtext">
            added by <a href="/users/{patch.user.id}">{patch.user.name}</a>
            {patch.created_at} ago
          </h5>

          <TagList tags={patch.tags} />
        </div>

        <div className="patch-section">
          <StarRating />

          <ul>
            <li>
              <a href="#">
                <i className="fa fa-star" /> Minilogue
              </a>
            </li>
            <li>
              <a href="{patch.file.url}">
                <i className="fa fa-download" /> Sysex File
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}
