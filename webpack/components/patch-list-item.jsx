import React from 'react';
import moment from 'moment';
import StarRating from './star-rating';
import TagList from './tag-list';
import uploadPatch from '../midi';
import { propTypes as midiPropTypes } from './with-midi';

class PatchListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleUploadClick = this.handleUploadClick.bind(this);
  }

  handleUploadClick(event) {
    event.preventDefault();

    fetch(this.props.patch.file.url)
    .then((response) => response.arrayBuffer)
    .then((buffer) => {
      // TODO: what in the hell is up with this
      uploadPatch(this.props.midi.output, buffer);
    });
  }

  render() {
    const patch = this.props.patch;
    const timestamp = moment(patch.created_at).fromNow();
    const canDownload = this.props.midi.output;

    return (
      <li className="patch">
        <div className="patch-section">
          <h2><a href={patch.path}>{patch.name}</a></h2>
          <h5 className="subtext">
            added by <a href={patch.user.profile_url}>{patch.user.name}</a> {timestamp}
          </h5>

          <TagList tags={patch.tags} onTagSelect={this.props.onTagSelect} />
        </div>

        <div className="patch-section">
          <StarRating value={Math.random() * 5} />

          <ul className="actions">
            <li>
              {canDownload &&
                <a href="" onClick={this.handleUploadClick}><i className="fa fa-download" /> Minilogue</a>
              }
            </li>
            <li>
              <a href={patch.file.url}>
                <i className="fa fa-download" /> Sysex File
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

PatchListItem.propTypes = {
  patch: React.PropTypes.shape({
    name: React.PropTypes.string,
    path: React.PropTypes.string,
    created_at: React.PropTypes.string,
    tags: React.PropTypes.array,
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
      profile_url: React.PropTypes.profile_url
    }),
    file: React.PropTypes.shape({
      url: React.PropTypes.string
    })
  }).isRequired,
  onTagSelect: React.PropTypes.func.isRequired,
  midi: midiPropTypes.isRequired
};

export default PatchListItem;
