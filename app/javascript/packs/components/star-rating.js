import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  buildStar(icon, value) {
    return (
      <li
        key={value}
        onMouseEnter={() => this.handleMouseEnter(value)}
        onMouseLeave={this.handleMouseLeave}
      >
        {icon}
      </li>
    );
  }

  handleMouseEnter(value) {
    this.setState({ value });
  }

  handleMouseLeave() {
    this.setState({
      value: this.props.value
    });
  }

  render() {
    const numFullStars = Math.floor(this.state.value);
    const fullStars = [];
    for (let i = 1; i <= numFullStars; i += 1) {
      fullStars.push(this.buildStar(<i className="fa fa-star" />, i));
    }

    const hasHalfStar = this.state.value % 1 >= 0.5;
    let halfStar;
    if (hasHalfStar) {
      halfStar = this.buildStar(<i className="fa fa-star-half-empty" />, numFullStars + 1);
    }

    let emptyStarsStart = numFullStars + 1;
    if (hasHalfStar) emptyStarsStart += 1;
    const emptyStars = [];
    for (let i = emptyStarsStart; i <= this.props.outOf; i += 1) {
      emptyStars.push(this.buildStar(<i className="fa fa-star-o" />, i));
    }

    return (
      <ul className="rating">
        {fullStars}
        {halfStar}
        {emptyStars}
      </ul>
    );
  }
}

StarRating.propTypes = {
  value: React.PropTypes.number.isRequired,
  outOf: React.PropTypes.number
};

StarRating.defaultProps = {
  outOf: 5
};

export default StarRating;
