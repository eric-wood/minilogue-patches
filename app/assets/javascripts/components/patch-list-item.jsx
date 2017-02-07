class PatchListItem extends React.Component {
  render() {
    const patch = this.props.patch;
    const timestamp = moment(patch.created_at).fromNow();

    return (
      <li className="patch">
        <div className="patch-section">
          <h2><a href="/patches/{patch.id}">{patch.name}</a></h2>
          <h5 className="subtext">
            added by <a href={patch.user.profile_url}>{patch.user.name}</a> {timestamp}
          </h5>

          <TagList tags={patch.tags} />
        </div>

        <div className="patch-section">
          <StarRating />

          <ul className="actions">
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
