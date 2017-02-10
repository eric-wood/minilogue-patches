import React from 'react';
import moment from 'moment';
import StarRating from './star-rating';
import TagList from './tag-list';

class PatchListItem extends React.Component {
  render() {
    const patch = this.props.patch;
    const timestamp = moment(patch.created_at).fromNow();
    const canDownload = this.props.midi.output;

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
          <StarRating value={Math.random()*5}/>

          <ul className="actions">
            <li>
              {
                canDownload ? <a href="#"><i className="fa fa-download" /> Minilogue</a> : null
              }
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

export default PatchListItem;
