class PatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patches: []
    }

    this.patchSearch();
  }

  patchSearch() {
    $.getJSON('/patches').done((patches) => {
      this.setState({ patches });
    });
  }

  render() {
    const patches = this.state.patches.map((patch) => {
      const WrappedPathListItem = withMidi(PatchListItem);
      return <WrappedPathListItem key={patch.id} patch={patch} />;
    });

    return (
      <ul className="patches">
        {patches}
      </ul>
    );
  }
}
