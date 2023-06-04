import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import { Component } from "react";

class Shimmer extends Component {
  render() {
    return <ShimmerPostList postStyle="STYLE_FOUR" col={2} row={4} gap={30} />;
  }
}

export default Shimmer;
